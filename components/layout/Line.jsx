import { Box } from '@chakra-ui/react';
import React from 'react';

export function LineGraySmall(props) {
  return <Box {...props} h="2px" bgColor="gray.400" />;
}

export function LineGrayLarge(props) {
  return <Box {...props} h="6px" bgColor="gray.500" />;
}
