import React, { useState } from 'react';
import { HStack, Avatar, VStack, Text, Box } from '@chakra-ui/react';
import { GithubIcon, GmailIcon } from '@/icons';
function Profile() {
  return (
    <Box h="150px" m="50px auto">
      <HStack spacing={5}>
        <Avatar
          size="2xl"
          src="image.jpg"
          border="4px solid black"
          zIndex={-1}
        />
        <VStack>
          <Text fontSize="3xl" fontWeight="bold">
            김은호
          </Text>
          <Text fontSize="2xl">
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
            동해물과 백두산이 마르고 닳도록
          </Text>
          <HStack justify="space-evenly" w="30%">
            <a
              href="https://github.com/eunnho98"
              target="_blank"
              title="github"
            >
              <GithubIcon fontSize="4xl" display="block" />
            </a>
            <a href="mailto:taemin4u@gmail.com" title="taemin4u@gmail.com">
              <GmailIcon fontSize="4xl" display="block" />
            </a>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Profile;
