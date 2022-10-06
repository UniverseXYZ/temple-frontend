import React from 'react';
import { Box, HStack, Text, useColorMode } from '@chakra-ui/react';
import { CollectionList } from '@/components/common';
import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { Handle, TrashIcon } from '@/components/icons';

import cn from 'classnames';
import styles from './Collection.module.sass';


const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

export const Collections = (collections: any) => {
  //
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
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
      <CollectionList collections={collections} removable={false} />
    </>
  );
};
