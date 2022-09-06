import React, { useState } from 'react';
import {
  Box,
  HStack,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from '@chakra-ui/react';
import { CollectionCard, CollectionItem } from '@/components/common';
import { Input, ElasticSwitch, Select, Option } from '@/components/ui';
import { GridIcon, ListIcon } from '@/components/icons';
import { useReservoir, useWallets } from '@/hooks';

import cn from 'classnames';
import styles from './.module.sass';

interface IVolume {
  "1day": number;
  "7day": number;
  "30day": number;
  allTime: number;
}

export interface IOwnership {
  tokenCount: number;
  onSaleCount: number;
}

export interface  IOwnedCollection {
  id: string;
  slug: string;
  name: string;
  image: string;
  banner: string;
  discordUrl: string;
  externalUrl: string;
  twitterUsername: string;
  description: string;
  sampleImages: string[];
  tokenCount: number;
  primaryContract: string;
  tokenSetId: string;
  floorAskPrice: number;
  rank: any;
  volume: IVolume;
  volumeChange: number;
  floorSale: number;
}

export interface IOwnedCollections {
  [x: string]: any;
  collection: IOwnedCollection;
  ownership: IOwnership;
}

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

import initialData from '@/mocks/data';

export const Collections = (props: any) => {
  //
  const {} = props;
  const { collections } = initialData;

  const [view, setView] = useState('card');
  const [columns, setColumns] = useState(4);
  const [spacing, setSpacing] = useState('30px');
  const [isLoading, setIsLoading] = useState(true);
  const [ownedCollections, setOwnedCollections] = useState<IOwnedCollections>({collection: {} as IOwnedCollection, ownership: {} as IOwnership});

  const isViewCard = view === 'card';
  const { getUserCollections } = useReservoir();
  const { activeWallet } = useWallets();
  
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

  React.useEffect(() => {
    const fetchOwnedCollections = async () => {
      const data = await getUserCollections(activeWallet.address, ownedCollections.collection.id);
      if(data) {
        setOwnedCollections(data.collections);
        setIsLoading(false);
      }
    }

    if(activeWallet && isLoading) {
      fetchOwnedCollections();
    }
  }, [activeWallet, isLoading, getUserCollections]);


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
        {ownedCollections.map((collection: any) => (
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
      </SimpleGrid>}
    </Box>
  );
};
