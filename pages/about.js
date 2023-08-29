import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Title from '@/components/Title';
import { LineGraySmall } from '@/components/layout/Line';

function about() {
  return (
    <Box mx="24px">
      <Title title="About" caption="Who am I ❓" />
      <Text fontSize="2xl">안녕하세요, 김은호입니다! 😎</Text>
      <Text fontSize="2xl">데이터 분석과 웹을 공부하고 있습니다.</Text>
      <Box mt="100px">
        <Text fontSize="4xl" fontWeight="bold">
          Stack
        </Text>
        <LineGraySmall mt="15px" />
        <VStack align="flex-start">
          <Text fontSize="3xl" fontWeight="bold" mt="24px">
            Data Analysis
          </Text>
          <HStack wrap="wrap" mt="8px">
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white"
            />
            <img
              width={200}
              height={200}
              src="https://img.shields.io/badge/tensorflow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
            />
            <img
              width={200}
              height={200}
              src="https://img.shields.io/badge/scikit learn-F7931E?style=for-the-badge&logo=scikit learn&logoColor=white"
            />
          </HStack>
          <Text fontSize="3xl" fontWeight="bold" mt="24px">
            Web
          </Text>
          <HStack wrap="wrap" mt="8px">
            <img
              width={200}
              height={200}
              src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
            />
            <img
              width={200}
              height={200}
              src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/fastapi-009688?style=for-the-badge&logo=fastapi&logoColor=white"
            />
            <img
              width={170}
              height={170}
              src="https://img.shields.io/badge/chakraui-319795?style=for-the-badge&logo=chakraui&logoColor=white"
            />
            <img
              width={250}
              height={250}
              src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled components&logoColor=white"
            />
            <img
              width={170}
              height={170}
              src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react query&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"
            />
          </HStack>
          <Text fontSize="3xl" fontWeight="bold" mt="24px">
            Else
          </Text>
          <HStack wrap="wrap" mt="8px">
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white"
            />
            <img
              width={170}
              height={170}
              src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"
            />
            <img
              width={170}
              height={170}
              src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
            />
            <img
              width={100}
              height={100}
              src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"
            />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}

export default about;
