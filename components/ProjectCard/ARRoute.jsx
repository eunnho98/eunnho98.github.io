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

function ARRoute(props) {
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
            캡스톤디자인으로 진행한 프로젝트입니다. AR 길찾기 서비스는 실외에만
            있고 실내에서는 찾아보기 힘들다는 것에 착안하여 시작하였습니다.
          </Text>
          <Text>
            사용자가 로그인을 한 후 목적지를 입력하면 현재 위치에 관계없이
            실내외 통합 길찾기 서비스를 제공합니다. 또한 상대방이 자신의 화면을
            보는 것을 수락하면 화면 공유가 진행되고, 터치를 통하여 상대방이
            나에게 길을 안내해주는 기능도 구현하였습니다.
          </Text>
          <Text>
            평소 생소한 분야인 Unity에서 WebRTC를 통한 양방향 통신을 구현하는
            과정에서 여러 트러블슈팅이 있었지만 결국 해내었다는 점에서 자신감을
            가지게 되었습니다. 그리고 기존의 WebRTC 지식을 더욱 확고히 다지는
            계기가 되었습니다.
          </Text>
          <Text>
            또한 서로 다른 분야에 흥미가 있는 학생들이 모여 계속 대화를 진행하며
            결국 의미있는 결과를 내놓았다는 점에서 협업 능력과 의사소통 능력도
            향상되었습니다.
          </Text>
          <LineGraySmall w="100%" my="6px" />
          <VStack alignItems="center" gap={5}>
            <VStack>
              <Text fontWeight="bold">👀 주요 기능</Text>
              <UnorderedList>
                <ListItem>지정된 경로까지의 실내외 통합 길찾기</ListItem>
                <ListItem>화면 공유와 터치로 상대방에게 AR 길안내</ListItem>
                <ListItem>
                  웹에서 상대방과 영상 통화 및 메시지 주고 받기
                </ListItem>
              </UnorderedList>
            </VStack>
            <VStack>
              <Text fontWeight="bold">😎 Github</Text>
              <Link href="https://github.com/eunnho98/Cap_Web">
                <Text _hover={{ textColor: 'blue.300' }}>
                  github.com/eunnho98/Cap_Web
                </Text>
              </Link>
            </VStack>
            <VStack>
              <Text fontWeight="bold">🤔 Want to See?</Text>
              <Text color="red.300">
                <Text as="span" fontWeight="bold">
                  Github
                </Text>
                를 참조해주세요!
              </Text>
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

export default ARRoute;
