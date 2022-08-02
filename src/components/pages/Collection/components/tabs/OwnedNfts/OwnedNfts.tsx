import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { NftCard, NftCardSkeleton } from '@/components/common';

import cn from 'classnames';
import styles from './.module.sass';

import { data } from './mock/data';

export const OwnedNfts = (props: any) => {
  //
  const [isLoading, setIsLoading] = React.useState(true);
  
  const {userNFTs} = props;

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  //
  return (
    <Box pt="40px">
      <SimpleGrid columns={4} spacing="30px">
        {isLoading ? (
          <>
            <NftCardSkeleton />
            <NftCardSkeleton />
            <NftCardSkeleton />
            <NftCardSkeleton />
          </>
        ) : (
          <>
            {userNFTs.map((item: any, index: any) => (
              <NftCard key={index} item={item} />
            ))}
          </>
        )}
      </SimpleGrid>
    </Box>
  );
};
