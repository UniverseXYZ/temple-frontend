import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Container, Box, Flex, Spacer, useColorMode } from '@chakra-ui/react';

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

import { GetCollectionBySlug } from '@/api';

import cn from 'classnames';
import styles from './Collection.module.sass';

import { tabs } from './tabs';

export const Collection = () => {
  //
  const { slug } = useParams();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  //const [collection, setCollection] = useState<any>();

  const {
    data: { address, metadata } = {},
    //data: collection = {},
    error,
    isError,
    isLoading,
    isRefetching,
  } = useQuery(['collection', slug], () => GetCollectionBySlug(slug), {
    onSuccess: (data) => {
      //setCollection(data);
    },
    refetchOnMount: 'always',
  });

  //const { address, metadata } = collection;
  //const { name, description, profileImage, bannerImage } = metadata;

  //console.log('isRefetching', isRefetching);
  //console.log('isLoading', isLoading);
  //const { metadata } = data;

  // const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  const loading = isLoading || isRefetching;

  //TODO: add loading context

  return (
    <Container maxWidth="container.xl" pb="100px">
      <Box className={cn(styles.Header, isDark && styles.Dark)}>
        <Banner
          title={metadata?.name}
          image={metadata?.bannerImage}
          isLoading={loading}
        />
        <Box className={styles.TopContent}>
          <Flex align="center" justifyContent="space-between">
            <Flex align="center" className={styles.Collection}>
              <Box className={styles.Avatar}>
                <Avatar
                  image={metadata?.profileImage}
                  name={metadata?.name}
                  size="full"
                  isLoading={loading}
                />
              </Box>

              <Box>
                <Title
                  name={metadata?.name}
                  address={address}
                  isLoading={loading}
                />
              </Box>
            </Flex>
            <Spacer />
            <Flex align="center">
              <Box className={styles.SocialLinks} mr="40px">
                <SocialLinks isLoading={isLoading} />
              </Box>

              <Buttons isLoading={loading} />
            </Flex>
          </Flex>
        </Box>

        <Stats isLoading={loading} />
      </Box>

      <Box mt="40px">
        <Chart isLoading={loading} />
      </Box>

      <Box mt="80px">
        <Tabs items={tabs} />
      </Box>
    </Container>
  );
};
