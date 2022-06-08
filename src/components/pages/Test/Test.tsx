import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  CollectionCard,
  CollectionCardSkeleton,
  CurrencyToggle,
  CurrencyExchanger,
} from '@/components/common';
import { Input } from '@/components/ui';
import { useQuery } from 'react-query';
import { useDebounce } from 'react-use';
import { GetCollectionsSearch } from '@/api';

export const Test = () => {
  //

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = React.useState('');

  const {
    data: result,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery('search', () => GetCollectionsSearch(searchQuery));

  useDebounce(
    () => {
      setDebouncedSearchQuery(searchQuery);
    },
    500,
    [searchQuery]
  );

  useEffect(() => {
    if (debouncedSearchQuery) {
      refetch();
    }
  }, [debouncedSearchQuery, refetch]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const loading = isLoading || isRefetching;

  return (
    <Box mt="60px" mb="60px">
      <Container maxW="1142px">
        <Box mb="40px">
          <Input placeholder="Search" onChange={onChange} />
        </Box>

        <VStack mb="40px" align="start">
          <Text color="black.40">Search results for</Text>
          <Heading as="h2" variant="h4">
            {searchQuery}
          </Heading>
        </VStack>

        <Box mb="15px">
          <CurrencyToggle />
        </Box>

        <Box mb="40px">
          <CurrencyExchanger value={3} />
        </Box>

        <SimpleGrid columns={4} spacing="30px">
          {loading ? (
            <CollectionCardSkeleton />
          ) : (
            <>
              {result ? (
                <>
                  {result.data.map((item: any, index: number) => (
                    <CollectionCard key={index} collection={item} />
                  ))}
                </>
              ) : (
                'No data'
              )}
            </>
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
