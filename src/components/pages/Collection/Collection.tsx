import React from 'react';
// import { useQuery } from 'react-query';

import {
  Container,
  Box,
  Image,
  Flex,
  Spacer,
  Button,
  useColorMode,
} from '@chakra-ui/react';

import { Avatar } from '@/components/common';
import { Tabs } from '@/components/ui';

import {
  Title,
  Banner,
  SocialLinks,
  Buttons,
  Stats,
  Chart,
} from './components/common';

// import { GetCollectionById } from '@/api';

import cn from 'classnames';
import styles from './Collection.module.sass';

import { tabs } from './tabs';
import { useReservoir, useWallets } from '@/hooks';
import { useParams } from 'react-router-dom';

interface IMetadata {
  discordUrl: string
  imageUrl: string
  description: string
  externalUrl: string
  bannerImageUrl: string 
  twitterUsername: string 
}

interface IFloorAsk {
  price: string
}

interface ITopBid {
  value: string
}

interface IVolume {
  "1day": number
  "7day": number
  "30day": number
  allTime: number
}

export interface ICollection {
  id: string
  slug: string
  name: string
  metadata: IMetadata
  primaryContract: string
  tokenCount: string
  ownerCount: string
  floorAsk: IFloorAsk
  topBid: ITopBid
  volume: IVolume
  ownership: any
}

export const Collection = () => {
  //
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  // const { data, error, isError, isLoading } = useQuery(
  //   'collection',
  //   GetCollectionById
  // );

  //const { metadata } = data;
  const [isLoading, setIsLoading] = React.useState(true);
  const [collection, setCollection] = React.useState<ICollection>({metadata: {}} as ICollection)
  const [userCollection, setUserCollections] = React.useState<ICollection>({metadata: {}} as ICollection)
  const [userNFTs, setUserNFTs] = React.useState<ICollection>({metadata: {}} as ICollection)
  const [colHistory, setColHistroy] = React.useState(null);

  const {slug} = useParams();
  const { activeWallet } = useWallets();
  const { getCollection, getUserCollections, getUserNFTs, getDailyStats } = useReservoir();

  React.useEffect(() => {
    async function get(){
      const data = await getCollection(slug || "")
      if(data){
        console.log("data: ", data)
        const hist = await getDailyStats(data.collection.primaryContract);
        if(hist){
          setColHistroy(hist.collections);
          console.log("hist: ", colHistory)  
        }
        setCollection(data.collection)
      }
    }
    get()
  }, [slug])

  React.useEffect(() => {
    async function get(){
      if(!activeWallet && collection.floorAsk !== undefined){
        setIsLoading(false);
      }
      if(!(collection && activeWallet && collection.primaryContract && activeWallet.address)) return;
      const data = await getUserCollections(activeWallet.address, collection.primaryContract)
      if(data){
        setUserCollections(data.collections[0])
        console.log("user: ", data.collections[0])
        setIsLoading(false);
      }
    }
    get()
  }, [collection, activeWallet])

  React.useEffect(() => {
    async function get(){
      if(!(userCollection && userCollection.ownership && userCollection.ownership.tokenCount > 0)) return
      const data = await getUserNFTs(activeWallet.address, collection.primaryContract)
      if(data){
        console.log("user nfts: ", data.tokens)
        setUserNFTs(data.tokens)
      }
    }
    get()
  }, [collection, activeWallet, userCollection])



  return (
    <Container maxWidth="container.xl">
      <Box className={cn(styles.Header, isDark && styles.Dark)}>
        <Banner
          title={collection.name} 
          image={collection.metadata.bannerImageUrl}
          isLoading={isLoading}
        />

        <Box className={styles.TopContent}>
          <Flex align="center" justifyContent="space-between">
            <Flex align="center" className={styles.Collection}>
              <Box className={styles.Avatar}>
                <Avatar
                  image={collection.metadata.imageUrl}
                  name={collection.name}
                  size="full"
                  isLoading={isLoading}
                />
              </Box>

              <Box>
                <Title text={collection.name} address={collection.primaryContract} isLoading={isLoading} />
              </Box>
            </Flex>
            <Spacer />
            <Flex align="center">
              <Box className={styles.SocialLinks} mr="40px">
                <SocialLinks metadata={collection.metadata} isLoading={isLoading} />
              </Box>

              <Buttons isLoading={isLoading} tokenAddress={collection.primaryContract} />
            </Flex>
          </Flex>
        </Box>

        <Stats isLoading={isLoading} collection={collection} />
      </Box>

      <Box mt="40px">
        <Chart isLoading={isLoading} colHistory={colHistory} />
      </Box>

      <Box mt="80px">
        <Tabs items={tabs(
          userCollection && userCollection.ownership && userCollection.ownership.tokenCount || 0,
          userNFTs,
          collection && collection.metadata.description)} />
      </Box>
    </Container>
  );
};
