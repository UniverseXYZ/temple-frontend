import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Heading, HStack, Button } from '@chakra-ui/react';
import { InfoTooltip } from '@/components/common';
import { useReservoir, useWallets } from '@/hooks';

import { Slider, Activity } from './components';

import initialData from '@/mocks/data';

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

export const CuratedCollections = () => {
  //
  const [isLoading, setIsLoading] = React.useState(true);
  const [curatedCollections, setCuratedCollections] = React.useState<ICuratedCollection>({} as ICuratedCollection);

  const { getCuratedCollections, getCollection, getUserCollections } = useReservoir();
  const { activeWallet } = useWallets();

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
  }, [isLoading, getCuratedCollections, getCollection, getUserCollections]);

  

  return (
    <Box as="section">
      <Container maxW="container.xl">
        <HStack mb="5px" spacing="12px">
          <Heading as="h2" size="lg">
            Curated collections
          </Heading>
          <InfoTooltip label="These are the collections that received the highest upvotes in the previous week. To upvote a collection, please navigate to [link]" />
        </HStack>
      </Container>

      <Container maxW="1200px">
        {!isLoading && <Slider collections={curatedCollections} />}
      </Container>

      <Container maxW="container.xl">
        {/* <Activity /> */}

        <Link to="/curated-collections">
          <Button variant="outline" width="100%" mt="30px">
            Show all
          </Button>
        </Link>
      </Container>
    </Box>
  );
};
