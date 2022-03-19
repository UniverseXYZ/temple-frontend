import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';

import { InventoryValue } from './components';

const Statistics = () => (
  <>
    <Container maxW="container.xl">
      <Heading as="h2" size="lg">
        Statistics
      </Heading>

      <Box>
        <InventoryValue />
      </Box>
    </Container>
  </>
);

export default Statistics;
