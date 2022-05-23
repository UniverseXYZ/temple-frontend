import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { CollectionList } from '@/components/common';
import { Input, Select, Option } from '@/components/ui';

import cn from 'classnames';
import styles from './.module.sass';

interface Props {
  //
}

const options = [
  {
    value: 'lowest_price',
    title: 'Lowest price first',
  },
  {
    value: 'highest_price',
    title: 'Highest price first',
  },
];

import initialData from '@/mocks/data';

export const Collections = (props: Props) => {
  //
  const {} = props;

  const { collections } = initialData;

  return (
    <Box pt="30px">
      <Box mb="40px">
        <HStack spacing="15px">
          <Box w="100%">
            <Input placeholder="Search" />
          </Box>

          <Box w="350px">
            <Select placeholder="Sort by">
              {options.map((option) => (
                <Option key={option.value}>{option.title}</Option>
              ))}
            </Select>
          </Box>
        </HStack>
      </Box>

      <CollectionList handle removable />
    </Box>
  );
};
