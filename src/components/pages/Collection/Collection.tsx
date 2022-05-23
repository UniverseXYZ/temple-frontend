import React from 'react';
import { useQuery } from 'react-query';

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
  SocialLinks,
  WatchlistButton,
  Stats,
  Chart,
} from './components/common';

import { GetCollectionById } from '@/api';

import cn from 'classnames';
import styles from './Collection.module.sass';

import { tabs } from './tabs';

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

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxWidth="container.xl" pb="100px">
      <Box className={cn(styles.Header, isDark && styles.Dark)}>
        <Box className={styles.Banner}>
          <Image
            src="/mocks/images/collection/big_background.png"
            alt="Collection Name"
          />
        </Box>

        <Box className={styles.TopContent}>
          <Flex align="center" justifyContent="space-between">
            <Flex align="center" className={styles.Collection}>
              <Box className={styles.Avatar}>
                <Avatar
                  image="/mocks/images/collection/avatar.png"
                  name="Collection Name"
                  size="full"
                  //borderColor="blackTransparent.10"
                />
              </Box>

              <Box className={styles.Title}>Fluf World</Box>
            </Flex>
            <Spacer />
            <Flex align="center">
              <Box className={styles.SocialLinks} mr="40px">
                <SocialLinks />
              </Box>
              <Box mr="20px">
                <Button>Vote</Button>
              </Box>
              <Box>
                <WatchlistButton />
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Stats isLoading={isLoading} />
      </Box>

      <Box mt="40px">
        <Chart />
      </Box>

      <Box mt="80px">
        <Tabs items={tabs} />
      </Box>
    </Container>
  );
};
