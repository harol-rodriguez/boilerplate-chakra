'use client';
import { getChakraTextStyledAnimated } from '@/shared/utils/i18n/TextStyled';
import { Box, Container, Divider, Heading, Stack } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { heroTextAnimation } from '../data/text-animation.mock';
import TeamSection from './team';

const MotionHeading = motion(Heading);

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // setIsPageLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroTextAnimation.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const textFromCMS = heroTextAnimation[currentIndex];
  const styledText = getChakraTextStyledAnimated(textFromCMS, {
    'primary': {
      color: 'primary.500',
      bg: 'gray.100'
    },
  }, {
    staggerChildren: 0.05
  }, 'letter');

  return (
    <Box
      as="section" pb={20} pt="24"
    >
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

          <Divider borderColor="primary.200" borderWidth={2} width="400px" mb="60px" />
        </Stack>
      </Container>

      <TeamSection />
    </Box>
  );
};

export default HeroSection;
