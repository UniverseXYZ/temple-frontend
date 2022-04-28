import React from 'react';
import cn from 'classnames';

import { Box, HStack } from '@chakra-ui/react';
import { BundleIcon } from '@/components/icons';

import styles from './BundleTag.module.sass';

type Props = {
  children?: string;
  className?: string;
};

const BundleTag = ({ className, children }: Props) => (
  <Box className={cn(styles.Wrapper, className)}>
    <HStack>
      <BundleIcon className={styles.Icon} />
      <span>{children}</span>
    </HStack>
  </Box>
);

export default BundleTag;
