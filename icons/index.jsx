import { Icon } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';

export function GithubIcon(props) {
  return <Icon {...props} as={BsGithub} />;
}

export function GmailIcon(props) {
  return <Icon {...props} as={BiLogoGmail} />;
}
