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

import { Skeleton } from './Skeleton';

// interface Props {
//   //
// }

let links: any = [];

function updateLinks(metadata: any) {
  links = [];
    
  if(metadata.discordUrl) {
    links.push(
      {
        title: 'Discord',
        url: metadata.discordUrl,
        component: <DiscordIcon />,
      }
    )
  } 

  if(metadata.externalUrl) {
    links.push(
      {
        title: 'Website',
        url: metadata.externalUrl,
        component: <WebsiteIcon />,
      }
    )
  }

  if(metadata.twitterUsername) {
    links.push(
      {
        title: 'Twitter',
        url: 'https://www.twitter.com/' + metadata.twitterUsername,
        component: <TwitterIcon />,
      }
    )
  }
}

export const SocialLinks = (props: any) => {
  //
  const { metadata, isLoading } = props;
  
  updateLinks(metadata)
  React.useEffect(() => {
    updateLinks(metadata)
  }, [metadata])

  //
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <HStack spacing="12px">
          {links.map((item: any, index: any) => (
            <Box key={index} className={styles.Icon}>
              <Tooltip label={item.title} placement="top" variant="white">
                <Link href={item.url}>{item.component}</Link>
              </Tooltip>
            </Box>
          ))}
        </HStack>
      )}
    </>
  );
};
