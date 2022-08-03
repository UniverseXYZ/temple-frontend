import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Heading, HStack, Button } from '@chakra-ui/react';
import { InfoTooltip } from '@/components/common';
import { Text } from '@chakra-ui/react'
import { Slider, Activity } from './components';

import initialData from '@/mocks/data';
import { GetUserCollections } from '@/api/reservoir';
import { useWallets } from '@/hooks';

export const OwnedCollections = () => {
  const [collections, setCollections] = useState([])
  const {activeWallet} = useWallets();
  useEffect(() => {
    if(activeWallet && activeWallet.address){
      GetUserCollections(activeWallet.address).then(res => {
        setCollections(res.collections)
      })  
    }
  }, [activeWallet])

  return (
    <Box as="section">
      <Container maxW="container.xl">
        <HStack mb="5px" spacing="12px">
          <Heading as="h2" size="lg">
            Owned collections
          </Heading>
          <InfoTooltip label="These are the collections that received the highest upvotes in the previous week. To upvote a collection, please navigate to [link]" />
        </HStack>
      </Container>

      <Container maxW="1200px">
        {collections.length > 0 
          ? <Slider collections={collections} />
          : activeWallet !== null 
          ? <Text fontSize='lg' ml="50px" mt="25px">You do not own any NFTs</Text>
          :<Text fontSize='lg' ml="50px" mt="25px">No wallet connected</Text>
        }
      </Container>
      {collections.length > 0 && 
        <Container maxW="container.xl">
          <Link to="/owned-collections">
            <Button variant="outline" width="100%" mt="30px">
              Show all
            </Button>
          </Link>
        </Container>
      }
    </Box>
  );
};
