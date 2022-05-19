import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { NftCard } from '@/components/common';

import cn from 'classnames';
import styles from './.module.sass';

import { data } from './mock/data';

export const OwnedNfts = () => {
  //
  return (
    <Box pt="40px">
      <SimpleGrid columns={4} spacing="30px">
        {data.map((item, index) => (
          <NftCard key={index} item={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
