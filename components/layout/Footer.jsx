import { Box, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  const bgColor = useColorModeValue('gray.200', 'gray.900');
  return (
    <VStack
      w="100%"
      bgColor={bgColor}
      h="250px"
      position="relative"
      transform="translateY(100%)"
      textAlign="center"
      justify="center"
    >
      <Text fontSize="2xl" fontWeight="bold">
        Copyright © 2023, All right reserved.
      </Text>
      <Text fontSize="xl" fontWeight="semibold">
        Built with NextJS
      </Text>
    </VStack>
  );
}

export default Footer;
