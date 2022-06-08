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

import {
  Card,
  Avatar,
  BundleTag,
  CurrencyExchanger,
} from '@/components/common';

import cn from 'classnames';
import styles from './CollectionCard.module.sass';

interface Props {
  showAuthor?: boolean;
  showText?: boolean;
  showFooter?: boolean;
  collection: any;
}

export const CollectionCard = (props: Props) => {
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
            <Box className={styles.Image}>
              <Image
                src="/mocks/collection-card-image.png"
                alt="Collection Background"
              />
            </Box>

            <Box className={styles.Avatar}>
              <Avatar
                image={collection.logo}
                name={collection.name}
                boxSize="68px"
              />
            </Box>

            <BundleTag className={styles.Bundle}>7</BundleTag>

            <Box className={styles.Content}>
              <Title>{collection.name}</Title>
              {showAuthor && <Author>Pavel</Author>}
              {showText && (
                <Text>
                  At eu lorem velit at urna lorem adipiscing. At eu lorem velit
                  at urna lorem adipiscing.
                </Text>
              )}
              {showFooter && <Footer stats={collection.stats} />}
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

const Author = ({ children }: any) => (
  <Box className={styles.Author}>
    <span>by</span>
    <a href="#/author">{children}</a>
  </Box>
);

const Text = ({ children }: any) => (
  <Box className={styles.Text}>{children}</Box>
);

const Footer = ({ stats }: any) => (
  <>
    <Box className={styles.Footer}>
      <Flex>
        <Box textAlign="left">
          <Box fontSize={12} color="grey" mb={'8px'}>
            Floor price
          </Box>

          <Box fontWeight={600} fontSize={14}>
            <CurrencyExchanger value={stats.floorPrice} maxAbbreviate={1e3} />
          </Box>
        </Box>
        <Spacer />
        <Box>
          <Box fontSize={12} color="grey" mb={'8px'} textAlign="right">
            Volume traded
          </Box>

          <Flex fontWeight={600} fontSize={14} justify="end">
            <CurrencyExchanger value={stats.totalValue} maxAbbreviate={1e3} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  </>
);

CollectionCard.defaultProps = {
  showAuthor: false,
  showText: false,
  showFooter: true,
};
