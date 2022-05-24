import React from 'react';
import { Box } from '@chakra-ui/react';
import { WalletAddress } from '@/components/common';

import cn from 'classnames';
import styles from './Title.module.sass';

import { Skeleton } from './Skeleton';

interface Props {
  text?: string;
  isLoading?: boolean;
}

export const Title = (props: Props) => {
  //
  const { text, isLoading } = props;
  //
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Box className={styles.Title}>{text}</Box>
          <WalletAddress address="0x6AC7d52Ccd8fe0225dD52b30e5Cb55166c563601" />
        </>
      )}
    </>
  );
};
