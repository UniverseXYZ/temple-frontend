import React from 'react';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { Tabs } from '@/components/ui';

import { Collections } from './components';

const tabs = [
  {
    id: 'collections',
    title: 'Collections',
    ticker: '6',
    component: <Collections />,
  },
];

export const Search = () => {
  return (
    <Box mt="60px" mb="60px">
      <Container maxW="1142px">
        <VStack mb="40px" align="start">
          <Text color="black.40">Search results for</Text>
          <Heading as="h2" variant="h4">
            Collection Name
          </Heading>
        </VStack>

        <Tabs items={tabs} />
      </Container>
    </Box>
  );
};
