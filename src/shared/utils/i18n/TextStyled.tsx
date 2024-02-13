import { Box, BoxProps } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React from "react";

interface StyleMap {
  [key: string]: BoxProps;
}

interface AnimationOptions {
  delayChildren?: number;
  staggerChildren?: number;
  initial?: Variants;
  animate?: Variants;
  exit?: Variants;
}

export const getTextStyled = (text: string, stylesMap: { [x: string]: {}; }) => {
  const regex = /\[([^\]]+)\]\(#(.*?)\)/g;

  let parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (lastIndex < match.index) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const [wholeMatch, matchedText, styleId] = match;
    const styleProps: any = stylesMap[styleId] || {};
    
    const styleObject = Object.keys(styleProps).reduce((acc: any, prop: any) => {
      acc[prop] = styleProps[prop];
      return acc;
    }, {});

    parts.push(
      <span key={lastIndex} style={styleObject}>
        {matchedText}
      </span>
    );

    lastIndex = match.index + wholeMatch.length;
  }

  // Añadir cualquier texto restante después del último match
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // Devolver los segmentos como un único elemento JSX
  return <>{parts}</>;
};

export const getChakraTextStyled = (text: string, stylesMap: StyleMap): JSX.Element => {
  const regex = /\[([^\]]+)\]\(#(.*?)\)/g;
  let parts: JSX.Element[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (lastIndex < match.index) {
      parts.push(<React.Fragment key={`text-${lastIndex}`}>{text.substring(lastIndex, match.index)}</React.Fragment>);
    }

    const [wholeMatch, matchedText, styleId] = match;
    const styleProps = stylesMap[styleId] || {};

    parts.push(
      <Box as="span" key={`styled-${lastIndex}`} {...styleProps}>
        {matchedText}
      </Box>
    );

    lastIndex = match.index + wholeMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(<React.Fragment key={`text-end`}>{text.substring(lastIndex)}</React.Fragment>);
  }

  return <>{parts}</>;
};

export const getChakraTextStyledAnimated = (
  text: string,
  stylesMap: StyleMap,
  animationOptions: AnimationOptions,
  mode: 'part' | 'word' | 'letter'
): JSX.Element => {
  const MotionBox = motion(Box);
  const regex = /\[([^\]]+)\]\(#(.*?)\)/g;
  let parts: JSX.Element[] = [];

  // Define container variants for the animation
  const containerVariants: Variants = {
    hidden: animationOptions.initial || { opacity: 0 },
    visible: {
      opacity: 1,
      ...animationOptions.animate,
      transition: {
        delayChildren: animationOptions.delayChildren || 0,
        staggerChildren: animationOptions.staggerChildren || (mode === 'letter' ? 0.1 : (mode === 'word' ? 0.1 : 0.2)),
      },
    },
  };

  // Define item variants for individual animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const processText = (substring: string, key: string, styleProps = {}, isWord: boolean = false) => {
    if (mode === 'letter') {
      // Split substring into letters for letter-by-letter animation
      substring.split('').forEach((letter, index) => {
        // Adjusting the key for each letter
        const letterKey = `${key}-letter-${index}`;
        parts.push(
          <MotionBox as="span" key={letterKey} {...styleProps} variants={itemVariants}>
            {letter}
          </MotionBox>
        );
        // Add a space (as a MotionBox) after each word when processing in letter mode
        if (isWord && index === substring.length - 1) {
          parts.push(
            <MotionBox as="span" key={`${letterKey}-space`} variants={itemVariants}>
              {' '}
            </MotionBox>
          );
        }
      });
    } else if (mode === 'word') {
      // If mode is 'word', treat the whole substring as a single part for animation
      substring.split(/\s+/).forEach((word, index) => {
        const wordKey = `${key}-word-${index}`;
        if (word) {
          parts.push(
            <MotionBox as="span" key={wordKey} {...styleProps} variants={itemVariants}>
              {`${word} `}
            </MotionBox>
          );
        }
      });
    } else {
      // Default to 'part' mode
      parts.push(
        <MotionBox as="span" key={key} {...styleProps} variants={itemVariants}>
          {substring}
        </MotionBox>
      );
    }
  };

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [wholeMatch, matchedText, styleId] = match;
    
    if (lastIndex < match.index) {
      processText(text.substring(lastIndex, match.index), `text-${lastIndex}`, {}, false);
    }
    
    const styleProps = stylesMap[styleId] || {};
    processText(matchedText, `styled-${lastIndex}`, styleProps, mode === 'word' || mode === 'letter');

    lastIndex = match.index + wholeMatch.length;
  }

  if (lastIndex < text.length) {
    processText(text.substring(lastIndex), `text-end-${lastIndex}`, {}, false);
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      {parts}
    </motion.div>
  );
};