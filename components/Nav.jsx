import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function Nav(props) {
  const link = props.link;
  return (
    <Box onClick={props.onClick}>
      <Text
        fontSize="2xl"
        fontWeight="semibold"
        _hover={{
          color: '#FFC0CB',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        }}
      >
        <Link href={link}>{props.children}</Link>
      </Text>
    </Box>
  );
}

export default Nav;
