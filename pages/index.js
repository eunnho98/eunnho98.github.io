import Title from '@/components/Title';
import Post from '@/components/Post';
import Profile from '@/components/Profile';
import { LineGraySmall } from '@/components/layout/Line';
import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

function index() {
  return (
    <Box mx="24px">
      <Title title="김은호의 블로그" caption="환영합니다." />
      <Profile />
      <Box mt="100px">
        <Text fontSize="4xl" fontWeight="bold">
          최근 포스트
        </Text>
        <LineGraySmall mt="15px" />
        <Post
          category="개발"
          title="ReactJS에 대하여"
          caption="ReactJS를 공부하고 정리를 해보았습니다."
        />
        <Post
          category="개발"
          title="ReactJS에 대하여"
          caption="ReactJS를 공부하고 정리를 해보았습니다."
        />
        <Post
          category="개발"
          title="ReactJS에 대하여"
          caption="ReactJS를 공부하고 정리를 해보았습니다."
        />
      </Box>

      <Link href="/posts">
        <Button
          colorScheme="facebook"
          w="220px"
          h="50px"
          fontSize="xl"
          display="block"
          margin="0 auto"
          mt="32px"
        >
          더 많은 포스트 보기
        </Button>
      </Link>
    </Box>
  );
}

export default index;
