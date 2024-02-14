'use client';
import { Box, Container, Flex, Text, Heading } from '@chakra-ui/react';
import { MotionValue, useTransform, useScroll, motion, useSpring } from 'framer-motion';
import { useRef } from 'react';

import appDev from '@/shared/assets/illustrations/app-dev.svg';
import chatGpt from '@/shared/assets/illustrations/chat-gpt.svg';
import design from '@/shared/assets/illustrations/design.svg';
import DxInnovation from '@/shared/assets/illustrations/dx-innovation.svg';
import webDev from '@/shared/assets/illustrations/web-dev.svg';
import web3 from '@/shared/assets/illustrations/web3.svg';
import { useParallax } from '@/shared/hooks/useParralax';

const services = [
  {
    title: 'App development',
    img: appDev,
    text: 'Unlock futuristic business potential through decentralized, secure tech!NFT, DeFi, CryptoWallet, blockchain...'
  },
  {
    title: 'Chat GPT',
    img: chatGpt,
    text: 'Unlock futuristic business potential through decentralized, secure tech!NFT, DeFi, CryptoWallet, blockchain...'
  },
  {
    title: 'Design and creativity',
    img: design,
    text: 'Unlock futuristic business potential through decentralized, secure tech!NFT, DeFi, CryptoWallet, blockchain...'
  },
  {
    title: 'Dx Innovation',
    img: DxInnovation,
    text: 'Unlock futuristic business potential through decentralized, secure tech!NFT, DeFi, CryptoWallet, blockchain...'
  },,
  {
    title: 'Web development',
    img: webDev,
    text: 'Unlock futuristic business potential through decentralized, secure tech!NFT, DeFi, CryptoWallet, blockchain...'
  },
  {
    title: 'Web 3',
    img: web3,
    text: 'Unlock futuristic business potential through decentralized, secure tech!NFT, DeFi, CryptoWallet, blockchain...'
  },
]
const MotionBox = motion(Box);

const ProductsSection = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Flex as="section" py={100} pt="150px" bg="gray.800" position="relative" justify="center">
      <Flex
        w="120%"
        h="80px"
        bg="white"
        borderRadius="50%"
        position="absolute"
        top="-42px"
      />
      
      <Container textAlign="center" color="white">
        <Heading size="3xl" fontWeight="400" lineHeight="1.5">We shape the products and services that improve the lives of millions every single day.</Heading>
        <Text fontSize="xl" color="whiteAlpha.800" pt="4">We do this by following a simple approach.</Text>


        <Box overflow="hidden">
          {[1, 2, 3, 4, 5].map((image, index) => (
            <Image id={image} key={index} />
          ))}
          <MotionBox className="progress" style={{ scaleX }} />
        </Box>
      </Container>

    </Flex>
  );
};

export default ProductsSection;

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Flex as="section" h="100vh" justify="center" align="center" position="relative" style={{ scrollSnapAlign: "center", perspective: "500px"}}>
      <Box ref={ref} w="300px" h="400px" position="relative" maxH="90vh" m="20px" bg="white" overflow="hidden">
        <MotionBox position="absolute">
          <DxInnovation />
        </MotionBox>
      </Box>
      <MotionBox style={{ y }} position="absolute" left="calc(50% + 130px)">{`#00${id}`}</MotionBox>
    </Flex>
  );
}