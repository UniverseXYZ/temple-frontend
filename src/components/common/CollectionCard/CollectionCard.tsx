import React, { FC } from 'react';
import { LinkBox, LinkOverlay, Box, Image } from '@chakra-ui/react';
import Link from 'next/link';

import { BundleTag } from '@/components/common';
import { Avatar, Footer } from './components';
import styles from './CollectionCard.module.sass';

interface Props {
  showAuthor?: boolean;
  showText?: boolean;
  showFooter?: boolean;
}

const CollectionCard: FC<Props> = (props) => {
  const { showAuthor, showFooter, showText } = props;
  return (
    <>
      <LinkBox>
        <Box className={styles.card} layerStyle="bordered">
          <div className={styles.image}>
            <Image
              src="/mocks/collection-card-image.png"
              alt="Collection Background"
            />
          </div>

          <Avatar className={styles.avatar} boxSize={68} />

          <BundleTag className={styles.bundle}>7</BundleTag>

          <div className={styles.content}>
            <Link href="/collections/slug" passHref>
              <LinkOverlay>
                <Title>Collection Name</Title>
              </LinkOverlay>
            </Link>
            {showAuthor && <Author>Pavel</Author>}
            {showText && (
              <Text>
                At eu lorem velit at urna lorem adipiscing. At eu lorem velit at
                urna lorem adipiscing.
              </Text>
            )}
            {showFooter && <Footer />}
          </div>
        </Box>
      </LinkBox>
    </>
  );
};

const Title: FC = ({ children }) => (
  <div className={styles.title}>{children}</div>
);

const Author: FC = ({ children }) => (
  <div className={styles.author}>
    <span>by</span>
    <Link href="#">{children}</Link>
  </div>
);

const Text: FC = ({ children }) => (
  <div className={styles.text}>{children}</div>
);

CollectionCard.defaultProps = {
  showAuthor: true,
  showFooter: true,
  showText: true,
};

export default CollectionCard;
