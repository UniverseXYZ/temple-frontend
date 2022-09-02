import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import { Tabs } from '@/components/ui';
import { PageWithGradient } from '@/components/layouts';

import { Collections, Activity } from './components';

const tabs = [
  {
    id: 'collections',
    title: 'Collections',
    ticker: '30',
    component: <Collections />,
  },
  // {
  //   id: 'activity',
  //   title: 'Activity',
  //   component: <Activity />,
  // },
];

export const Watchlist = () => {
  return (
    <PageWithGradient>
      <Container maxW="1142px">
        <Heading as="h2" variant="h4" mb="40px">
          Watchlist
        </Heading>

        <Tabs items={tabs} />
      </Container>
    </PageWithGradient>
  );
};
