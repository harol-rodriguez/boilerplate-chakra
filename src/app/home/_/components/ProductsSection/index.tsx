'use client';
import { Box, Container, Flex, Text, Heading, Grid, GridItem, Stack } from '@chakra-ui/react';
import { MotionValue, useTransform, useScroll, motion, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

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
  },
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
  const [innerWidth, setInnerWidth] = useState<any>(null);
  const serviceSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: serviceSectionRef,
    offset: ["start end", "end end"],
  });

  const transform = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0.37, 0.33]);
  const scale = useSpring(transform, {
    stiffness: 100,
    damping: 30,
  });
  const y = useParallax(scale, 120);
  const ImgY = useParallax(useSpring(
    useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.37, 0]), {
    stiffness: 100,
    damping: 30,
  }), 140);

  const scaleX = scrollYProgress
  // useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.999, 1],
    [1, 1, 0]
  )
  const ImgOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7],
    [0, 0, 1]
  )
  
  // useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });
  const xPos = useSpring(useTransform(
    scrollYProgress,
    [0, 0.18, 0.28, 0.281, 0.33, 0.4, 0.42, 0.5, 0.6, 0.62],
    [1000, -500, -500, -800, -1500, -1500, -1500, -2500, -2500, -3500]
  ),{
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  })

  useEffect(()=> {
    setInnerWidth(window.innerWidth)
  }, [])
  
  return (
    <Flex as="section" pt={200} pb="0" bg="gray.800" position="relative" justify="center" ref={serviceSectionRef} overflow="hidden">
      <Flex
        w="120%"
        h="80px"
        bg="white"
        borderRadius="50%"
        position="absolute"
        top="-42px"
      />
      
      <Container textAlign="center" color="white" position="relative" id="slow-scroll-section" pb="0">
        <MotionBox style={{ y }} left="0" zIndex="1" position="absolute">
          <Heading size="3xl" fontWeight="400" lineHeight="1.5">We shape the products and services that improve the lives of millions every single day.</Heading>
          <Text fontSize="xl" color="whiteAlpha.800" pt="4" mb="30">We do this by following a simple approach.</Text>
        </MotionBox>
        <Box mt="390px"></Box>
        
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {services.map((d, i)=> (
            <GridItem key={i} w='100%'>
              <ItemSection  {...{...d,  y: ImgY, opacity: ImgOpacity}}/>
            </GridItem>
          ))}
        </Grid>

      </Container>
      <MotionBox position="fixed" bottom="0" left="0" w="100%" h="10px" bg="white" zIndex="1" style={{ scaleX, opacity }} />
    </Flex>
  );
};

export default ProductsSection;

const ItemSection = ({img: SvgIcon, ...props}: any) => {
  return (
    <MotionBox 
      position="relative" style={{ opacity: props.opacity,  y: props. y }} 
      textAlign="left"
      bg="gray.800"
      border="1px solid"
      borderColor="whiteAlpha.300"
      borderRadius="40"
      h="100%"
      whileHover={{ scale: 1.15, zIndex: 1 }}
      whileTap={{ scale: 0.98, zIndex: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Stack h="50vh" minH="400px" justify="center" align="center" p="10">
        <SvgIcon height="172px" width="300px"/>
        <Heading as="h4" fontSize="24px" color="whiteAlpha.9w00">#{props.title}</Heading>
        <Text color="whiteAlpha.700">{props.text}</Text>
      </Stack>
    </MotionBox>
  )
}