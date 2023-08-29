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

function Hellsmate(props) {
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
            속칭 '아가리어터'라고 불리는 말로만 다이어트를 하는 다이어터를 위해
            제작한 서비스입니다. 기존 헬스앱 기록 방식에 지인과의 인증이란
            제도를 함께 도입하여 사용자들이 의무감을 가지도록 하였습니다.
          </Text>
          <Text>
            IT 연합 커뮤니티인 UNIT에서 주최한 해커톤인 UNITHON에서
            진행하였습니다. 해커톤의 특성상 당시에는 데모 기능만 구현하였으나
            후에 전반적인 로직을 개선하고 실제 배포까지 완료했다는 점에서 의미가
            있습니다.
          </Text>
          <Text>
            현업에 종사하시는 분들과 함께 git-flow를 바탕으로 협업을 하며
            커뮤니케이션 능력도 향상되었습니다.
          </Text>
          <LineGraySmall w="100%" my="6px" />
          <VStack alignItems="center" gap={5}>
            <VStack>
              <Text fontWeight="bold">👀 주요 기능</Text>
              <UnorderedList>
                <ListItem>식이 조절, 운동 등 자신의 목표 정하기</ListItem>
                <ListItem>링크를 통해 친구 초대하기</ListItem>
                <ListItem>목표 성취도에 따른 점수 매기기</ListItem>
              </UnorderedList>
            </VStack>
            <VStack>
              <Text fontWeight="bold">😎 Github</Text>
              <Link href="https://github.com/Unithon-9th-9TEAM/hells-mate">
                <Text _hover={{ textColor: 'blue.300' }}>
                  github.com/Unithon-9th-9TEAM/hells-mate
                </Text>
              </Link>
            </VStack>
            <VStack>
              <Text fontWeight="bold">🤔 Want to See?</Text>
              <Link href="https://www.hellsmate.com/">
                <Text _hover={{ textColor: 'blue.300' }}>hellsmate.com</Text>
              </Link>
            </VStack>
            <VStack>
              <Text fontWeight="bold">🛠 Tech Stack</Text>
              <UnorderedList>
                <ListItem>FE: NextJS, TypeScript, EmotionJS</ListItem>
                <ListItem>BE: node.js, mysql</ListItem>
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

export default Hellsmate;
