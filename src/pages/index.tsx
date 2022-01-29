import { Container, Box, Button } from '@chakra-ui/react';
import {
  TopCollections,
  Statistics,
  MyWatchlist,
  MyCuratedCollections,
  CommunityCuratedCollections,
} from '@/components/sections';

const FrontPage = () => (
  <div style={{ height: 10000 }}>
    <Container maxW="container.xl">
      <Box layerStyle="whitebox" p={50} w={256}>
        <Button>Test</Button>
        <Button variant="outline">Test</Button>
      </Box>
    </Container>

    <TopCollections />
    <Statistics />
    <MyWatchlist />
    <MyCuratedCollections />
    <CommunityCuratedCollections />
  </div>
);

export default FrontPage;
