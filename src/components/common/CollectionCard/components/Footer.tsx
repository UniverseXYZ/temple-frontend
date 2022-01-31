import React from 'react';
import { Box, Flex, Spacer, HStack, Text } from '@chakra-ui/react';
import { Ethereum } from '@/components/icons';

import styles from '../CollectionCard.module.sass';

const Footer: React.FC = () => (
  <>
    <div className={styles.footer}>
      <Flex>
        <Box textAlign="left">
          <Text fontSize={12} color="grey" mb={'8px'}>
            Floor price
          </Text>
          <HStack align="center">
            <Ethereum boxSize={18} />
            <Box fontWeight={600}>5.6</Box>
          </HStack>
        </Box>
        <Spacer />
        <Box textAlign="right">
          <Text fontSize={12} color="grey" mb={'8px'}>
            Est. value
          </Text>
          <Box fontWeight={600}>$110.18K</Box>
        </Box>
      </Flex>
    </div>
  </>
);

export default Footer;
