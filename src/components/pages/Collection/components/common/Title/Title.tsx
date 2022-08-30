import React from 'react';
import { Box } from '@chakra-ui/react';
import { WalletAddress } from '@/components/common';

import cn from 'classnames';
import styles from './Title.module.sass';

import { Skeleton } from './Skeleton';

interface Props {
  text?: string;
  address: string
  isLoading?: boolean;
}

export const Title = (props: Props) => {
  //
  const { text, address, isLoading } = props;
  //
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Box className={styles.Title}>{text}</Box>
          <WalletAddress address={address} />
        </>
      )}
    </>
  );
};
