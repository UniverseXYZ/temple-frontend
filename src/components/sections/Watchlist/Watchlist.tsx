import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  HStack,
  Spacer,
  Button,
} from '@chakra-ui/react';
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
    <Box as="section">
      <Container maxW="container.xl">
        <HStack mb="35px">
          <Heading as="h2" size="lg">
            My Watchlist
          </Heading>
          <Spacer />
          <ElasticSwitch items={items} onChange={onSwitchChange} />
        </HStack>

        {active === 'collections' && <Collections />}
        {/* {active === 'activity' && <Activity />} */}

        <Link to="/watchlist">
          <Button variant="outline" width="100%" mt="30px">
            Show all
          </Button>
        </Link>
      </Container>
    </Box>
  );
};
