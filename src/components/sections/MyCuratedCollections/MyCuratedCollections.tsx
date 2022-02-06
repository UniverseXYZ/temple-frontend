import { Container, Heading, Button } from '@chakra-ui/react';
import { Sortable } from '@/components/common/Sortable/Sortable';

//import initialData from '@/components/common/CollectionList/data';

const MyCuratedCollections = () => {
  return (
    <>
      <Container maxW="1142px">
        <Heading as="h2" size="lg" mb="40px">
          My Curated Collections
        </Heading>

        <Sortable handle removable />

        <Button variant="outline" w="100%" mt={'20px'}>
          Show all
        </Button>
      </Container>
    </>
  );
};

export default MyCuratedCollections;
