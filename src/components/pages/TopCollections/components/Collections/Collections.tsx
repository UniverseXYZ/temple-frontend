import React from 'react';
import { Box, SimpleGrid, useColorMode, Text, HStack } from '@chakra-ui/react';
import { CollectionItem } from '@/components/common';

import cn from 'classnames';
import styles from './Collections.module.sass';

export const Collections = (props: any) => {
  //
  const { collections } = props;
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <>
         <Box
        className={cn(
          styles.Item,
          isDark && styles.Dark
        )}
      >
        <HStack
          fontSize={14}
          fontWeight={600}
          spacing={0}
          justifyContent="space-between"
        >
        <HStack justifyContent='space-between'>
          <Box w={318}>
            <HStack className={styles.CollectionName}>
              <Text>NFT Name</Text>
            </HStack>
          </Box>
          <Box w={105}>
            <Text>All-Time Vol</Text>
          </Box>
          <Box w={105} color="#2caa00">
            <HStack>
              <Box> 
                <Text>1 day</Text>
              </Box>
            </HStack>
          </Box>
          <Box w={105} color="#ff4949">
            <HStack>
              <Text>7 day</Text>
            </HStack>
          </Box>
          <Box w={105}>
            <Text>Floor Price</Text>
          </Box>
          <Box w={105}>
            <HStack>
              {/* <Box>{item.stats.owners}</Box> */}
            </HStack>
          </Box>
          <Box w={105}>
            <HStack>
              <Box>Token Count</Box>
            </HStack>
          </Box>
          </HStack>
        </HStack>
      </Box>
      <Box pt="30px">
        <SimpleGrid columns={1} spacing="12px">
          {collections.map((collection: any) => (
            collection.name != "OS Shared Storefront Collection" &&
            <CollectionItem key={collection.id} item={collection} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};
