import { Box } from '@chakra-ui/react';
import React from 'react';
import Title from '@/components/Title';

function posts() {
  return (
    <Box mx="24px">
      <Title title="Posts" caption="전체 포스트를 확인해보세요." />
    </Box>
  );
}

export default posts;
