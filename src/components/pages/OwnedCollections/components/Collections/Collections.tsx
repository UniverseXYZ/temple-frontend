import React, { useState } from 'react';
import {
  Box,
  HStack,
  InputGroup,
  InputLeftElement,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import { CollectionCard, CollectionItem } from '@/components/common';
import { Input, ElasticSwitch, Select, Option } from '@/components/ui';
import { GridIcon, ListIcon } from '@/components/icons';
import { Skeleton } from '../common/skeleton/skeleton';


const grid = [
  {
    value: 'card',
    icon: <GridIcon />,
  },
  {
    value: 'list',
    icon: <ListIcon />,
  },
];

const options = [
  {
    value: 'lowest_price',
    title: 'Lowest price first',
  },
  {
    value: 'highest_price',
    title: 'Highest price first',
  },
];

export const Collections = (props: any) => {
  //
  const { ownedCollections, isLoading } = props;

  const [view, setView] = useState('card');
  const [columns, setColumns] = useState(4);
  const [spacing, setSpacing] = useState('30px');
  const isViewCard = view === 'card';
  
  const onViewChange = (value: any) => {
    //
    const isCard = value === 'card';
    const isList = value === 'list';

    if (isCard) {
      setView('card');
      setColumns(4);
      setView('card');
    }

    if (isList) {
      setView('list');
      setColumns(1);
      setSpacing('12px');
    }
  };

  return (
    <Box pt="30px">
      <Box mb="40px">
        <HStack spacing="15px">
          <Box w="100%">
            <Input placeholder="Search" />
          </Box>

          <Box w="350px">
            <Select placeholder="Sort by" aria-labelledby="Sort by">
              {options.map((option) => (
                <Option key={option.value}>{option.title}</Option>
              ))}
            </Select>
          </Box>

          <Box>
            <ElasticSwitch items={grid} onChange={onViewChange} />
          </Box>
        </HStack>
      </Box>

     {!isLoading ?
      <SimpleGrid columns={columns} spacing={spacing}>
        {ownedCollections.map((collection: any) => (
          collection.collection.name != "OS Shared Storefront Collection" &&
          <>
            {isViewCard ? (
              <CollectionCard
                key={collection.id}
                showAuthor={false}
                showText={false}
                showFooter={true}
                collection={collection.collection}
                ownership={collection.ownership.tokenCount}
              />
            ) : (
              <CollectionItem key={collection.id} item={collection} />
            )}
          </>
        ))}
      </SimpleGrid>
      :
      <Container maxW="container.xl">
        <Skeleton />        
      </Container>
      }
    </Box>
  );
};
