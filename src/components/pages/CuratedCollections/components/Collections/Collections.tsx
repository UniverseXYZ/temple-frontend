import React, {useState} from 'react';
import { CollectionCard, CollectionItem } from '@/components/common';
import { GridIcon, ListIcon } from '@/components/icons';
import { ElasticSwitch, Input, Option, Select } from '@/components/ui';
import { Box, HStack, SimpleGrid } from '@chakra-ui/react';

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

export const  Collections = (props: any) => {
  //
  const { curatedCollections, isLoading } = props;

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

     {!isLoading && <SimpleGrid columns={columns} spacing={spacing}>
        {curatedCollections.map((collection: any, index: number) => (
          <>
            {isViewCard ? (
              <CollectionCard 
                key={index} 
                showAuthor={false}
                showText={false}
                showFooter={true}
                collection={collection} 
                ownership={0} 
              />
            ) : (
              <CollectionItem key={index} item={collection} />
            )}
          </>
        ))}
      </SimpleGrid>}
    </Box>
  );
};
