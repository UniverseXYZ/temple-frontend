import React from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { PieChart } from '@/components/charts';
import { Card, InfoTooltip } from '@/components/common';

export const InventoryValue = () => {
  //
  return (
    <Card pt="30px" pb="30px">
      <HStack spacing="8px" pl="30px" mb="20px">
        <Heading variant="card">Total inventory value</Heading>
        <InfoTooltip label="Calculated by the sum of the estimates. If Temple valuation estimates are available, we use them first. If not, we use the floor price, approximate flor price instead." />
      </HStack>
      <PieChart />
    </Card>
  );
};
