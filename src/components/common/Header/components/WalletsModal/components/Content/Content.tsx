import React from 'react';
import { Box, HStack, VStack, Text } from '@chakra-ui/react';

import { ImageUpload } from '@/components/common';
import { FormItem, Input } from '@/components/ui';

export const Content = () => {
  //
  return (
    <VStack align="stretch" spacing={'30px'}>
      <Text variant="gray.60">
        You can add as much wallet addresses as you want.
      </Text>
      <HStack spacing={'30px'}>
        <ImageUpload name="image" />

        <FormItem
          name="name"
          label="Enter the wallet name"
          tooltip="Choosing a name for you wallet will help you to navigate easier while switching between wallets."
          maxLeight={30}
          required
        >
          <Input placeholder="e.g Portfolio 1" variant="outline" />
        </FormItem>
      </HStack>

      <Box>
        <FormItem
          name="address"
          label="Enter the wallet address"
          maxLeight={42}
          required
        >
          <Input
            placeholder="e.g. 0xBdD95ABE8a7694CCD77143376b0fBea183E6a740"
            variant="outline"
          />
        </FormItem>
      </Box>
    </VStack>
  );
};
