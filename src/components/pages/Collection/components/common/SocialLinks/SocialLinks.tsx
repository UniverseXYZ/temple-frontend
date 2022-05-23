import React from 'react';
import { Box, HStack, Link } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui';

import cn from 'classnames';
import styles from './SocialLinks.module.sass';

import {
  DiscordIcon,
  InstagramIcon,
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
  WebsiteIcon,
} from '@/components/icons';

// interface Props {
//   //
// }

const links = [
  {
    title: 'Twitter',
    url: 'https://twitter.com/',
    component: <TwitterIcon />,
  },
  {
    title: 'Discord',
    url: 'https://discord.com/',
    component: <DiscordIcon />,
  },
  {
    title: 'Website',
    url: 'https://google.com/',
    component: <WebsiteIcon />,
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/',
    component: <InstagramIcon />,
  },
  {
    title: 'Medium',
    url: 'https://medium.com/',
    component: <MediumIcon />,
  },
  {
    title: 'Telegram',
    url: 'https://telegram.com/',
    component: <TelegramIcon />,
  },
];

export const SocialLinks = (props: any) => {
  //
  const {} = props;
  //
  return (
    <HStack spacing="12px">
      {links.map((item, index) => (
        <Box key={index} className={styles.Icon}>
          <Tooltip label={item.title} placement="top" variant="white">
            <Link>{item.component}</Link>
          </Tooltip>
        </Box>
      ))}
    </HStack>
  );
};
