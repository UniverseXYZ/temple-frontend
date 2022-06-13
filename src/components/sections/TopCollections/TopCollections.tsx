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
import { ElasticSwitch, Select, Option } from '@/components/ui/';

import { Collections } from './components';

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
  {
    title: 'Test',
    value: 'test',
  },
];

const options = [
  { name: 'Koala' },
  { name: 'Kangaroo' },
  { name: 'Platypus' },
  { name: 'Bald Eagle' },
  { name: 'Bison' },
  { name: 'Skunk' },
];

export const TopCollections = () => {
  const [active, setAcitve] = useState('collections');

  const onSwitchChange = (value: any) => {
    setAcitve(value);
  };

  return (
    <Box as="section">
      <Container maxW="container.xl">
        <HStack mb="35px">
          <Heading as="h2" size="lg">
            Top collections
          </Heading>
          <Spacer />
          <HStack spacing="15px">
            <ElasticSwitch items={items} onChange={onSwitchChange} />
            <Box width="200px">
              <Select defaultSelectedKey="14" aria-labelledby="Sort by">
                <Option key="14">Last 14 days</Option>
                <Option key="30">Last 30 days</Option>
                <Option key="90">Last 90 days</Option>
              </Select>
            </Box>
          </HStack>
        </HStack>

        {active === 'collections' && <Collections />}
        {active === 'activity' && 'Activity'}

        <Link to="/top-collections">
          <Button variant="outline" mt="22px" w="100%">
            Show all
          </Button>
        </Link>
      </Container>
    </Box>
  );
};
