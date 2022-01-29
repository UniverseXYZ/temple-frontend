import { Container, Heading, HStack } from '@chakra-ui/react';
import { CollectionCard } from '@/components/common';

const TopCollections = () => (
  <>
    <Container maxW="container.xl">
      <Heading as="h2" size="lg">
        Top Collections
      </Heading>

      <HStack spacing="30px">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </HStack>
    </Container>
  </>
);

export default TopCollections;
