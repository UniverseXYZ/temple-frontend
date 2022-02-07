import { useColorMode, Container, Button, HStack } from '@chakra-ui/react';
import { Card } from '@/components/common';
import {
  TopCollections,
  Statistics,
  MyWatchlist,
  MyCuratedCollections,
  CommunityCuratedCollections,
} from '@/components/sections';

const FrontPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div style={{ height: 10000 }}>
      <Container maxW="1142px" mb="100px">
        <Card variant="whitebox" p={50} mb={10}>
          <HStack spacing={10}>
            <Button>Test</Button>
            <Button variant="outline">Test</Button>
            <Button disabled>Test</Button>
            <Button variant="outline" disabled>
              Test
            </Button>
          </HStack>
        </Card>
        <Card variant="whitebox" p={50} w={256}>
          <HStack>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
          </HStack>
        </Card>
      </Container>

      <CommunityCuratedCollections />
      <MyCuratedCollections />
    </div>
  );
};

export default FrontPage;
