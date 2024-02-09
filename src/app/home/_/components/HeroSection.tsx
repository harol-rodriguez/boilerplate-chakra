'use client';
import { getChakraTextStyled } from '@/shared/utils/i18n/TextStyled';
import { Box, Container, Divider, Heading, Stack } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const MotionHeading = motion(Heading);

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textAnimation.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const textFromCMS = textAnimation[currentIndex];
  const styledText = getChakraTextStyled(textFromCMS, {
    'primary': {
      color: 'primary.500',
      bg: 'gray.100'
    },
  });

  return (
    <Box as="section">
      <Container size="md">
        <Stack align="center">
          <AnimatePresence  mode="wait">
            <MotionHeading
              as="h2"
              size="2xl"
              textAlign="center"
              key={currentIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {styledText}
            </MotionHeading>
          </AnimatePresence>
        </Stack>
      </Container>

      <Stack align="center">

        <Divider borderColor="black" borderWidth={2} width="400px" />

        <Box>

        </Box>
      </Stack>
    </Box>
  );
};

export default HeroSection;
const textFromCMS = 'Meteor is a [UI design](#color-blue) and [Development agency](#color-red)';
const styledText = getChakraTextStyled(textFromCMS, {
  'color-red': {
    color: 'red',
    bg: 'gray.800'
  },
});

const textAnimation = [
"We transform [your ideas](#primary) into solutions that [simplify life](#primary).",
"Let's [build a Tomorrow](#primary) That's Brighter and Easier, [Together](#primary).",
"[your ideas, simplify life lets build together](#primary)"]