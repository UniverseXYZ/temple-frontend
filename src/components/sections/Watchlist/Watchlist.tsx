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
import { ElasticSwitch } from '@/components/ui';

import { Collections, Activity } from './components';
import { useReservoir, useWallets, useSettings } from '@/hooks';
import { CollectionList, Empty } from '@/components/common';


const items = [
  {
    title: 'Collections',
    value: 'collections',
  },
  // {
  //   title: 'Activity',
  //   value: 'activity',
  //   disabled: true,
  // },
];

export const Watchlist = () => {
  //
  const [isLoading, setIsLoading] = useState(true);
  const [active, setAcitve] = useState('collections');
  const [collections, setCollections] = useState([]);

  const { getWatchlistCollections } = useReservoir();
  const { activeWallet } = useWallets();
  const { watchlist } = useSettings();

  const onSwitchChange = (value: any) => {
    setAcitve(value);
  };

  const isEmpty = collections.length === 0;

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
  }, [watchlist, getWatchlistCollections, isLoading, isEmpty]);
  

  return (
    <Box as="section">
      <Container maxW="container.xl">
        <HStack mb="35px">
          <Heading as="h2" size="lg">
            My Watchlist
          </Heading>
          <Spacer />
          <ElasticSwitch items={items} onChange={onSwitchChange} />
        </HStack>

        {isLoading && isEmpty ? (
          <Empty />
        ) : (
          <CollectionList
            collections={collections}
            handle
            removable={true}
          />
        )}

        <Link to="/watchlist">
          <Button variant="outline" width="100%" mt="30px">
            Show all
          </Button>
        </Link>
      </Container>
    </Box>
  );
};
