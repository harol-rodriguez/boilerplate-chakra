'use client';
import { useParallax } from '@/shared/hooks/useParralax';
import { getChakraTextStyled } from '@/shared/utils/i18n/TextStyled';
import { Box, Container, Text, Heading, Stack, Button, HStack, Tag } from '@chakra-ui/react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import XButton from '@/shared/components/UI/XButton';

const MotionBox = motion(Box);
const BlogSection = () => {
  const ref = useRef(null);
  const [innerWidth, setInnerWidth] = useState<any>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const transform = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.2, 0]);
  const scale = useSpring(transform, {
    stiffness: 100,
    damping: 30,
  });
  const y = useParallax(scale, 90);
  const styledText = getChakraTextStyled(`[#](#p)Metblog`, {
    'p': {
      color: 'primary.500',
    },
  });

  useEffect(()=> {
    setInnerWidth(window.innerWidth)
  }, [])
  
  return (
    <Box as="section" pt={100} ref={ref}>
      <Container pt="10" pb="0">

        <Stack gap ='0' position="relative" mt="8px" >
          <MotionBox style={{ y }} left="0" top="0" zIndex="1" position="absolute" w="100%">
            <HStack justify="space-between" w="100%">
              <Box>
                <Heading size="h2">{styledText}</Heading>
                <Text fontSize="xl" color="gray.400">Interviews, tips, guides, industry best practices, and news..</Text>
              </Box>
              <XButton>
                <Button size="lg" px="10">See blogs</Button>
              </XButton>
            </HStack>
          </MotionBox>

          <Box w="100%" position="relative" mx="auto" mt="24">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={3}
              navigation
              onSlideChange={() => console.log('slide change')}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true 
              }}
              loop={true}
              onSwiper={(swiper) => console.log(swiper)}
              style={{width: "100%", height: '520px'}}
            >
              {
                [0,1,2,3,4].map((d,i)=> (
                    <SwiperSlide
                      key={`blog-${i}`}
                      style={{
                        width: "fit-content",
                      }}
                    >
                      <Stack height="100%">
                        <Box bg="gray.100" h="320px" borderRadius="2xl">

                        </Box>

                        <Heading as="h3" size="h4">UX review presentations</Heading>
                        <Text color="blackAlpha.700">
                        How do you create compelling presentations that wow your colleagues and impress your managers?
                        </Text>
                      </Stack>
                    </SwiperSlide>
                ))
              }
            </Swiper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogSection;
