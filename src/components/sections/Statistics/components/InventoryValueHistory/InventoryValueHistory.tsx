import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  useColorMode,
} from '@chakra-ui/react';

import { Card, InfoTooltip, TransactionBadge } from '@/components/common';
import { Ethereum } from '@/components/icons';

import { truncateEthAddress } from '@/utils/';

import cn from 'classnames';
import styles from './RecentActivity.module.sass';
import { LineChart } from '@/components/charts';

export const InventoryValueHistory = () => {
  //
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Card pt="30px" pb="30px">
      <HStack spacing="8px" pl="30px" mb="20px">
        <Heading variant="card">Inventory Value history </Heading>
        <InfoTooltip label="Sales, transfers and mints from the users NFT collection will be displayed here." />
      </HStack>

      <Box>
        {/* <LineChart /> */}
      </Box>
    </Card>
  );
};
