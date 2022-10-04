import React, {useState, useEffect} from 'react';
import { Container, Heading } from '@chakra-ui/react';
import { Tabs } from '@/components/ui';
import { PageWithGradient } from '@/components/layouts'

import { Collections, Activity } from './components';

const tabs = [
  {
    id: 'collections',
    title: 'Collections',
    ticker: `${Collections.length}`,
    component: <Collections />,
  },
  // {
  //   id: 'activity',
  //   title: 'Activity',
  //   component: <Activity />,
  // },
];


export const OwnedCollections = () => {
  
  return (
    <PageWithGradient>
      <Container maxW="1142px">
        <Heading as="h2" variant="h4" mb="40px">
          Owned Collections
        </Heading>

        <Tabs items={tabs} />
      </Container>
    </PageWithGradient>
  );
};
