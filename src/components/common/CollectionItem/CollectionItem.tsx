import React from 'react';
import { Link } from 'react-router-dom';
import { Box, HStack, Text, useColorMode } from '@chakra-ui/react';
import { Card, Avatar, CurrencyExchanger } from '@/components/common';
import { Handle, TrashIcon } from '@/components/icons';

import cn from 'classnames';
import styles from './CollectionItem.module.sass';
import { items } from '../Header/components/SettingsModal/components/ModalDialog/components/Content/useItems';

interface Props {
  children?: React.ReactNode;
}

export const CollectionItem = (props: any) => {
  //
  const { item, handle, handleListeners, isDragging, onRemove } = props;
  console.log("item ", item)
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
              <Link to={`/collections/${item.slug}`}>
                <Text fontSize={16} fontWeight={600}>
                  {item.name}
                </Text>
              </Link>
            </HStack>
          </Box>
          <Box w={105}>
            <CurrencyExchanger value={item.volume.allTime.toFixed(0)} />
          </Box>
          <Box w={105} color="#2caa00">
            <HStack>
              <Box>{item.floorSaleChange["1day"].toFixed(2)}%</Box>
            </HStack>
          </Box>
          <Box w={105} color="#ff4949">
            <HStack>
              {item.floorSaleChange["7day"] == null && <Box>{item.floorSaleChange["1day"].toFixed(2)} %</Box>}
             {item.floorSaleChange["7day"] != null && <Box>{item.floorSaleChange["7day"].toFixed(2)} %</Box>}
            </HStack>
          </Box>
          <Box w={105}>
            <CurrencyExchanger value={item.floorAsk.price && item.floorAsk.price.amount ? item.floorAsk.price.amount.native : "N/A"} />
          </Box>
          <Box w={105}>
            <HStack>
              {/* <Box>{item.stats.owners}</Box> */}
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
