import React from 'react';
import { Box, SimpleGrid, Container, Heading, HStack } from '@chakra-ui/react';
import { Card, PriceTicker, InfoTooltip } from '@/components/common';
import { Ethereum } from '@/components/icons';

import { InventoryValue } from './components';

import cn from 'classnames';
import styles from './Statistics.module.sass';

const Statistics = () => (
  <>
    <Container maxW="1140px">
      <Heading as="h2" size="lg" mb="20px">
        Statistics
      </Heading>

      <SimpleGrid columns={3} spacing="20px" mb="20px">
        <Card className={styles.Block}>
          <Box className={styles.Headline}>
            <HStack spacing="8px">
              <Box>Revenue</Box>
              <InfoTooltip label="The total revenue from the NFT collections" />
            </HStack>
          </Box>
          <Box className={styles.Block__Balance}>
            <HStack spacing="6px">
              <Ethereum w="14px" h="20px" />
              <Box>23.154</Box>
              <PriceTicker ml="8px" value={12.24} vector="up" />
            </HStack>
          </Box>
          <Box className={styles.Block__Amount}>$100,242</Box>
        </Card>

        <Card className={styles.Block}>
          <Box className={styles.Headline}>
            <HStack spacing="8px">
              <Box>Spending</Box>
              <InfoTooltip label="The total spending to the NFT collections" />
            </HStack>
          </Box>
          <Box className={styles.Block__Balance}>
            <HStack spacing="6px">
              <Ethereum w="14px" h="20px" />
              <Box>14.145</Box>
              <PriceTicker ml="8px" value={12.24} vector="down" />
            </HStack>
          </Box>
          <Box className={styles.Block__Amount}>$100,242</Box>
        </Card>

        <Card className={styles.Block}>
          <Box className={styles.Headline}>
            <HStack spacing="8px">
              <Box>ROI (realized)</Box>
              <InfoTooltip label="ROI (Realized) Calculate by (realized revenue - corresponding spending) / corresponding spending" />
            </HStack>
          </Box>
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
          <Box className={styles.Headline} pl="30px">
            <HStack spacing="8px">
              <Box>Total inventory value</Box>
              <InfoTooltip label="Calculated by the sum of the estimates. If Temple valuation estimates are available, we use them first. If not, we use the floor price, approximate flor price instead." />
            </HStack>
          </Box>
          <InventoryValue />
        </Card>
        <Card>Recent activity</Card>
      </SimpleGrid>
    </Container>
  </>
);

export default Statistics;
