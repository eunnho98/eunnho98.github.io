import React, { useEffect, useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Text,
  useColorMode,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Nav from '../Nav';
import { IconButton } from '@chakra-ui/react';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMdOrSmaller] = useMediaQuery('(max-width: 800px)');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleColorModeToggle = () => {
    toggleColorMode();
    const styleEl = document.createElement('style');
    const cssText = document.createTextNode(
      'html * { transition: color, background-color 0.3s ease-out!important }',
    );
    styleEl.appendChild(cssText);
    document.head.appendChild(styleEl);
    setTimeout(() => {
      document.head.removeChild(styleEl);
    }, 300);
  };

  useEffect(() => {
    if (!isMdOrSmaller && isOpen) {
      onClose();
    }
  }, [isMdOrSmaller]);
  return (
    <HStack
      m="0 auto"
      justify="space-between"
      pt="10px"
      pb="10px"
      maxW="700px"
      color="white"
      mx={isMdOrSmaller ? '24px' : 'auto'}
    >
      <Link href="/">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          _hover={{
            color: '#FFC0CB',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease-in',
          }}
        >
          Eunnho
        </Text>
      </Link>
      {isMdOrSmaller ? (
        <HStack>
          <IconButton size="lg" onClick={onOpen}>
            <HamburgerIcon w={6} h={6} />
          </IconButton>
          <IconButton size="lg" onClick={handleColorModeToggle}>
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </HStack>
      ) : (
        <HStack gap={5}>
          <Nav link="/posts">Posts</Nav>
          <Nav link="/project">Project</Nav>
          <Nav link="/about">About</Nav>
          <IconButton size="lg" onClick={handleColorModeToggle}>
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </HStack>
      )}

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody mt="24px">
            <Nav link="/posts" onClick={onClose}>
              Posts
            </Nav>
            <Nav link="/project" onClick={onClose}>
              Project
            </Nav>
            <Nav link="/about" onClick={onClose}>
              About
            </Nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
}

export default Header;
