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
  collection: any;
}

const CollectionCard = (props: Props) => {
  const { showAuthor, showFooter, showText, collection } = props;

  const { colorMode } = useColorMode();

  return (
    <>
      <LinkBox>
        <Link to="/collections/flud">
          <Card
            className={cn(
              styles.Card,
              colorMode === 'dark' && styles.Dark,
              showAuthor && styles.WithAuthor
            )}
            hover
          >
            <div className={styles.Image}>
              <Image
                src="/mocks/collection-card-image.png"
                alt="Collection Background"
              />
            </div>

            <div className={styles.Avatar}>
              <Avatar
                image={collection.logo}
                name={collection.name}
                boxSize="68px"
              />
            </div>

            <BundleTag className={styles.Bundle}>7</BundleTag>

            <div className={styles.Content}>
              <Title>{collection.name}</Title>
              {showAuthor && <Author>Pavel</Author>}
              {showText && (
                <Text>
                  At eu lorem velit at urna lorem adipiscing. At eu lorem velit
                  at urna lorem adipiscing.
                </Text>
              )}
              {showFooter && <Footer stats={collection.stats} />}
            </div>
          </Card>
        </Link>
      </LinkBox>
    </>
  );
};

const Title = ({ children }: any) => (
  <div className={styles.Title}>{children}</div>
);

const Author = ({ children }: any) => (
  <div className={styles.Author}>
    <span>by</span>
    <Link href="#/author">{children}</Link>
  </div>
);

const Text = ({ children }: any) => (
  <div className={styles.Text}>{children}</div>
);

const Footer = ({ stats }: any) => (
  <>
    <div className={styles.Footer}>
      <Flex>
        <Box textAlign="left">
          <Box fontSize={12} color="grey" mb={'8px'}>
            Floor price
          </Box>
          <HStack align="center">
            <Ethereum />
            <Box fontWeight={600} fontSize={14}>
              {stats.floorPrice}
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
              {stats.totalValue}
            </Box>
          </HStack>
        </Box>
      </Flex>
    </div>
  </>
);

CollectionCard.defaultProps = {
  showAuthor: false,
  showText: false,
  showFooter: true,
};

export default CollectionCard;
