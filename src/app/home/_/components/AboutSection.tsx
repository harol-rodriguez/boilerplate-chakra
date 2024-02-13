'use client';
import { Box, Container, Image, Heading } from '@chakra-ui/react';

const AboutSection = () => {
  return (
    <Container as="section" pt={5}>
      <Box w="100%" borderRadius="xl" overflow="hidden" position="relative">
        <Image objectFit="cover" aspectRatio="72/42" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=3588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="presentation" />

        <Box w="100%" h="100px" position="absolute" bottom="0" backdropFilter={"blur(10px)"}>
          
        </Box>
      </Box>
    </Container>
  );
};

export default AboutSection;
