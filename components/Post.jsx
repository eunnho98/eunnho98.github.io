import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { LineGraySmall } from './layout/Line';

function Post({ category, title, caption }) {
  return (
    <Box w="100%" mt="45px">
      <Text fontSize="xl" mb="4px">
        {category}
      </Text>
      <Box w="100%" h="350px" bgColor="blue.200" mb="30px" />
      <Text fontSize="3xl" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="2xl">{caption}</Text>
      <LineGraySmall mt="15px" />
    </Box>
  );
}

export default Post;
