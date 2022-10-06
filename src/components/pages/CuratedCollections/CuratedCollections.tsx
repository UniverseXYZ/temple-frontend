import React, { useState , useEffect} from 'react';
import { PageWithGradient } from '@/components/layouts';
import { Tabs } from '@/components/ui';
import { useReservoir } from '@/hooks';
import { Container, Heading } from '@chakra-ui/react';

import { Activity, Collections } from './components';

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
  [x: string]: any;
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

  const { getCuratedCollections } = useReservoir();

  const tabs = [
    {
      id: 'collections',
      title: 'Curated Collections',
      ticker: `${curatedCollections.length || 0}`,
      component: <Collections isLoading={isLoading} curatedCollections={curatedCollections} />,
    },
    // {
    //   id: 'activity',
    //   title: 'Activity',
    //   component: <Activity />,
    // },
  ];

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
  }, [isLoading, getCuratedCollections]);



  return (
    <PageWithGradient>
      <Container maxW="1142px">
        <Heading as="h2" variant="h4" mb="40px">
          Curated Collections
        </Heading>

        <Tabs items={tabs} />
      </Container>
    </PageWithGradient>
  );
};
