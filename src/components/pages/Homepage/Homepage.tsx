import React from 'react';
import { Link } from 'react-router-dom';
import {
  VStack,
  Box,
  Container,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import { PageWithGradient } from '@/components/layouts';

import { useSettings } from '@/hooks';

import Section from './components/Section/Section';

export const Homepage = () => {
  //
  const { sections } = useSettings();

  return (
    <PageWithGradient>
      <Container maxW="container.xl">
        <Box mb="60px">
          <OrderedList>
            <ListItem>
              <Link to="/collections/flud">Colletion</Link>
            </ListItem>
            <ListItem>
              <Link to="/watchlist">Watchlist</Link>
            </ListItem>
            <ListItem>
              <Link to="/top-collections">Top Collections</Link>
            </ListItem>
            <ListItem>
              <Link to="/curated-collections">Curated Collections</Link>
            </ListItem>
            <ListItem>
              <Link to="/owned-collections">Owned Collections</Link>
            </ListItem>
            <ListItem>
              <Link to="/search">Search</Link>
            </ListItem>
          </OrderedList>
        </Box>
      </Container>

      <VStack spacing="80px" align="stretch">
        {sections.map((section: any, index: number) =>
          section.visible ? Section(section, index) : null
        )}
      </VStack>
    </PageWithGradient>
  );
};
