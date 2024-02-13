'use client';
import React, { useState } from 'react';
import { Box, Flex, Image, Text, VStack, Stack, BoxProps, Avatar, HStack } from '@chakra-ui/react';
import { AnimationProps, motion, useAnimation } from 'framer-motion';

interface ProfileCardProps extends BoxProps {
  name: string;
  positionDescription?: string;
  initial?: string;
  image?: string;
  color?: string;
  coinImage?: string;
  quote?: string;
  stack?: Array<any>;
};

const MotionStack = motion(Stack);
const MotionBox = motion(Box);

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  positionDescription,
  image,
  quote,
  ...props
}) => {

  return (
    <Stack
      {...props}
    >
      <ProfileCardFlipComponent {...{ name, positionDescription, image, quote }}/>

      <Stack
        gap="0"
        align="start"
        justify="center"
      >
        <Text fontWeight="bold" fontSize="16px">
          {name}
        </Text>
        <Text opacity="0.5" fontSize="14px">
          {positionDescription}
        </Text>
      </Stack>
    </Stack>
  );
};

export default ProfileCard;

const ProfileCardFlipComponent = ({ name, positionDescription, image, quote }: any) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const flipVariants = {
    hover: {
      rotateX: 180,
      transition: {
        rotateX: { duration: 0.5, ease: "easeInOut" },
        scale: { duration: 0.4, ease: "easeOut" }
      }
    },
    initial: {
      rotateX: 0,
      transition: {
        rotateX: { duration: 0.9, ease: "easeInOut" },
        scale: { duration: 0.4, ease: "easeOut" }
      }
    },
  };

  const opacityVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const handleMouseEnter = () => {
    controls.start("hover");
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    controls.start("initial");
    setIsHovered(false);
  };

  const transition = isHovered ? 
    {duration: 1, ease: "easeOut"} 
    : {duration: .3, ease: "easeIn"}

  return (
    <Box position="relative" w="300px" h="400px"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <MotionBox
        animate={controls}
        initial="initial"
        variants={flipVariants}
        w="100%" h="100%"
        position="absolute"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Contenido frontal */}
        <MotionStack
          variants={opacityVariants}
          w="100%" h="100%"
          position="absolute"
          rotateX={0}
        >
          <AvatarContent {...{ name, positionDescription, image, quote }}/>
        </MotionStack>

        {/* Contenido trasero */}
        <MotionStack
          variants={opacityVariants}
          w="100%" h="100%"
          position="absolute"
          rotateX={180}
          style={{ backfaceVisibility: 'hidden', rotateX: 180 }}
        >
          <HoveredContent {...{ name, positionDescription, image, quote }}/>
        </MotionStack>
      </MotionBox>
    </Box>
  );
};

const AvatarContent = ({image, name}: any) => (
  <Box bg="primary.100" h="100%">
    <Image
      src={`/img/metmojis/${image}`}
      alt={name}
      h="110%"
      objectFit="cover"
    />
  </Box>
)

const HoveredContent = ({image, name, quote}: any) => (
  <Stack
    w="100%"
    h="100%"
    minH="220px"
    bg="primary.100"
    display="flex"
    alignItems="center"
    justifyContent="center"
    gap="5"
  >
    <Avatar src={`/img/metmojis/${image}`} name={name} bg="white" boxSize="80px" />

    <Text textAlign="center">{quote}</Text>

    <HStack>
      {
        mockStack.map((stack: any, index) => (
          <Flex 
            alignItems="center"
            justifyContent="center"
            key={index} 
            w="44px" h="32px" bg="white" 
            borderRadius="md"
          >
            <Image
              src={`/img/stack/${stack.name}.svg`}
              alt={stack.text}
            />
          </Flex>
        ))
      }
    </HStack>
  </Stack>
)

const mockStack = [
  {
    name: 'react',
    text: 'React'
  },
  {
    name: 'nodejs',
    text: 'Node'
  },
  {
    name: 'react',
    text: 'React'
  },
  {
    name: 'react',
    text: 'React'
  },
]
