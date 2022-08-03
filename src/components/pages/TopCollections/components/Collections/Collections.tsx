import React, {useEffect, useState} from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { CollectionItem } from '@/components/common';

import cn from 'classnames';
import styles from './.module.sass';

// interface Props {
//   //
// }

import initialData from '@/mocks/data';
import { GetTopCollections } from '@/api/reservoir';

export const Collections = (props: any) => {
  //
  const {} = props;

  const { collections } = initialData;
  const [items, setItems] = useState([]);
  useEffect(() => {
    GetTopCollections('7DayVolume', 20).then(res => {
      setItems(res.collections)
    })
  }, [])


  return (
    <Box pt="30px">
      <SimpleGrid columns={1} spacing="12px">
        {items.map((collection, index) => (
          <CollectionItem key={index} item={collection} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
