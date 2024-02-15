"use client";
import React, { useState, useEffect } from 'react';
import { Container, Box, Flex, Heading, Button, HStack } from "@chakra-ui/react"
import Link from "next/link";
import Image from 'next/image'

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
      mb="16px"
      position="fixed"
      top="0"
      zIndex="9"
      w="100%"
      bg="whiteAlpha.800"
      transform={show ? 'translateY(0)' : 'translateY(-100%)'}
      transition="transform 0.3s ease-in-out"
      backdropFilter="blur(100px)"
      boxShadow="0px 1px 5px var(--chakra-colors-blackAlpha-200)"
    >
      <Container py={4} px={{base: 4, md: 2}}>
        <Flex justify="space-between" align="center">
          <Link href="/">
            <Image src="/logo.svg" priority={true} alt="logo-meteor-labs" width="148" height="56"></Image>
            {/* <Heading as="h1" size="lg" id="brand_logo" color="primary.500">Logo</Heading> */}
          </Link>

          <HStack>
            <Link href="#">
              <Button py={{base: 3, md: 4}} minH="fit-content" w="140px">
                Start a Project
              </Button>
            </Link>
          </HStack>

        </Flex>
      </Container>
    </Box>
  );
};

export default MainNavBar;
