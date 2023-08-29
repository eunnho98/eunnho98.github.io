import {
  ChakraProvider,
  extendTheme,
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
const theme = extendTheme({
  styles: {
    global: (props) => ({
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        padding: 0,
        margin: 0,
        bg: props.colorMode === 'light' ? 'gray.100' : 'gray.700',
      },
    }),
  },
  fonts: {
    heading: ` 'Noto Sans KR', sans-serif`,
    body: ` 'Noto Sans KR', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  const bg = useColorModeValue('gray.300', 'gray.900');
  return (
    <ChakraProvider theme={theme}>
      <Box w="100%" bgColor="gray.800" position="sticky" top="0" zIndex="100">
        <Header />
      </Box>
      <Flex flexDirection="column" minH="100vh">
        <Flex flexGrow={1} maxW="774px" m="0 auto">
          <Component {...pageProps} />
        </Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;

/** TODO
 *  프로젝트 정리
 *  본격적으로 포스팅
 */
