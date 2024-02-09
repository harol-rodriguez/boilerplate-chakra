import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface StyleMap {
  [key: string]: BoxProps;
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