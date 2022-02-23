import React, { FC } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';

import { ImageUpload } from '@/components/common';
import { FormItem, Input } from '@/components/ui';

export const Content: FC<any> = (props: any) => {
  //
  return (
    <VStack align="stretch" spacing={'30px'}>
      <HStack spacing={'30px'}>
        <ImageUpload name="Image" />

        <FormItem
          name="Name"
          label="Enter the wallet name"
          tooltip="Choosing a name for you wallet will help you to navigate easier while switching between wallets."
          maxLeight={20}
          required
        >
          <Input placeholder="e.g Portfolio 1" variant="outline" />
        </FormItem>
      </HStack>

      <Box>
        <FormItem
          name="Address"
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
