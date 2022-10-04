import React, { useState, useEffect}from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { CollectionList, Loading } from '@/components/common';
import { Input, Select, Option } from '@/components/ui';
import { useReservoir, useWallets, useSettings } from '@/hooks';


import cn from 'classnames';
import styles from './.module.sass';

// interface Props {
//   //
// }

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

export const Collections = (props: any) => {
  //
  const {} = props;
  const [isLoading, setIsLoading] = useState(true);
  const [active, setAcitve] = useState('collections');
  const [collections, setCollections] = useState();

  const { getWatchlistCollections } = useReservoir();
  const { activeWallet } = useWallets();
  const { watchlist } = useSettings();

  React.useEffect(() => {
    const fetchWatchlistCollections = async () => {
      const data = await getWatchlistCollections(watchlist);
      if(data) {
        setCollections(data);
        setIsLoading(false);
      }
    }

    if(watchlist.length > 0 && isLoading) {
      fetchWatchlistCollections()
    }
  }, [watchlist, getWatchlistCollections, isLoading])

  return (
    <Box pt="30px">
      <Box mb="40px">
        <HStack spacing="15px">
          <Box w="100%">
            <Input placeholder="Search" />
          </Box>

          <Box w="350px">
            <Select placeholder="Sort by" aria-labelledby="Sort by">
              {options.map((option) => (
                <Option key={option.value}>{option.title}</Option>
              ))}
            </Select>
          </Box>
        </HStack>
      </Box>
  
      {!isLoading && <CollectionList collections={collections} handle removable />}
    </Box>
  );
};
