import React from 'react';
import { Box, Container, Heading, HStack, Button } from '@chakra-ui/react';
import { InfoTooltip } from '@/components/common';

import { Slider, Activity } from './components';

import initialData from '@/mocks/data';

export const OwnedCollections = () => {
  const collections = initialData.collections.slice(0, 6);

  return (
    <Box className="OwnedCollections">
      <Container maxW="container.xl" mt="100px">
        <HStack mb="40px" spacing="12px">
          <Heading as="h2" size="lg">
            Owned collections
          </Heading>
          <InfoTooltip label="These are the collections that received the highest upvotes in the previous week. To upvote a collection, please navigate to [link]" />
        </HStack>
      </Container>

      <Container maxW="1200px">
        <Slider collections={collections} />
      </Container>

      <Container maxW="container.xl">
        <Activity />

        <Button variant="outline" width="100%" mt="30px">
          Show all
        </Button>
      </Container>
    </Box>
  );
};