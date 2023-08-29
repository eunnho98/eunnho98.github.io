import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Title from '@/components/Title';
import Hellsmate from '@/components/ProjectCard/Hellsmate';
import NextBooking from '@/components/ProjectCard/NextBooking';
import { LineGraySmall } from '@/components/layout/Line';
import CheckMyTone from '@/components/ProjectCard/CheckMyTone';
import KHULazyBed from '@/components/ProjectCard/KHULazyBed';
import ARRoute from '@/components/ProjectCard/ARRoute';

function project() {
  const hells_imgList = [
    'hellsmate/1.png',
    'hellsmate/2.png',
    'hellsmate/3.png',
    'hellsmate/4.png',
    'hellsmate/5.png',
  ];

  const booking_imgList = [
    'booking/1.png',
    'booking/2.png',
    'booking/3.png',
    'booking/4.png',
  ];

  const AR_imgList = ['AR/1.png', 'AR/2.png', 'AR/3.png'];

  const bed_imgList = ['KHULazy/1.png', 'KHULazy/2.png', 'KHULazy/3.png'];

  const myTone_imgList = 'myTone/1.png';
  return (
    <Box mx="24px">
      <Title
        title="Project"
        caption="이미지를 클릭하면 확대하여 볼 수 있습니다."
      />
      <Hellsmate imgList={hells_imgList} title="Hellsmate" />
      <LineGraySmall w="100%" my="36px" />
      <NextBooking imgList={booking_imgList} title="Next Booking" />
      <LineGraySmall w="100%" my="36px" />
      <CheckMyTone imgList={myTone_imgList} title="Check My Tone" />
      <LineGraySmall w="100%" my="36px" />
      <KHULazyBed imgList={bed_imgList} title="KHU-Lazy Bed" />
      <LineGraySmall w="100%" my="36px" />
      <ARRoute imgList={AR_imgList} title="YoKHURoute" />
    </Box>
  );
}

export default project;
