'use client';
import { Box, Flex, HStack, Heading } from '@chakra-ui/react';

const ProductsSection = () => {
  return (
    <Flex as="section" py={100} bg="gray.800" position="relative" justify="center">
      <Flex
        w="120%"
        h="80px"
        bg="white"
        borderRadius="50%"
        position="absolute"
        top="-42px"
      />

      <HStack align="center" overflow="hidden">
      </HStack>
    </Flex>
  );
};

export default ProductsSection;
