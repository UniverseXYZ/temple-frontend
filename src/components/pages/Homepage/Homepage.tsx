import React from 'react';
import { Box, Container, OrderedList, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { useSettings } from '@/hooks';

import Section from './components/Sections/Sections';

export const Homepage = () => {
  //
  const { sections } = useSettings();

  return (
    <Box style={{ height: 10000 }} pt="60px" className="Wrapper">
      <Container maxW="container.xl">
        <Box mb="60px">
          <OrderedList>
            <ListItem>
              <Link to="/test">Test</Link>
            </ListItem>
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
      {sections.map((section: any, index: number) =>
        section.visible ? Section(section, index) : null
      )}
    </Box>
  );
};
