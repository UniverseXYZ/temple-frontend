import React from 'react';
import {
  Container,
  Box,
  Image,
  HStack,
  Flex,
  Button,
  useColorMode,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

import { Card } from '@/components/common';
import { LineChart } from '@/components/charts';
import { Ethereum } from '@/components/icons';

import {
  FolderIcon,
  UserIcon,
  TransferIcon,
  DollarUpIcon,
  DollarDownIcon,
} from './components/icons';

import cn from 'classnames';
import styles from './Collection.module.sass';

export const Collection = () => {
  //
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

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
              <Image
                src="/mocks/images/collection/avatar.png"
                alt="Collection Name"
                className={styles.Avatar}
              />
              <Box className={styles.Title}>Fluf World</Box>
            </Flex>
            <Box className={styles.SocialLinks}>
              <Box>Twitter</Box>
            </Box>
            <Box>
              <Button>Vote</Button>
            </Box>
          </Flex>
        </Box>

        <Box className={styles.StatsWrapper}>
          <Box className={styles.StatsItem}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <FolderIcon className={styles.StatsItem__Icon} />
              <Box className={styles.StatsItem__Headline}>Items</Box>
            </HStack>
            <Box className={styles.StatsItem__Value}>5242</Box>
          </Box>

          <Box className={styles.StatsItem}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <UserIcon className={styles.StatsItem__Icon} />
              <Box className={styles.StatsItem__Headline}>Owners</Box>
            </HStack>
            <Box className={styles.StatsItem__Value}>354</Box>
          </Box>

          <Box className={styles.StatsItem}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <DollarUpIcon className={styles.StatsItem__Icon} />
              <Box className={styles.StatsItem__Headline}>Highest sale</Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.StatsItem__Value}>24.55</Box>
            </HStack>
          </Box>

          <Box className={styles.StatsItem}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <TransferIcon className={styles.StatsItem__Icon} />
              <Box className={styles.StatsItem__Headline}>Volume traded</Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.StatsItem__Value}>243.6</Box>
            </HStack>
          </Box>

          <Box className={styles.StatsItem}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <DollarDownIcon className={styles.StatsItem__Icon} />
              <Box className={styles.StatsItem__Headline}>Floor price</Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.StatsItem__Value}>0.62</Box>
            </HStack>
          </Box>
        </Box>
      </Box>

      <Card mt="40px" p="30px">
        <LineChart />
      </Card>

      <Tabs mt={20}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
