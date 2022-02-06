import { Container, Heading, HStack } from '@chakra-ui/react';
import { CollectionCard } from '@/components/common';

import initialData from '@/mocks/data';

const CommunityCuratedCollections = () => {
  const collections = initialData.collections.slice(0, 4);

  return (
    <>
      <Container maxW="1142px" pb="130px">
        <Heading as="h2" size="lg" mb="40px">
          Community curated collections
        </Heading>

        <HStack spacing="30px">
          {collections.map((item, index) => (
            <CollectionCard key={index} collection={item} />
          ))}
        </HStack>
      </Container>
    </>
  );
};

export default CommunityCuratedCollections;
