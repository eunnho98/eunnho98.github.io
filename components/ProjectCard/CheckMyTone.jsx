import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css?after';
import {
  Box,
  Flex,
  HStack,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  UnorderedList,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { LineGraySmall } from '../layout/Line';
import Link from 'next/link';

function CheckMyTone(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imgList = props.imgList;
  const title = props.title;

  return (
    <Box>
      <Text textAlign="center" fontSize="3xl" fontWeight="bold">
        {title}
      </Text>
      <Flex w="100%" mt="12px" gap={8} alignItems="flex-start" justify="center">
        <Image
          display="block"
          src={imgList}
          w="350px"
          h="400px"
          onClick={onOpen}
          cursor="pointer"
        />
        <VStack>
          <Text>
            자신의 목소리를 음으로 표현해주는 웹사이트입니다. 녹음 버튼을 누르면
            시작이 되고, 정지 버튼을 누르면 종료합니다. 또한 피아노를 클릭하면
            해당되는 소리가 납니다.
          </Text>
          <Text>
            자신이 느끼는 목소리와 남이 듣는 목소리는 다르다는 생각에서 시작한
            프로젝트입니다. 이와 관련된 Web API가 있는지 찾아보던중 Web Audio
            API가 있어 진행하였습니다.
          </Text>
          <Text>
            음성 데이터를 어떻게 바이트로 처리할 것인지, duration은 어떻게 할
            것인지 등 실제 코드는 간단하지만 많은 생각을 필요로 한
            프로젝트이었습니다.
          </Text>
          <Text>
            피아노 컴포넌트를 구현하면서 CSS와 JS 문법에 대한 개념을 더욱 확실히
            숙지할 수 있었습니다.
          </Text>
          <LineGraySmall w="100%" my="6px" />
          <VStack alignItems="center" gap={5}>
            <VStack>
              <Text fontWeight="bold">👀 주요 기능</Text>
              <UnorderedList>
                <ListItem>피아노 타일을 클릭하면 그에 맞는 소리 출력</ListItem>
                <ListItem>자신의 목소리를 음으로 출력</ListItem>
              </UnorderedList>
            </VStack>
            <VStack>
              <Text fontWeight="bold">😎 Github</Text>
              <Link href="https://github.com/eunnho98/Check-My-Tone">
                <Text _hover={{ textColor: 'blue.300' }}>
                  github.com/eunnho98/Check-My-Tone
                </Text>
              </Link>
            </VStack>
            <VStack>
              <Text fontWeight="bold">🤔 Want to See?</Text>
              <Link href="https://check-my-tone.vercel.app/">
                <Text _hover={{ textColor: 'blue.300' }}>
                  check-my-tone.vercel.app
                </Text>
              </Link>
            </VStack>
            <VStack>
              <Text fontWeight="bold">🛠 Tech Stack</Text>
              <Text>Next.js, Typescript, Chakra UI, Recoil</Text>
            </VStack>
          </VStack>
        </VStack>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image src={imgList} w="100%" h="500px" display="block" />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CheckMyTone;
