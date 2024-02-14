'use client';
import React, { useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box, Flex, Image } from '@chakra-ui/react';
import { useAnimation, motion, useScroll, useTransform } from 'framer-motion';

const animation = { duration: 20000, easing: (t: number) => t }

const MotionBox = motion(Box);
const BrandSection = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: 'free-snap',
    loop: true,
    slides: {
      origin: 'center',
      perView: 4.5,
      spacing: 15,
    },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    <Flex as="section" ref={sliderRef} className="keen-slider" py={20}>
      {
        brands.map((d,i) => (
          <Box 
            className="keen-slider__slide"
            key={i} 
            style={{ width: '300px', height: '80px', backgroundColor: 'blackAlpha.300' }}
          >
            <BrandSlide />
          </Box>
        ))
      }
    </Flex>
  );
};

export default BrandSection;

const brands = [
  {
    name: 1,
    image: undefined
  },
  {
    name: 1,
    image: undefined
  },
  {
    name: 1,
    image: undefined
  },
  {
    name: 1,
    image: undefined
  },
  {
    name: 1,
    image: undefined
  },
  {
    name: 1,
    image: undefined
  },
  {
    name: 1,
    image: undefined
  },
  {
    name: 1,
    image: undefined
  },
  {
    name: 1,
    image: undefined
  },
]

const BrandSlide = ({ index }:any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 1], [0.4, 1, 0.7, 0.4]);

  return (
    <MotionBox ref={ref} style={{ scale }} opacity="0.5">
      <Image alt="vercel" src="/vercel.svg" />
    </MotionBox>
  );
};