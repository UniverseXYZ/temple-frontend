import React from 'react';
import { Box } from '@chakra-ui/react';

import { CollectionCard, CollectionList, Empty } from '@/components/common';

import cn from 'classnames';
import styles from './.module.sass';

export const Collections = (props: any) => {
  //
  const { collections } = props;

  const isEmpty = collections.length === 0;

  if (isEmpty) return <Empty />;

  console.log('collections', collections);

  return (
    <Box as="section" >
      {/* {collections.map((collection: any) => (
        <CollectionCard
          showAuthor={false}
          showText={false}
          showFooter={true}
          key={collection.id}
          collection={collection}
          ownership={0}
        />
      ))} */}
      {collections.map((collection: any, index: number) => (
        <CollectionList
          key={index}
          collections={collection}
          handle
          removable
        />
      ))}
    </Box>
  );

}
