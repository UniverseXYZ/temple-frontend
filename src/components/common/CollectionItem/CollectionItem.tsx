import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { Card, Avatar } from '@/components/common';
import { Handle, Ethereum, TrashIcon } from '@/components/icons';

import cn from 'classnames';
import styles from './CollectionItem.module.scss';

interface Props {
  children?: React.ReactNode;
}

export const CollectionItem = (props: any) => {
  //
  const { item, handle, handleListeners, isDragging, onRemove } = props;
  //
  return (
    <Card hover className={cn(styles.Item, handle && styles.WithHandle)}>
      <HStack
        fontSize={14}
        fontWeight={600}
        spacing={0}
        justifyContent="space-between"
      >
        {handle && (
          <Box className={styles.Handle}>
            <Handle {...handleListeners} isDragging={isDragging} />
          </Box>
        )}

        <HStack justifyContent="space-between">
          <Box w={318}>
            <HStack className={styles.CollectionName}>
              <Avatar image={item.logo} name={item.name} boxSize="50px" />
              <Text fontSize={16} fontWeight={600}>
                {item.name}
              </Text>
            </HStack>
          </Box>
          <Box w={105}>
            <HStack align="center">
              <Ethereum />
              <Box>{item.stats.totalValue}</Box>
            </HStack>
          </Box>
          <Box w={105} color="#2caa00">
            <HStack>
              <Box>{item.stats.oneDayChange} %</Box>
            </HStack>
          </Box>
          <Box w={105} color="#ff4949">
            <HStack>
              <Box>{item.stats.sevenDayChange} %</Box>
            </HStack>
          </Box>
          <Box w={105}>
            <HStack>
              <Ethereum />
              <Box>{item.stats.floorPrice}</Box>
            </HStack>
          </Box>
          <Box w={105}>
            <HStack>
              <Box>{item.stats.owners}</Box>
            </HStack>
          </Box>
          <Box w={105}>
            <HStack>
              <Box>{item.stats.items}</Box>
            </HStack>
          </Box>
        </HStack>
        {onRemove ? (
          <Box className={styles.Remove} onClick={() => onRemove(item.id)}>
            <TrashIcon boxSize="20px" />
          </Box>
        ) : null}
      </HStack>
    </Card>
  );
};
