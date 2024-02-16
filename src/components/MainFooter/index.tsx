"use client";
import React, { useState, useEffect } from 'react';
import { Container, Box, Flex, Image, Text, HStack } from "@chakra-ui/react"
import Link from "next/link";
import XButton from '@/shared/components/UI/XButton';

const MainFooter = () => {
  return (
    <Box
      as="nav"
      zIndex="9"
      w="100%"
      bg="gray.800"
      transition="transform 0.3s ease-in-out"
      boxShadow="0px -1px 5px var(--chakra-colors-whiteAlpha-200)"
      position="relative"
    >
      <Container py={4} px={{base: 4, md: 2}}>
        <Flex justify="space-between" align="center">
          <Box flex='1'></Box>

          <Flex flex="2" justify="center">
            <Link href="/">
              <Image src="/logo-dark.svg" alt="logo-meteor-labs" height="80px"></Image>
            </Link>
          </Flex>

          <Text flex='1'>2024 Meteor Labs All rights reserved</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default MainFooter;
