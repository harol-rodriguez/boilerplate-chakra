'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box, Flex, HStack, Image, Skeleton, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import teamMembers from './team-members'; // Asume una lista de miembros del equipo
import ProfileCard from './profile-card';

const animation = { duration: 5000, easing: (t: number) => t }

const TeamSection = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const slidesPerView = useBreakpointValue({
    base: 1.5,
    sm: 1.5,
    md: 2.2,
    lg: 4.5,
    xl: 4.2,
  });

  const [sliderRef, sliderInstanceRef] = useKeenSlider<HTMLDivElement>({
    mode: 'free-snap',
    loop: true,
    slides: {
      origin: 'center',
      perView: slidesPerView,
      spacing: 15,
    },
    // created(s) {
    //   s.moveToIdx(5, true, animation)
    // },
    // updated(s) {
    //   s.moveToIdx(s.track.details.abs + 5, true, animation)
    // },
    // animationEnded(s) {
    //   s.moveToIdx(s.track.details.abs + 5, true, animation)
    // },
  })

  const moveToCenter = useCallback((index: any) => {
    // Accede a la instancia del slider y usa moveToSlide para mover a la diapositiva específica
    if (sliderInstanceRef.current) {
      sliderInstanceRef.current.moveToIdx(index);
    }
  }, [sliderInstanceRef]);
  
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  if (!isPageLoaded) {
    return (
      <HStack w="100%" overflow="hidden" gap={5} justify="center">
        <Skeleton aspectRatio="32/36" bg="primary.100" minW="320px" />
        <Skeleton aspectRatio="32/36" bg="primary.100" minW="320px" />
        <Skeleton aspectRatio="32/36" bg="primary.100" minW="320px" />
        <Skeleton aspectRatio="32/36" bg="primary.100" minW="320px" />
        <Skeleton aspectRatio="32/36" bg="primary.100" minW="320px" />
        <Skeleton aspectRatio="32/36" bg="primary.100" minW="320px" />
        <Skeleton aspectRatio="32/36" bg="primary.100" minW="320px" />
      </HStack>
    );
  }

  return (
    <Flex ref={sliderRef} className="keen-slider">
      {teamMembers.map((member, i) => (
        <ProfileCard
          className="keen-slider__slide"
          onClick={() => moveToCenter(i)}
          key={i} name={member.name}
          positionDescription={member.position}
          image={member.image}
          quote={member.quote}
          stack={member.stack}
        />
      ))}
    </Flex>
  );
};

export default TeamSection;
