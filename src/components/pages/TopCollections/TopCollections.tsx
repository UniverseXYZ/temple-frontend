import React from 'react';
import { Box, Container, Heading, Flex, Spacer } from '@chakra-ui/react';
import { Tabs, Select, Option } from '@/components/ui';
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

const options = [
  {
    title: 'Last 24 hours',
    value: 'last-24-hours',
  },
  {
    title: 'Last 7 days',
    value: 'last-7-days',
  },
  {
    title: 'Last 30 days',
    value: 'last-30-days',
  },
  {
    title: 'Last 90 days',
    value: 'last-90-days',
  },
  {
    title: 'All time',
    value: 'all-time',
  },
];

export const TopCollections = () => {
  return (
    <PageWithGradient>
      <Container maxW="1142px">
        <Flex mb="40px" align="center">
          <Heading as="h2" variant="h4">
            Top Collections
          </Heading>
          <Spacer />
          <Box w="225px">
            <Select
              placeholder="Sort by"
              aria-labelledby="Sort by"
              defaultSelectedKey="all-time"
            >
              {options.map((option) => (
                <Option key={option.value}>{option.title}</Option>
              ))}
            </Select>
          </Box>
        </Flex>

        <Tabs items={tabs} />
      </Container>
    </PageWithGradient>
  );
};
