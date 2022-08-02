import React, { useState } from 'react';
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

import cn from 'classnames';
import styles from './Collection.module.sass';

import { tabs } from './tabs';
import { GetCollection, GetDailyStats, GetUserNFTsByCollection } from '@/api/reservoir';
import { useParams } from 'react-router-dom';
import { useWallets } from '@/hooks/useWallets';

export const Collection = () => {
  //
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { slug } = useParams();
  const { wallets, activeWallet } = useWallets();
  console.log(wallets, activeWallet)
  // const { data, error, isError, isLoading } = useQuery(
  //   'collection',
  //   GetCollectionById
  // );

  //const { metadata } = data;

  const [isLoading, setIsLoading] = React.useState(true);
  const [collection, setCollection] = useState(
    {collection:
      {tokenCount:"",
       ownerCount: "",
       name: "",
       primaryContract: "",
       floorAsk:{price:""},
       volume:{allTime:""},
       topBid:{value:""},
       metadata: {bannerImageUrl:"", imageUrl: "", description:""},
      }});
  const [userNFTs, setUserNFTs] = useState([]);
  const [dailyStats, setDailyStats] = useState([]);

  console.log(userNFTs);

  React.useEffect(() => {
    GetCollection(slug || "doodles-official").then(res => {
      setCollection(res);
      GetDailyStats(res.collection.primaryContract).then(res1 => {
        setDailyStats(res1.collections);
        if(activeWallet.address){
          GetUserNFTsByCollection(activeWallet.address, res.collection.primaryContract).then(res2 => {
            setUserNFTs(res2.tokens);
            setIsLoading(false);
          })  
        } else {
          setIsLoading(false);
        }
      })
    })
  
  }, []);

  return (
    <Container maxWidth="container.xl">
      <Box className={cn(styles.Header, isDark && styles.Dark)}>
        <Banner
          title="Flow World"
          image={isLoading ? "" : collection.collection.metadata.bannerImageUrl}
          isLoading={isLoading}
        />

        <Box className={styles.TopContent}>
          <Flex align="center" justifyContent="space-between">
            <Flex align="center" className={styles.Collection}>
              <Box className={styles.Avatar}>
                <Avatar
                  image={isLoading ? "" : collection.collection.metadata.imageUrl}
                  name="Collection Name"
                  size="full"
                  isLoading={isLoading}
                />
              </Box>

              <Box>
                <Title 
                  text={collection.collection.name || ""} 
                  isLoading={isLoading}
                  address={collection.collection.primaryContract} />
              </Box>
            </Flex>
            <Spacer />
            <Flex align="center">
              <Box className={styles.SocialLinks} mr="40px">
                <SocialLinks isLoading={isLoading} />
              </Box>

              <Buttons isLoading={isLoading} />
            </Flex>
          </Flex>
        </Box>

        <Stats isLoading={isLoading}
               floorPrice={Number(collection.collection.floorAsk.price)}
               volume={Number(collection.collection.volume.allTime)}
               tokenCount={Number(collection.collection.tokenCount)}
               ownerCount={Number(collection.collection.ownerCount)}
               topBid={Number(collection.collection.topBid.value)}
        />
      </Box>

      <Box mt="40px">
        <Chart isLoading={isLoading} dailyStats={dailyStats} />
      </Box>

      <Box mt="80px" mb="20px">
        <Tabs items={tabs({
          description:collection.collection.metadata.description,
          userNFTs: userNFTs})} />
      </Box>
    </Container>
  );
};
