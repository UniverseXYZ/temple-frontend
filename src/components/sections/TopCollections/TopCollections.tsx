import { Container, Heading, HStack } from '@chakra-ui/react';
import { CollectionCard } from '@/components/common';

const TopCollections = () => (
  <>
    <Container maxW="container.xl" mb={100} mt={100}>
      <Heading as="h2" size="lg" pb="40px">
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
