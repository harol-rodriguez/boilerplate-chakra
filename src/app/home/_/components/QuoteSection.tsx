'use client';
import { Box, Container, Text, Image, Flex, HStack, Stack } from '@chakra-ui/react';

const QuoteSection = () => {
  return (
    <Box py={20}>
      <Container as="section" bg="primary.100" borderRadius="lg" py={8} px={14}>
        <HStack spacing="8">
          <Stack flex="1" gap={5}>
            <Text fontSize={"2xl"} fontStyle="italic" fontWeight="bold" lineHeight="1.8" letterSpacing="0.51px">
              “Dive into a realm where the future is being forged today. Join us in exploring groundbreaking technologies that are shaping a new tomorrow of Lima.”
            </Text>
            
            <HStack>
              <Box w="52px" h="52px" bg="gray.200" borderRadius="full" />

              <Stack gap="0">
                <Text fontWeight="bold">Fabian Mezarina</Text>
                <Text>CEO - Founder in Meteorlabs</Text>
              </Stack>
            </HStack>
          </Stack>

          <Box maxW="437px" bg="white" borderRadius="xl">
            <Image src={`/img/metmojis/Fabian.gif`} alt={"Fabian CEO"} h="130%" />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default QuoteSection;
