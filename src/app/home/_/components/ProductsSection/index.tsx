'use client';
import { Box, Container, Flex, Text, Heading } from '@chakra-ui/react';
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
    const handleScroll = (e:any) => {
      // Prevent default scroll behavior
      e.preventDefault();
      
      // Adjust the deltaY for a slower scroll effect
      const slowerScrollSpeed = e.deltaY * 0.45;
      const scrollTo = window.scrollY + slowerScrollSpeed;

      // Apply the adjusted scroll
      // window.scrollBy(0, slowerScrollSpeed);
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth' // Esto hace que el scroll sea suave
      });
    };

    // Identify your specific section where you want to apply the slow scroll
    const section = document.getElementById('slow-scroll-section');
    
    // Add event listener
    section?.addEventListener('wheel', handleScroll, { passive: false });

    // Cleanup event listener
    return () => section?.removeEventListener('wheel', handleScroll);
  }, [])
  
  return (
    <Flex as="section" py={100} pt="150px" bg="gray.800" position="relative" justify="center" ref={serviceSectionRef}>
      <Flex
        w="120%"
        h="80px"
        bg="white"
        borderRadius="50%"
        position="absolute"
        top="-42px"
      />
      
      <Container textAlign="center" color="white" position="relative" id="slow-scroll-section">
        <Heading size="3xl" fontWeight="400" lineHeight="1.5">We shape the products and services that improve the lives of millions every single day.</Heading>
        <Text fontSize="xl" color="whiteAlpha.800" pt="4" mb="30">We do this by following a simple approach.</Text>

        {services.map((d, i)=> (
            <ItemSection key={i} />
        ))}
      </Container>
      <MotionBox position="fixed" bottom="0" left="0" w="100%" h="10px" bg="white" zIndex="1" style={{ scaleX, opacity }} />
    </Flex>
  );
};

export default ProductsSection;

const ItemSection = () => {
  return (
    <Flex h="50vh"  align="center">
      <MotionBox 
        position="relative"
        bg="whiteAlpha.400" 
        h="400px" w="300px"
      >
      </MotionBox>
    </Flex>
  )
}