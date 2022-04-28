import React, { useState } from 'react';
import { Container, Heading, HStack, Spacer } from '@chakra-ui/react';
import { ElasticSwitch } from '@/components/ui';

import { Collections, Activity } from './components';

const items = [
  {
    title: 'Collections',
    value: 'collections',
  },
  {
    title: 'Activity',
    value: 'activity',
    disabled: true,
  },
];

export const Watchlist = () => {
  //

  const [active, setAcitve] = useState('collections');

  const onSwitchChange = (value: any) => {
    setAcitve(value);
  };

  return (
    <>
      <Container maxW="1142px" pt={100} pb={40}>
        <HStack mb="40px">
          <Heading as="h2" size="lg">
            My Watchlist
          </Heading>
          <Spacer />
          <ElasticSwitch items={items} onChange={onSwitchChange} />
        </HStack>

        {active === 'collections' && <Collections />}
        {active === 'activity' && <Activity />}
      </Container>
    </>
  );
};
