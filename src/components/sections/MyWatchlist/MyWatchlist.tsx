import { Container, Heading } from '@chakra-ui/react';

import { MyList } from '@/components/common/List/List';

const MyWatchlist = () => (
  <>
    <Container maxW="container.xl">
      <Heading as="h2" size="lg">
        My Watchlist
      </Heading>

      <MyList />
    </Container>
  </>
);

export default MyWatchlist;
