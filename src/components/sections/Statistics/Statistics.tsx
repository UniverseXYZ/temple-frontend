import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Card } from '@/components/common';

import { InventoryValue } from './components';

const Statistics = () => (
  <>
    <Container maxW="container.xl">
      <Heading as="h2" size="lg">
        Statistics
      </Heading>

      <Card bordered>
        <InventoryValue />
      </Card>
    </Container>
  </>
);

export default Statistics;
