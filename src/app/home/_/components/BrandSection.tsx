'use client';
import React, {  } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box, Flex } from '@chakra-ui/react';

const animation = { duration: 5000, easing: (t: number) => t }

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
    <Flex as="section" ref={sliderRef} className="keen-slider" py={100}>
      {
        brands.map((d,i) => (
          <Box 
          className="keen-slider__slide"
          key={i} maxW="200px" h="80px" bg="blackAlpha.300"/>
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