import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Heading, HStack, Button, Text } from '@chakra-ui/react';
import { InfoTooltip } from '@/components/common';
import { useReservoir, useWallets } from '@/hooks';
import { Slider, Activity } from './components';
import { Skeleton } from './components/common/skeleton/skeleton';


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

  const { getOwnedCollections } = useReservoir();
  const { activeWallet, setActiveWallet } = useWallets();
  const [activeAddress, setActiveAddress] = React.useState();
  
  const fetchOwnedCollections = async () => {
    const data = await getOwnedCollections(activeWallet.address);
    if(data) {
      setOwnedCollections(data.collections);
      setActiveAddress(activeWallet.address);
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
  }, [activeAddress, activeWallet, isLoading, getOwnedCollections, fetchOwnedCollections]);


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

      {activeWallet && !isLoading ? (
      <>
        <Container maxW="1200px">

          {ownedCollections.length > 0 ?
            <Slider collections={ownedCollections} /> 
            :
            <Container maxW="container.xl">
              <Text as="h3" size="md" mt="30px">
                No collections found
              </Text>
            </Container>
          }
        </Container>
        

        <Container maxW="container.xl">
          {/* <Activity /> */}

          {ownedCollections.length > 0 ?
            <Link to="/owned-collections">
              <Button variant="outline" width="100%" mt="30px">
                Show all
              </Button>
            </Link>
            :
            null
          }
        </Container>
      </>
      ) : (
        <Container maxW="container.xl">
          <Skeleton />
        </Container>
      )}
    </Box>
  );
};
