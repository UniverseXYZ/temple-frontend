import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Heading, HStack, Button, Text } from '@chakra-ui/react';
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
  collection: IOwnedCollection;
  ownership: IOwnership;
}

export const OwnedCollections = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [ownedCollections, setOwnedCollections] = React.useState<IOwnedCollections>({collection: {} as IOwnedCollection, ownership: {} as IOwnership});

  const { getUserCollections } = useReservoir();
  const { activeWallet } = useWallets();
  
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
    <Box as="section">
      <Container maxW="container.xl">
        <HStack mb="5px" spacing="12px">
          <Heading as="h2" size="lg">
            Owned collections
          </Heading>
          <InfoTooltip label="These are the collections that received the highest upvotes in the previous week. To upvote a collection, please navigate to [link]" />
        </HStack>
      </Container>

      {activeWallet ? (
      <>
        <Container maxW="1200px">
          {!isLoading && <Slider collections={ownedCollections} />}
        </Container>
        

        <Container maxW="container.xl">
          {/* <Activity /> */}

          <Link to="/owned-collections">
            <Button variant="outline" width="100%" mt="30px">
              Show all
            </Button>
          </Link>
        </Container>
      </>
      ) : (
        <Container maxW="container.xl">
          <Text as="h3" size="md" mt="30px">
            Please connect a wallet to see your owned collections
          </Text>
        </Container>
      )}
    </Box>
  );
};
