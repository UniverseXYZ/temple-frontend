import React from 'react';
import { Box } from '@chakra-ui/react';
import { ActivityList } from '@/components/common';

import cn from 'classnames';
import styles from './.module.sass';

interface Props {
  //
}

export const Activity = (props: Props) => {
  //
  const {} = props;
  return (
    <Box mt="30px">
      <ActivityList />
    </Box>
  );
};
