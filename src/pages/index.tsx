import { Container, Box, Button, HStack } from '@chakra-ui/react';
import {
  TopCollections,
  Statistics,
  MyWatchlist,
  MyCuratedCollections,
  CommunityCuratedCollections,
} from '@/components/sections';

const FrontPage = () => (
  <div style={{ height: 10000 }}>
    <Container maxW="1142px" mb="100px">
      <Box layerStyle="whitebox" p={50} w={256}>
        <HStack>
          <Button>Test</Button>
          <Button variant="outline">Test</Button>
        </HStack>
      </Box>
    </Container>

    <CommunityCuratedCollections />
    <MyCuratedCollections />
  </div>
);

export default FrontPage;
