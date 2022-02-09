import React, { FC } from 'react';
import { Container, Button, HStack } from '@chakra-ui/react';
import { Card } from '@/components/common';
import {
  TopCollections,
  Statistics,
  MyWatchlist,
  MyCuratedCollections,
  CommunityCuratedCollections,
} from '@/components/sections';

export const Homepage: FC = () => {
  return (
    <div style={{ height: 10000 }}>
      <Container maxW="1142px" mb="100px" mt="100px">
        <Card variant="whitebox" p={50} mb={10}>
          <HStack spacing={10}>
            <Button>Test</Button>
            <Button variant="outline">Test</Button>
            <Button disabled>Test</Button>
            <Button variant="outline" disabled>
              Test
            </Button>
          </HStack>
        </Card>
      </Container>

      <CommunityCuratedCollections />
      <MyCuratedCollections />
    </div>
  );
};