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

function NextBooking(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imgList = props.imgList;
  const title = props.title;
  const settings = {
    arrows: false, // 슬라이드를 할 화살표를 나타낼 것인가?
    dots: true, // 밑에 점을 클릭하여 슬라이드 할 것인가?
    infinite: true, // 마지막으로 갔을 시 처음으로 돌아옴
    speed: 500, // 넘어가는 속도
    slidesToShow: 1, // 한 화면에 보이는 콘텐츠 개수
    slidesToScroll: 1, // 한 번에 넘어가는 콘텐츠 개수
  };
  return (
    <Box>
      <Text textAlign="center" fontSize="3xl" fontWeight="bold">
        {title}
      </Text>
      <Flex w="100%" mt="12px" gap={8} alignItems="flex-start" justify="center">
        <Box w="350px">
          <Box as={Slider} {...settings}>
            {imgList.map((img, idx) => (
              <Image
                src={img}
                w="200px"
                h="400px"
                key={idx}
                onClick={onOpen}
                cursor="pointer"
              />
            ))}
          </Box>
        </Box>
        <VStack>
          <Text>
            로그인부터 결제까지 진행할 수 있는 웹페이지입니다. SEO의 중요성이
            대두됨에 따라 Next.js의 학습을 목적으로 진행한 프로젝트입니다.
          </Text>
          <Text>
            API 호출을 위해 최대한 getStaticProps, getServerSideProps을
            이용하였습니다. 또한 Full-Stack 프레임워크인 Next.js의 장점을
            살려보려고 FE, BE 모두 Next.js를 사용하였습니다.
          </Text>
          <Text>
            Recoil, Prisma 같은 최신 라이브러리와 결제 API 등 새로운 API를
            사용해보는 계기가 되었습니다.
          </Text>
          <Text>
            Routing, CSR, SSR, SSG에 대한 개념 및 SEO의 중요성을 다시금 상기할
            수 있었습니다.
          </Text>
          <LineGraySmall w="100%" my="6px" />
          <VStack alignItems="center" gap={5}>
            <VStack>
              <Text fontWeight="bold">👀 주요 기능</Text>
              <UnorderedList>
                <ListItem>사용자 기호에 맞는 숙소 예약</ListItem>
                <ListItem>Firebase Storage에 사용자 정보 저장</ListItem>
                <ListItem>iamport API를 통한 가상 결제</ListItem>
              </UnorderedList>
            </VStack>
            <VStack>
              <Text fontWeight="bold">😎 Github</Text>
              <Link href="https://github.com/eunnho98/Next_Booking">
                <Text _hover={{ textColor: 'blue.300' }}>
                  github.com/eunnho98/Next_Booking
                </Text>
              </Link>
            </VStack>
            <VStack>
              <Text fontWeight="bold">🤔 Want to See?</Text>
              <Text color="red.300">현재 호스팅을 종료하였습니다.</Text>
            </VStack>
            <VStack>
              <Text fontWeight="bold">🛠 Tech Stack</Text>
              <UnorderedList>
                <ListItem>FE: NextJS, TypeScript, Chakra UI, Recoil</ListItem>
                <ListItem>BE: Prisma, Firebase</ListItem>
              </UnorderedList>
            </VStack>
          </VStack>
        </VStack>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Box w="100%" onClick={onOpen}>
              <Box as={Slider} {...settings}>
                {imgList.map((img, idx) => (
                  <Image src={img} w="200px" h="500px" key={idx} />
                ))}
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default NextBooking;
