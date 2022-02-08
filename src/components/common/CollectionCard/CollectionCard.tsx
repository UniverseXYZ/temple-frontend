import React, { FC } from 'react';
import Link from 'next/link';
import {
  LinkBox,
  LinkOverlay,
  Box,
  Image,
  Flex,
  Spacer,
  HStack,
  useColorMode,
} from '@chakra-ui/react';

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

const CollectionCard: FC<Props> = (props) => {
  const { showAuthor, showFooter, showText, collection } = props;

  const { colorMode } = useColorMode();

  return (
    <>
      <LinkBox>
        <Card
          className={cn(styles.Card, colorMode === 'dark' && styles.Dark)}
          variant="bordered"
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
            <Link href="/collections/slug" passHref>
              <LinkOverlay>
                <Title>{collection.name}</Title>
              </LinkOverlay>
            </Link>
            {showAuthor && <Author>Pavel</Author>}
            {showText && (
              <Text>
                At eu lorem velit at urna lorem adipiscing. At eu lorem velit at
                urna lorem adipiscing.
              </Text>
            )}
            {showFooter && <Footer stats={collection.stats} />}
          </div>
        </Card>
      </LinkBox>
    </>
  );
};

const Title: FC = ({ children }) => (
  <div className={styles.Title}>{children}</div>
);

const Author: FC = ({ children }) => (
  <div className={styles.Author}>
    <span>by</span>
    <Link href="#">{children}</Link>
  </div>
);

const Text: FC = ({ children }) => (
  <div className={styles.Text}>{children}</div>
);

const Footer: React.FC<any> = ({ stats }) => (
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
  showAuthor: true,
  showFooter: true,
  showText: true,
};

export default CollectionCard;
