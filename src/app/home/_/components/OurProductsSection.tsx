'use client';
import { useParallax } from '@/shared/hooks/useParralax';
import { getChakraTextStyled } from '@/shared/utils/i18n/TextStyled';
import { Box, Container, Text, Heading, Stack } from '@chakra-ui/react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion(Box);
const OurProductsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const transform = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0.4, 0.43]);
  const scale = useSpring(transform, {
    stiffness: 100,
    damping: 30,
  });
  const y = useParallax(scale, 120);
  const styledText = getChakraTextStyled(`Find out what's new at [Meteorlabs](#p)`, {
    'p': {
      color: 'primary.500',
    },
  });

  return (
    <Box as="section" pt={100} ref={ref}>
      <Container>
        
        <Stack pb="8" gap ='0' position="relative" mt="20" >
          <MotionBox style={{ y }} left="0" zIndex="1" position="absolute">
            <Heading size="h2">{styledText}</Heading>
            <Text fontSize="xl">Explore these presentations we have for you.</Text>
          </MotionBox>
        </Stack>
        <Box h="100px"></Box>
      </Container>
    </Box>
  );
};

export default OurProductsSection;
