import { PageWithGradient } from '@/components/layouts';
import { Tabs } from '@/components/ui';
import { Container, Heading } from '@chakra-ui/react';

import { Activity, Collections } from './components';

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

export const CuratedCollections = () => {
  //
  return (
    <PageWithGradient>
      <Container maxW="1142px">
        <Heading as="h2" variant="h4" mb="40px">
          Curated Collections
        </Heading>

        <Tabs items={tabs} />
      </Container>
    </PageWithGradient>
  );
};
