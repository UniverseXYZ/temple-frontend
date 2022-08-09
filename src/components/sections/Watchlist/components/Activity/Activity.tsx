import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Card, ActivityList } from '@/components/common';

import cn from 'classnames';
import styles from './.module.sass';

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
