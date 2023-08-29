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

function KHULazyBed(props) {
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
            알람을 들어도 다시 끄고 자는 사람, 낮잠을 너무 많이 자서
            바이오리듬이 깨지는 일이 부지기수인 사람들을 위해 진행한 IoT 침대
            프로젝트입니다.
          </Text>
          <Text>
            알람이 울렸는데도 침대에 계속 있는 것이 감지되거나 지정한 시간 외에
            침대에 누우면 알람이 꺼지지 않도록 하였습니다. 또한 무게 감지 센서로
            수면 중 뒤척이는 정도를 파악해 '꿀잠', '비꿀잠' 시간을 사용자에게
            시각화 하는 서비스도 제공합니다.
          </Text>
          <Text>
            각종 센서와 라즈베리파이를 처음 사용한 프로젝트여서 시행착오가
            많았지만 결국 성공적으로 끝마쳤다는 점에서 무엇이든 할 수 있다는
            자신감을 가졌습니다.
          </Text>
          <Text>
            또한 최신 기술인 WebRTC에 대한 개념을 숙지하게 해주었던
            프로젝트였습니다.
          </Text>
          <LineGraySmall w="100%" my="6px" />
          <VStack alignItems="center" gap={5}>
            <VStack>
              <Text fontWeight="bold">👀 주요 기능</Text>
              <UnorderedList>
                <ListItem>침대에서 벗어나기 전까지 계속 울리는 알람</ListItem>
                <ListItem>지정된 시간 외에 침대에 누우면 경보음 출력</ListItem>
                <ListItem>사용자에게 시각화된 수면 데이터 제시</ListItem>
              </UnorderedList>
            </VStack>
            <VStack>
              <Text fontWeight="bold">😎 Github</Text>
              <Link href="https://github.com/LTF-G">
                <Text _hover={{ textColor: 'blue.300' }}>github.com/LTF-G</Text>
              </Link>
            </VStack>
            <VStack>
              <Text fontWeight="bold">🤔 Want to See?</Text>
              <Text color="red.300">데모 영상으로 제작되었습니다</Text>
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

export default KHULazyBed;
