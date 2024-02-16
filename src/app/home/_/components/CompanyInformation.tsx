'use client';
import { Box, Text, Heading, Stack, Button } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import XButton from '@/shared/components/UI/XButton';

const CompanyInfoSection = () => {
  return (
    <Stack as="section" py={100} justify="center" align="center" bg="gray.800">
      <Heading as="h3" size="h3" color="white">Company Information</Heading>
      <Text mb="12" color="whiteAlpha.600">We are delighted to meet you and that you know us.</Text>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={24}
        slidesPerView={4.2}
        navigation
        onSlideChange={() => console.log('slide change')}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
          pauseOnMouseEnter: false 
        }}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        style={{width: "100%"}}
      >
        <SwiperSlide
          style={{
            width: "fit-content",
          }}
        >
          <Stack height="100%" align="center" border="1px solid" borderColor="whiteAlpha.300" borderRadius="6" p="4">
            <Text color="whiteAlpha.700">Telephone number</Text>
            <Text color="whiteAlpha.900" fontWeight="600"> 03 6695 1404 </Text>
          </Stack>
        </SwiperSlide>

        <SwiperSlide
          style={{
            width: "fit-content",
          }}
        >
          <Stack height="100%" align="center" border="1px solid" borderColor="whiteAlpha.300" borderRadius="6" p="4">
            <Text color="whiteAlpha.700">CEO</Text>
            <Text color="whiteAlpha.900" fontWeight="600"> Fabian Mezarina </Text>
          </Stack>
        </SwiperSlide>

        <SwiperSlide
          style={{
            width: "fit-content",
          }}
        >
          <Stack height="100%" align="center" border="1px solid" borderColor="whiteAlpha.300" borderRadius="6" p="4">
            <Text color="whiteAlpha.700">Employe</Text>
            <Text color="whiteAlpha.900" fontWeight="600"> 12 people </Text>
          </Stack>
        </SwiperSlide>

        <SwiperSlide
          style={{
            width: "fit-content",
          }}
        >
          <Stack height="100%" align="center" border="1px solid" borderColor="whiteAlpha.300" borderRadius="6" p="4">
            <Text color="whiteAlpha.700">Language</Text>
            <Text color="whiteAlpha.900" fontWeight="600"> ESP - ENG - JAP </Text>
          </Stack>
        </SwiperSlide>

        <SwiperSlide
          style={{
            width: "fit-content",
          }}
        >
          <Stack height="100%" align="center" border="1px solid" borderColor="whiteAlpha.300" borderRadius="6" p="4">
            <Text color="whiteAlpha.700">Website</Text>
            <Text color="whiteAlpha.900" fontWeight="600"> www.metlab.io </Text>
          </Stack>
        </SwiperSlide>

        <SwiperSlide
          style={{
            width: "fit-content",
          }}
        >
          <Stack height="100%" align="center" border="1px solid" borderColor="whiteAlpha.300" borderRadius="6" p="4">
            <Text color="whiteAlpha.700">Telephone number</Text>
            <Text color="whiteAlpha.900" fontWeight="600"> 03 6695 1404 </Text>
          </Stack>
        </SwiperSlide>

      </Swiper>
      
      <Text pt="28" fontSize="56px" maxW="container.xl" color="white" textAlign="center">
        {`"Explore new technological possibilities with us. Visit us to turn your ideas into innovation! Your digital future starts here."`}
      </Text>

      <Text fontSize="2xl" color="whiteAlpha.700">Contact us and book your appointment now</Text>

      <XButton mt="16">
        <Button bg="white" color="gray.800" colorScheme="whiteAlpha">Av. Mariscal La Mar 638, Miraflores</Button>
      </XButton>
    </Stack>
  );
};

export default CompanyInfoSection;
