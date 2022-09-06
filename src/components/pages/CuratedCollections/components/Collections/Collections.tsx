import React, {useState} from 'react';
import { CollectionCard, CollectionItem } from '@/components/common';
import { GridIcon, ListIcon } from '@/components/icons';
import { ElasticSwitch, Input, Option, Select } from '@/components/ui';
import { Box, HStack, SimpleGrid } from '@chakra-ui/react';
import { useReservoir, useWallets} from '@/hooks';
interface IVolume {
  "1day": number;
  "7day": number;
  "30day": number;
  allTime: number;
}

interface IFloorAsk {
  price: {
    amount: {
      native: number;
    }
  }
}

export interface ICuratedCollection {
  id: string;
  slug: string;
  name: string;
  logo: string;
  bannerUrlImage: string;
  discordUrl: string;
  externalUrl: string;
  twitterUsername: string;
  description: string;
  sampleImages: string[];
  tokenCount: number;
  onSaleCount: number;
  primaryContract: string;
  tokenSetId: string;
  floorAskPrice: number;
  royalties: any;
  lastBuy: any;
  floorAsk: IFloorAsk;
  topBid: any;
  rank: any;
  volume: IVolume;
  volumeChange: any;
  floorSale: any;
  floorSaleChange: any;
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

  const [view, setView] = useState('card');
  const [columns, setColumns] = useState(4);
  const [spacing, setSpacing] = useState('30px');
  const [isLoading, setIsLoading] = React.useState(true);
  const [curatedCollections, setCuratedCollections] = React.useState<ICuratedCollection>({} as ICuratedCollection);

  const { getCuratedCollections, getCollection, getUserCollections } = useReservoir();
  const { activeWallet } = useWallets();

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
  React.useEffect(() => {
    const fetchCuratedCollections = async () => {
      const data = await getCuratedCollections();
      if(data) {
        setCuratedCollections(data.collections);
        setIsLoading(false);
      }
    };

    if(isLoading) { 
      fetchCuratedCollections();
    }
  }, [isLoading, getCuratedCollections, getCollection, getUserCollections, activeWallet.address]);

  console.log(curatedCollections);

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
        {curatedCollections.map((collection: any) => (
          <>
            {isViewCard ? (
              <CollectionCard 
                key={collection.id} 
                showAuthor={false}
                showText={false}
                showFooter={true}
                collection={collection} 
                ownership={0} 
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
