import React, { useState } from 'react';
import { Box, Container, Heading, HStack, Spacer } from '@chakra-ui/react';
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
    <Box className="TopCollections">
      <Container maxW="container.xl" mt="100px">
        <HStack mb="40px">
          <Heading as="h2" size="lg">
            Top collections
          </Heading>
          <Spacer />
          <HStack spacing="15px">
            <ElasticSwitch items={items} onChange={onSwitchChange} />
            <Box width="200px">
              <Select defaultSelectedKey="14">
                <Option key="14">Last 14 days</Option>
                <Option key="30">Last 30 days</Option>
                <Option key="90">Last 90 days</Option>
              </Select>
            </Box>
          </HStack>
        </HStack>

        {active === 'collections' && <Collections />}
        {active === 'activity' && 'Activity'}
      </Container>
    </Box>
  );
};
