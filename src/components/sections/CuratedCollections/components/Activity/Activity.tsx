import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Card, ActivityList } from '@/components/common';

export const Activity = () => {
  //
  return (
    <Card p="30px">
      <Heading variant="card" mb="20px">
        Recent activity
      </Heading>
      <ActivityList />
    </Card>
  );
};
