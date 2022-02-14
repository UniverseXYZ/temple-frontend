import React, { FC } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import { CollectionList } from '@/components/common/';

export const Watchlist: FC = () => {
  return (
    <>
      <Container maxW="1142px">
        <Heading as="h2" size="lg" mb="40px">
          Watchlist
        </Heading>

        <CollectionList handle removable />
      </Container>
    </>
  );
};
