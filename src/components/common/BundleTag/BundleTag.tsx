import React from 'react';
import cn from 'classnames';

import { Box, HStack } from '@chakra-ui/react';
import { BundleIcon } from '@/components/icons';
import { Tooltip } from '@/components/ui';

import styles from './BundleTag.module.sass';

type Props = {
  children?: string;
  className?: string;
};

const BundleTag = ({ className, children }: Props) => (
  <Tooltip label="Owned NFTs">
    <Box className={cn(styles.Wrapper, className)}>
      <HStack>
        <BundleIcon className={styles.Icon} />
        <span>{children}</span>
      </HStack>
    </Box>
  </Tooltip>
);

export default BundleTag;
