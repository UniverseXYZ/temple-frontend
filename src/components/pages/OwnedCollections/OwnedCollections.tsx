import React, {useState, useEffect} from 'react';
import { Container, Heading } from '@chakra-ui/react';
import { Tabs } from '@/components/ui';
import { PageWithGradient } from '@/components/layouts'

import { Collections, Activity } from './components';
import { useWallets, useReservoir } from '@/hooks';


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


export const OwnedCollections = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeAddress, setActiveAddress] = useState();
  const [ownedCollections, setOwnedCollections] = useState<IOwnedCollections>({collection: {} as IOwnedCollection, ownership: {} as IOwnership});

  const { activeWallet } = useWallets();
  const { getOwnedCollections } = useReservoir();

  const tabs = [
    {
      id: 'collections',
      title: 'Collections',
      ticker: `${ownedCollections.length || 0}`,
      component: <Collections isLoading={isLoading} ownedCollections={ownedCollections} />,
    },
    // {
    //   id: 'activity',
    //   title: 'Activity',
    //   component: <Activity />,
    // },
  ];

  const fetchOwnedCollections = async () => {
    const data = await getOwnedCollections(activeWallet.address);
    if(data) {
      setOwnedCollections(data.collections);
      setActiveAddress(activeWallet.address)
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    if(isLoading && ownedCollections.collection !== undefined) {
      fetchOwnedCollections();
    }

    if(activeWallet && activeAddress !== activeWallet.address) {
      setIsLoading(true);
      fetchOwnedCollections();
    }

  }, [activeWallet, isLoading, getOwnedCollections, fetchOwnedCollections]);


  return (
    <PageWithGradient>
      <Container maxW="1142px">
        <Heading as="h2" variant="h4" mb="40px">
          Owned Collections
        </Heading>

        <Tabs items={tabs} />
      </Container>
    </PageWithGradient>
  );
};
