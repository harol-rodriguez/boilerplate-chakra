'use client';
import ParallaxText from '@/shared/components/parallaxSroll';
import { getChakraTextStyled } from '@/shared/utils/i18n/TextStyled';
import { Box, Text, Container, Flex, HStack, Heading, Image, Stack, Divider } from '@chakra-ui/react';
import BannerImage from '../../_/assets/banner.png'
import { motion } from 'framer-motion';
import XButton from '@/shared/components/UI/XButton';

const MotionBox = motion(Box);
const InnovationBanner = () => {
  const styledText = getChakraTextStyled(`We transform companies through [design innovations](#p)`, {
    'p': {
      color: 'primary.500',
    },
  });

  return (
    <Box as="section" pt={100}>
      <HStack align="center" overflow="hidden" pb="20">
        <Box as="section">
          <ParallaxText baseVelocity={-3}>_ WEB3 _ BLOCKCHAIN _ DEVELOPMENT _ DESIGN _ FINTECH</ParallaxText>
          <ParallaxText baseVelocity={3}>_ WEB3 _ BLOCKCHAIN _ DEVELOPMENT _ DESIGN _ FINTECH</ParallaxText>
        </Box>
      </HStack>

      <Box bg="primary.100">
        <Container>
          <Stack gap="20">
            <Flex justify="center" align="center" py="20">
              <Stack>
                <Heading maxW="600px" lineHeight="1.4">
                  {styledText}
                </Heading>

                <Text maxW="650px">A full-service creative agency designing and building inventive digital experiences across all platforms and brand touchpoints</Text>
              </Stack>

                <MotionBox w="auto" h="400px">
                  <XButton>
                    <Image alt="banner" src={BannerImage.src}></Image>
                  </XButton>
                </MotionBox>
            </Flex>

            <HStack gap="6">
              <MotionBox
                flex="1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Stack bg="white" borderRadius="xl" p="7" gap="4">
                  <Box boxSize="42px" border="1px solid" borderColor="gray.100" borderRadius="lg" mb="5">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.54492 16.455V16.7417C8.54492 22.51 15.8483 31.1933 18.7916 34.46C19.4399 35.18 20.5599 35.18 21.2083 34.46C24.1516 31.1933 31.4549 22.51 31.4549 16.7417V16.455C31.4549 10.1283 26.3266 5 19.9999 5C13.6733 5 8.54492 10.1283 8.54492 16.455ZM20 21.6667C17.2375 21.6667 15 19.4497 15 16.7125V16.6208C15 13.8837 17.2375 11.6667 20 11.6667C22.7625 11.6667 25 13.8837 25 16.6208V16.7125C25 19.4497 22.7625 21.6667 20 21.6667Z" fill="#3C75EF"/>
                    </svg>
                  </Box>

                  <Box>
                    <Heading as="h4" fontSize="24px" my="1">Location</Heading>
                    <Text color="blackAlpha.400">Come see us Mon - Fri 9am - 5pm</Text>
                  </Box>

                  <Divider borderColor="blackAlpha.200" />

                  <Text color="primary.600">Av. Mariscal La Mar 638, Miraflores</Text>
                </Stack>
              </MotionBox>

              <MotionBox
                flex="1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Stack bg="white" borderRadius="xl" p="7" gap="4">
                  <Box boxSize="42px" border="1px solid" borderColor="gray.100" borderRadius="lg" mb="5">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.54492 16.455V16.7417C8.54492 22.51 15.8483 31.1933 18.7916 34.46C19.4399 35.18 20.5599 35.18 21.2083 34.46C24.1516 31.1933 31.4549 22.51 31.4549 16.7417V16.455C31.4549 10.1283 26.3266 5 19.9999 5C13.6733 5 8.54492 10.1283 8.54492 16.455ZM20 21.6667C17.2375 21.6667 15 19.4497 15 16.7125V16.6208C15 13.8837 17.2375 11.6667 20 11.6667C22.7625 11.6667 25 13.8837 25 16.6208V16.7125C25 19.4497 22.7625 21.6667 20 21.6667Z" fill="#3C75EF"/>
                    </svg>
                  </Box>

                  <Box>
                    <Heading as="h4" fontSize="24px" my="1">Phone</Heading>
                    <Text color="blackAlpha.400">Give us a call office hours now.</Text>
                  </Box>

                  <Divider borderColor="blackAlpha.200" />

                  <Text color="primary.600">(51) 987 644 356</Text>
                </Stack>
              </MotionBox>

              <MotionBox
                flex="1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Stack bg="white" borderRadius="xl" p="7" gap="4">
                  <Box boxSize="42px" border="1px solid" borderColor="gray.100" borderRadius="lg" mb="5">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.54492 16.455V16.7417C8.54492 22.51 15.8483 31.1933 18.7916 34.46C19.4399 35.18 20.5599 35.18 21.2083 34.46C24.1516 31.1933 31.4549 22.51 31.4549 16.7417V16.455C31.4549 10.1283 26.3266 5 19.9999 5C13.6733 5 8.54492 10.1283 8.54492 16.455ZM20 21.6667C17.2375 21.6667 15 19.4497 15 16.7125V16.6208C15 13.8837 17.2375 11.6667 20 11.6667C22.7625 11.6667 25 13.8837 25 16.6208V16.7125C25 19.4497 22.7625 21.6667 20 21.6667Z" fill="#3C75EF"/>
                    </svg>
                  </Box>

                  <Box>
                    <Heading as="h4" fontSize="24px" my="1">E-mail</Heading>
                    <Text color="blackAlpha.400">We will be attentive to your message!</Text>
                  </Box>

                  <Divider borderColor="blackAlpha.200" />

                  <Text color="primary.600">Meteor.labs@gmail.com</Text>
                </Stack>
              </MotionBox>
            </HStack>
          </Stack>

        </Container>
      </Box>
      
      <Box h="600px">
        <Image h="100%" w="100%" objectFit="cover" alt="endBanner" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
      </Box>
    </Box>
  );
};

export default InnovationBanner;
