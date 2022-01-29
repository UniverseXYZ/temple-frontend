import React from 'react';
import { Box } from '@chakra-ui/react';

import { BundleTag } from '@/components/common';
import { Background, Avatar, Content } from './components';
import styles from './CollectionCard.module.sass';

const CollectionCard: React.FC = () => (
  <>
    <Box className={styles.card} layerStyle="bordered">
      <Background />
      <BundleTag className={styles.bundle} />
      <Avatar />
      <Content />
    </Box>
  </>
);

export default CollectionCard;
