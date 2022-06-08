import React from 'react';
import {
  //Link,
  LinkBox,
  LinkOverlay,
  Box,
  Image,
  Flex,
  Spacer,
  HStack,
  useColorMode,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { Card, Avatar, BundleTag } from '@/components/common';
import { Ethereum } from '@/components/icons';

import cn from 'classnames';
import styles from './CollectionCard.module.sass';

interface Props {
  showAuthor?: boolean;
  showText?: boolean;
  showFooter?: boolean;
  collection: Collection;
}

interface Collection {
  address: string;
  chainId: string;
  slug: string;
  image: string;
  name: string;
  hasBlueCheck: boolean;
  profileImage: string;
  bannerImage: string;
  floorPrice: string;
  volume: string;
}

export const CollectionCard = (props: Props) => {
  //
  const { showFooter = true } = props;
  const { name, slug, profileImage, bannerImage } = props.collection;

  const { colorMode } = useColorMode();

  return (
    <>
      <LinkBox>
        <Link to={`/collections/${slug}`}>
          <Card
            className={cn(
              styles.Card,
              colorMode === 'dark' && styles.Dark
              //showAuthor && styles.WithAuthor
            )}
            hover
          >
            <Box className={styles.Image}>
              <Image src={bannerImage} alt={name} />
            </Box>

            <Box className={styles.Avatar}>
              <Avatar image={profileImage} name={name} boxSize="68px" />
            </Box>

            <BundleTag className={styles.Bundle}>7</BundleTag>

            <Box className={styles.Content}>
              <Title>{name}</Title>
              {/* {showAuthor && <Author>Pavel</Author>}
              {showText && (
                <Text>
                  At eu lorem velit at urna lorem adipiscing. At eu lorem velit
                  at urna lorem adipiscing.
                </Text>
              )} */}
              {showFooter && <Footer {...props} />}
            </Box>
          </Card>
        </Link>
      </LinkBox>
    </>
  );
};

const Title = ({ children }: any) => (
  <Box className={styles.Title}>{children}</Box>
);

// const Author = ({ children }: any) => (
//   <Box className={styles.Author}>
//     <span>by</span>
//     <a href="#/author">{children}</a>
//   </Box>
// );

// const Text = ({ children }: any) => (
//   <Box className={styles.Text}>{children}</Box>
// );

const Footer = ({ floorPrice, volume }: any) => (
  <>
    <Box className={styles.Footer}>
      <Flex>
        <Box textAlign="left">
          <Box fontSize={12} color="grey" mb={'8px'}>
            Floor price
          </Box>
          <HStack align="center">
            <Ethereum />
            <Box fontWeight={600} fontSize={14}>
              {floorPrice}
            </Box>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <Box fontSize={12} color="grey" mb={'8px'} textAlign="right">
            Volume traded
          </Box>
          <HStack align="center" justify="end">
            <Ethereum />
            <Box fontWeight={600} fontSize={14}>
              {volume}
            </Box>
          </HStack>
        </Box>
      </Flex>
    </Box>
  </>
);
