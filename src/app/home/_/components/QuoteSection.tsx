'use client';
import { Box, Container, Text, Image, Flex, HStack, Stack } from '@chakra-ui/react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const imageVariants = {
  offscreen: {
    scale: 1.4,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        duration: 0.8,
        stiffness: 100,
        damping: 30,
      },
      opacity: {
        duration: 0.5,
      },
    },
  },
};

const QuoteSection = () => {
  return (
    <MotionBox py={20}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.6 }}
    >
      <Container as="section" bg="primary.100" borderRadius="lg" py={8} px={14}>
        <HStack spacing="8">
          <Stack flex="1" gap={5}>
            <Text fontSize={"2xl"} fontStyle="italic" fontWeight="bold" lineHeight="1.8" letterSpacing="0.51px">
              “Dive into a realm where the future is being forged today. Join us in exploring groundbreaking technologies that are shaping a new tomorrow of Lima.”
            </Text>
            
            <HStack>
              <Box w="52px" h="52px" bg="gray.200" borderRadius="full" />

              <Stack gap="0">
                <Text fontWeight="bold">Fabian Mezarina</Text>
                <Text>CEO - Founder in Meteorlabs</Text>
              </Stack>
            </HStack>
          </Stack>

          
          <MotionBox maxW="437px" bg="white" borderRadius="xl">
            <MotionImage
              variants={imageVariants}
              src={`/img/metmojis/Fabian.gif`}
              alt={"Fabian CEO"} h="130%"
              objectFit="cover"
            />
          </MotionBox>
        </HStack>
      </Container>
    </MotionBox>
  );
};

export default QuoteSection;
