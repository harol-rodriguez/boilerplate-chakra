'use client';
import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import { useKeenSlider } from 'keen-slider/react';

const RecentProductsSection = () => {
  const animation = { duration: 30000, easing: (t: number) => t }
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    loop: true,
    slides: {
      origin: "center",
      perView: "auto",
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
    <Stack as="section" py={100} bg="gray.800" color="white" align="center">
      <Heading textAlign="center" maxW="container.lg" size="3xl" fontWeight="400" lineHeight="1.5">Our work is an example of responsibility, values ​​and effort.</Heading>
      <Text mb="24" fontSize="lg" color="whiteAlpha.700" mt="8">Learn about our most recent products in the digital world</Text>


      <Box ref={sliderRef} className="keen-slider">
        <Box className="keen-slider__slide" w="500px" maxW="500px" minW="500px" aspectRatio="1/1" bg="primary.600"></Box>
        <Box className="keen-slider__slide" w="500px" maxW="500px" minW="500px" aspectRatio="1/1" bg="gray.600"></Box>
        <Box className="keen-slider__slide" w="500px" maxW="500px" minW="500px" aspectRatio="1/1" bg="green.900"></Box>
        <Box className="keen-slider__slide" w="500px" maxW="500px" minW="500px" aspectRatio="1/1" bg="primary.600"></Box>
        <Box className="keen-slider__slide" w="500px" maxW="500px" minW="500px" aspectRatio="1/1" bg="gray.600"></Box>
        <Box className="keen-slider__slide" w="500px" maxW="500px" minW="500px" aspectRatio="1/1" bg="green.900"></Box>
      </Box>
    </Stack>
  );
};

export default RecentProductsSection;
