import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Heading, HStack, Button } from '@chakra-ui/react';
import { InfoTooltip } from '@/components/common';

import { Slider, Activity } from './components';

import initialData from '@/mocks/data';

export const CuratedCollections = () => {
  //
  const collections = initialData.collections.slice(0, 6);

  return (
    <Box as="section">
      <Container maxW="container.xl">
        <HStack mb="5px" spacing="12px">
          <Heading as="h2" size="lg">
            Curated collections
          </Heading>
          <InfoTooltip label="These are the collections that received the highest upvotes in the previous week. To upvote a collection, please navigate to [link]" />
        </HStack>
      </Container>

      <Container maxW="1200px">
        <Slider collections={collections} />
      </Container>

      <Container maxW="container.xl">
        <Link to="/curated-collections">
          <Button variant="outline" width="100%" mt="30px">
            Show all
          </Button>
        </Link>
      </Container>
    </Box>
  );
};
