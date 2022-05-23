import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Tabs } from '@/components/ui';

import { Collections, Activity } from './components';

const tabs = [
  {
    id: 'collections',
    title: 'Collections',
    ticker: '30',
    component: <Collections />,
  },
  {
    id: 'activity',
    title: 'Activity',
    component: <Activity />,
  },
];

export const CuratedCollections = () => {
  return (
    <Box mt="60px" mb="60px">
      <Container maxW="1142px">
        <Heading as="h2" variant="h4" mb="40px">
          Curated Collections
        </Heading>

        <Tabs items={tabs} />
      </Container>
    </Box>
  );
};
