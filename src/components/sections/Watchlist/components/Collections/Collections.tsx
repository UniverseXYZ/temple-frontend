import React from 'react';
import { Box } from '@chakra-ui/react';

import { Empty } from '../Empty';

import cn from 'classnames';
import styles from './.module.sass';

export const Collections = (props: any) => {
  //
  const { collections = [] } = props;

  const isEmpty = collections.length === 0;

  if (isEmpty) return <Empty />;

  return <></>;
};
