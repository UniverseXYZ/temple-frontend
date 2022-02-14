import { Container, Heading } from '@chakra-ui/react';
import { CollectionList } from '@/components/common/';

const TopCollections = () => (
  <>
    <Container maxW="container.xl" mb={100} mt={100}>
      <Heading as="h2" size="lg" pb="40px">
        Top Collections
      </Heading>

      <CollectionList handle removable />
    </Container>
  </>
);

export default TopCollections;
