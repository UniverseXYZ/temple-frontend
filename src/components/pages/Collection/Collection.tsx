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
    <Container maxWidth="container.xl">
      <Box className={cn(styles.Header, isDark && styles.Dark)}>
        <Banner
          title="Flow World"
          image="https://lh3.googleusercontent.com/biQ5untjlSAOByE6kSQajzpnaQY7T2urPVtmI4Idd5QgymG86C8Kaobw3BnB5RIMMpjGJbpePiYU8_ugJGuMeopGbHdU42McT6Ev=h600"
          isLoading={isLoading}
        />

        <Box className={styles.TopContent}>
          <Flex align="center" justifyContent="space-between">
            <Flex align="center" className={styles.Collection}>
              <Box className={styles.Avatar}>
                <Avatar
                  image="/mocks/images/collection/avatar.png"
                  name="Collection Name"
                  size="full"
                  isLoading={isLoading}
                />
              </Box>

              <Box>
                <Title text="Fluf World" isLoading={isLoading} />
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
