import React, { FC } from 'react';
import { Sortable } from '@/components/common/Sortable/Sortable';
import { Container, Heading } from '@chakra-ui/react';

export const Watchlist: FC = () => {
  return (
    <>
      <Container maxW="1142px">
        <Heading as="h2" size="lg" mb="40px">
          Watchlist
        </Heading>

        <Sortable handle removable />
      </Container>
    </>
  );
};
