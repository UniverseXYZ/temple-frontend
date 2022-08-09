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

import { InventoryValue, InventoryValueHistory, Skeleton } from './components';

import cn from 'classnames';
import styles from './Statistics.module.sass';

export const Statistics = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Box as="section">
      <Container maxW="container.xl">
        <Heading as="h2" size="lg" mb="35px">
          Statistics
        </Heading>

        {isLoading ? (
          <Skeleton />
        ) : (
          <Box>
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
              <InventoryValue />
              <InventoryValueHistory />
            </SimpleGrid>
          </Box>
        )}
      </Container>
    </Box>
  );
};
