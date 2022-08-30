import React from 'react';
import { Box, Flex, Spacer, HStack } from '@chakra-ui/react';
import { Card } from '@/components/common';
import { ElasticSwitch, Select, Option } from '@/components/ui';
import { LineChart } from '@/components/charts';
import { Ethereum, DollarIcon, TransferIcon } from '@/components/icons';

import cn from 'classnames';
import styles from './.module.sass';

import { Skeleton } from './Skeleton';

const items = [
  {
    title: 'Price',
    value: 'price',
    icon: <DollarIcon />,
  },
  // {
  //   title: 'Volume',
  //   value: 'volume',
  //   icon: <TransferIcon />,
  // },
];

const options = [
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

// interface Props {
//   //
// }

export const Chart = (props: any) => {
  //
  const { isLoading, colHistory } = props;
  const [selectedPeriod, setSelectedPeriod] = React.useState('all-time');
  //
 
  return (
    <>
      <Card p="30px">
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <Flex mb="82px">
              <ElasticSwitch items={items} size="sm" />
              <Spacer />
              <Box width="190px">
                <Select
                  placeholder="Placeholder"
                  size="sm"
                  selectedKey={selectedPeriod}
                  onSelectionChange={(selected: string) => setSelectedPeriod(selected)}
                >
                  {options.map((option) => (
                    <Option key={option.value}>{option.title}</Option>
                  ))}
                </Select>
              </Box>
            </Flex>

            <LineChart period={selectedPeriod} colHistory={colHistory}/>
          </>
        )}
      </Card>
    </>
  );
};
