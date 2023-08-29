import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { LineGrayLarge } from './layout/Line';

function Title({ title, caption }) {
  return (
    <Box mt="50px" maxWidth="750px">
      <Text fontSize="5xl" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="2xl" ml="6px">
        {caption}
      </Text>
      <LineGrayLarge mt="12px" mb="70px" />
    </Box>
  );
}

export default Title;
