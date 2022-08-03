import React from 'react';
import { Box, HStack, Text, useColorMode } from '@chakra-ui/react';
import { Card, Avatar, CurrencyExchanger } from '@/components/common';
import { Handle, TrashIcon } from '@/components/icons';

import cn from 'classnames';
import styles from './CollectionItem.module.sass';

interface Props {
  children?: React.ReactNode;
}

export const CollectionItem = (props: any) => {
  //
  const { item, handle, handleListeners, isDragging, onRemove } = props;
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  //
  return (
    <Card
      hover
      className={cn(
        styles.Item,
        handle && styles.WithHandle,
        isDark && styles.Dark
      )}
    >
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
              <Avatar image={item.image} name={item.name} boxSize="50px" />
              <Text fontSize={16} fontWeight={600}>
                {item.name}
              </Text>
            </HStack>
          </Box>
          <Box w={105}>
            <CurrencyExchanger value={item.floorAskPrice.toFixed(2)} />
          </Box>
          <Box w={105} color="#2caa00">
            <HStack>
              <Box>{item.floorSaleChange['1day'] && item.floorSaleChange['1day'].toFixed(2)} %</Box>
            </HStack>
          </Box>
          <Box w={105} color="#ff4949">
            <HStack>
              <Box>{item.floorSaleChange['7day'] && item.floorSaleChange['7day'].toFixed(2)} %</Box>
            </HStack>
          </Box>
          <Box w={105}>
            <CurrencyExchanger value={item.volume.allTime.toFixed(2)} />
          </Box>
          <Box w={105}>
            <HStack>
              <Box>{item.volumeChange['1day'] && item.volumeChange['1day'].toFixed(2)} %</Box>
            </HStack>
          </Box>
          <Box w={105}>
            <HStack>
              <Box>{item.tokenCount}</Box>
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
