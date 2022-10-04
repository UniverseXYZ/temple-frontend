import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { CollectionItem } from '@/components/common';

import cn from 'classnames';
import styles from './.module.sass';

// interface Props {
//   //
// }

import initialData from '@/mocks/data';

export const Collections = (props: any) => {
  //
  const { collections } = props;

  // const { collections } = initialData;

  return (
    <Box pt="30px">
      <SimpleGrid columns={1} spacing="12px">
        {collections.map((collection: any) => (
          collection.name != "OS Shared Storefront Collection" &&
          <CollectionItem key={collection.id} item={collection} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
