import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { NftCard, NftCardSkeleton } from '@/components/common';

import cn from 'classnames';
import styles from './.module.sass';

export const OwnedNfts = (props: any) => {
  //
  const { userNFTs } = props;
  console.log(userNFTs, "userNFTs")
  //
  return (
    <Box pt="40px">
      <SimpleGrid columns={4} spacing="30px">
        {(
          <>
            {userNFTs.length > 0 && userNFTs.map((item, index) => (
              <NftCard key={index} item={item.token} />
            ))}
          </>
        )}
      </SimpleGrid>
    </Box>
  );
};
