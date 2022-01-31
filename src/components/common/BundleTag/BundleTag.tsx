import React from 'react';
import cn from 'classnames';

import { HStack } from '@chakra-ui/react';
import { BundleIcon } from '@/components/icons';

import styles from './BundleTag.module.sass';

type Props = {
  children?: string;
  className?: string;
};

const BundleTag: React.FC<Props> = ({ className, children }) => (
  <>
    <div className={cn(styles.bundle, className)}>
      <HStack>
        <BundleIcon boxSize={'20px'} />
        <span>{children}</span>
      </HStack>
    </div>
  </>
);

export default BundleTag;
