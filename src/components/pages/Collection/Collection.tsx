import React from 'react';
import { useQuery } from 'react-query';

import {
  Container,
  Box,
  Image,
  Flex,
  Button,
  useColorMode,
} from '@chakra-ui/react';

import { Card, Avatar } from '@/components/common';
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
    <Container maxWidth="container.xl" height="8000px">
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
              <Avatar
                image="/mocks/images/collection/avatar.png"
                name="Collection Name"
                className={styles.Avatar}
              />
              <Box className={styles.Title}>Fluf World</Box>
            </Flex>
            <Box className={styles.SocialLinks}>
              <SocialLinks />
            </Box>
            <Box>
              <Button>Vote</Button>
            </Box>
            <Box>
              <WatchlistButton />
            </Box>
          </Flex>
        </Box>

        <Stats isLoading={isLoading} />
      </Box>

      <Box mt="40px">
        <Chart />
      </Box>

      <Tabs items={tabs} />
    </Container>
  );
};
