'use client';
import React, { useEffect, useState } from 'react';
import { Spinner, Text, Center, Fade, Image } from '@chakra-ui/react';

const LoadingSpinner = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // setIsPageLoaded(true)
  }, []);

  return (
    <>
      <Center
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="overlay"
        bg="blackAlpha.800"
        opacity={isPageLoaded ? 0 : 1}
        transition="opacity 0.5s ease-in-out"
        pointerEvents="none"
      >
        <Image src="/logo-dark.svg" alt="logo-meteor-labs" width="148" height="56"></Image>
        {/* <Spinner size="xl" color="white" thickness="4px" speed="0.65s" emptyColor="gray.200" /> */}
      </Center>
    </>
  );
};

export default LoadingSpinner;
