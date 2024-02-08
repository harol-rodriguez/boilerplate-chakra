"use client";
import React, { useState, useEffect } from 'react';
import { Container, Box, Flex, Heading, Button, HStack } from "@chakra-ui/react"
import Link from "next/link";

const MainNavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY || window.scrollY <= 0) {
      setShow(true);
    } else {
      setShow(false);
    }

    setLastScrollY(window.scrollY);
  };


  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <Box
      as="nav"
      bg="gray.900"
      mb="16px"
      position="fixed"
      top="0"
      zIndex="1"
      w="100%"
      transform={show ? 'translateY(0)' : 'translateY(-100%)'}
      transition="transform 0.3s ease-in-out"
    >
      <Container py={4} px={{base: 4, md: 2}}>
        <Flex justify="space-between" align="center">
          <Link href="/">
            <Heading as="h1" size="lg" id="brand_logo" color="white">Logo</Heading>
          </Link>

          <HStack>
            <Link href="#">
              <Button py={{base: 3, md: 4}} minH="fit-content" w="140px">
                Button
              </Button>
            </Link>
          </HStack>

        </Flex>
      </Container>
    </Box>
  );
};

export default MainNavBar;
