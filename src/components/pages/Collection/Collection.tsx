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
import { useReservoir } from '@/hooks';
import { useParams } from 'react-router-dom';

interface IMetadata {
  discordUrl: string
  imageUrl: string
  description: string
  externalUrl: string
  bannerImageUrl: string 
  twitterUsername: string 
}

interface ICollection {
  id: string
  slug: string
  name: string
  metadata: IMetadata
  primaryContract: string
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

  const {slug} = useParams();
  const { getCollection } = useReservoir();

  React.useEffect(() => {
    async function get(){
      const data = await getCollection(slug || "")
      if(data){
        console.log("data: ", data)
        setCollection(data.collection)
        setIsLoading(false);
      }
    }
    get()
  }, [slug])

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
                <Title text={collection.name} isLoading={isLoading} />
              </Box>
            </Flex>
            <Spacer />
            <Flex align="center">
              <Box className={styles.SocialLinks} mr="40px">
                <SocialLinks isLoading={isLoading} />
              </Box>

              <Buttons isLoading={isLoading} tokenAddress={collection.primaryContract} />
            </Flex>
          </Flex>
        </Box>

        <Stats isLoading={isLoading} />
      </Box>

      <Box mt="40px">
        <Chart isLoading={isLoading} />
      </Box>

      <Box mt="80px">
        <Tabs items={tabs} />
      </Box>
    </Container>
  );
};
