import React, { useMemo, useState, useEffect } from 'react';
import { Text, keyframes } from '@chakra-ui/react';

// 글자 입력 속도
const speed = 150;

// 딜레이 기능
const wait = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

const cursor = keyframes`
from {border-right: 3px solid #111;}
to {border-right: 3px solid #888;}
`;

function ShaderText(props) {
  const [str, setStr] = useState('');
  const animation = `${cursor} 0.9s infinite ease-in`;

  const typingText = async (textArr) => {
    for (const ch of textArr) {
      await wait(speed);
      setStr((prev) => (prev = prev + ch));
    }
    await wait(3000);
    remove(textArr);
  };

  const remove = async (textArr) => {
    const arrCopy = [...textArr];
    while (arrCopy.length) {
      await wait(speed);
      arrCopy.pop();
      setStr(arrCopy.join(''));
    }
    typingText(textArr);
  };

  useEffect(() => {
    const textArr = props.children.split('');
    typingText(textArr);
  }, []);
  return (
    <Text
      {...props}
      _after={{
        marginLeft: '0.6rem',
        content: `""`,
        borderRight: '2px solid #777',
        animation: `${animation}`,
      }}
    >
      {str}
    </Text>
  );
}

export default ShaderText;
