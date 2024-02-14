'use client';
import { useParallax } from '@/shared/hooks/useParralax';
import { getChakraTextStyled, getChakraTextStyledAnimated } from '@/shared/utils/i18n/TextStyled';
import { Box, Container, Image, Heading, Text, Stack, Flex } from '@chakra-ui/react';
import { circOut, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const AboutSection = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const transform = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0.6, 0.43]);
  const scale = useSpring(transform, {
    stiffness: 100,
    damping: 30,
  });
  const y = useParallax(scale, 120);
  const width = useTransform(scrollYProgress, [0, 0.8, 1], ['50%', '40%', '100%'], { ease: circOut });
  
  const styledText = getChakraTextStyled(`Learn more about [Meteorlabs](#p)`, {
    'p': {
      color: 'primary.500',
    },
  });

  return (
    <Container as="section" pt={40} ref={ref}>
      <Stack pb="8" gap ='0' position="relative" mt="20" >
        <MotionBox style={{ y }} left="0" zIndex="1" position="absolute">
          <Heading size="h2">{styledText}</Heading>
          <Text fontSize="xl">Explore these presentations we have for you.</Text>
        </MotionBox>
      </Stack>

      <Stack align="end">

        <MotionBox
          // style={{ width }}
          borderRadius="xl"
          overflow="hidden"
          position="relative" 
          h="709px"
          w="100%"
          zIndex="1"
        >
          <Image
            w="100%"
            h="100%" 
            objectFit="cover" 
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=3588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="presentation"
          />

          <Box w="100%" h="100px" position="absolute" bottom="0" backdropFilter={"blur(10px)"}>
            
          </Box>
        </MotionBox>
      </Stack>
    </Container>
  );
};

export default AboutSection;
