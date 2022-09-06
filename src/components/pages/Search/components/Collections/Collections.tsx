import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { CollectionCard } from '@/components/common';

// import cn from 'classnames';
// import styles from './.module.sass';

// interface Props {
//   //
// }

import initialData from '@/mocks/data';

export const Collections = (props: any) => {
  //
  const {} = props;

  const { collections } = initialData;

  return (
    <Box pt="30px">
      <SimpleGrid columns={4} spacing="30px">
        {collections.map((collection: any, index: number) => (
          <CollectionCard key={index} collection={collection} ownership={0} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
