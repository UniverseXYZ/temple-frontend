import React from 'react';
import {
  Box,
  SimpleGrid,
  Container,
  Heading,
  HStack,
  useColorMode,
} from '@chakra-ui/react';
import { Card, PriceTicker, InfoTooltip } from '@/components/common';
import { Ethereum } from '@/components/icons';

import { InventoryValue, RecentActivity } from './components';

import cn from 'classnames';
import styles from './Statistics.module.sass';

const Statistics = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <>
      <Container maxW="1140px">
        <Heading as="h2" size="lg" mb="20px">
          Statistics
        </Heading>

        <SimpleGrid columns={3} spacing="20px" mb="20px">
          <Card className={cn(styles.Block, isDark && styles.Dark)}>
            <HStack spacing="8px" mb="20px">
              <Heading variant="card">Revenue</Heading>
              <InfoTooltip label="The total revenue from the NFT collections" />
            </HStack>
            <Box className={styles.Block__Balance}>
              <HStack spacing="6px">
                <Ethereum w="14px" h="20px" />
                <Box>23.154</Box>
                <PriceTicker ml="8px" value={12.24} vector="up" />
              </HStack>
            </Box>
            <Box className={styles.Block__Amount}>$100,242</Box>
          </Card>

          <Card className={cn(styles.Block, isDark && styles.Dark)}>
            <HStack spacing="8px" mb="20px">
              <Heading variant="card">Spending</Heading>
              <InfoTooltip label="The total spending to the NFT collections" />
            </HStack>

            <Box className={styles.Block__Balance}>
              <HStack spacing="6px" mb="20px">
                <Ethereum w="14px" h="20px" />
                <Box>14.145</Box>
                <PriceTicker ml="8px" value={12.24} vector="down" />
              </HStack>
            </Box>
            <Box className={styles.Block__Amount}>$100,242</Box>
          </Card>

          <Card className={cn(styles.Block, isDark && styles.Dark)}>
            <HStack spacing="8px" mb="20px">
              <Heading variant="card">ROI (realized)</Heading>
              <InfoTooltip label="ROI (Realized) Calculate by (realized revenue - corresponding spending) / corresponding spending" />
            </HStack>
            <Box className={styles.Block__Balance}>
              <HStack spacing="6px">
                <Box>213.1%</Box>
                <PriceTicker ml="8px" value={12.24} vector="up" />
              </HStack>
            </Box>
            <Box className={styles.Block__Amount}>267.9% ($)</Box>
          </Card>
        </SimpleGrid>

        <SimpleGrid columns={2} spacing="20px">
          <Card pt="30px" pb="30px">
            <HStack spacing="8px" pl="30px" mb="20px">
              <Heading variant="card">Total inventory value</Heading>
              <InfoTooltip label="Calculated by the sum of the estimates. If Temple valuation estimates are available, we use them first. If not, we use the floor price, approximate flor price instead." />
            </HStack>
            <InventoryValue />
          </Card>

          <Card pt="30px" pb="30px">
            <HStack spacing="8px" pl="30px" mb="20px">
              <Heading variant="card">Recent Activity</Heading>
              <InfoTooltip label="Sales, transfers and mints from the users NFT collection will be displayed here." />
            </HStack>

            <RecentActivity />
          </Card>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Statistics;
