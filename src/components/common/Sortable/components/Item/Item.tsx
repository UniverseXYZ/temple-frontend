/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

import { Handle } from './components';
import { Avatar } from '@/components/common';
import { Ethereum, TrashIcon } from '@/components/icons';

import { CSS } from '@dnd-kit/utilities';
import type { DraggableSyntheticListeners } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';

import classNames from 'classnames';
import styles from './Item.module.scss';

export interface Props {
  dragOverlay?: boolean;
  dragging?: boolean;
  handle?: boolean;
  height?: number;
  index?: number;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  style?: React.CSSProperties;
  transition?: string | null;
  wrapperStyle?: React.CSSProperties;
  onRemove?(): void;
  item: any;
}

export const Item = React.memo(
  React.forwardRef<HTMLLIElement, Props>(
    (
      {
        listeners,
        dragging,
        sorting,
        transition,
        transform,
        handle,
        item,
        onRemove,
        dragOverlay,
      },
      ref
    ) => {
      useEffect(() => {
        if (!dragging) {
          return;
        }

        document.body.classList.add('grabbing');

        return () => {
          document.body.classList.remove('grabbing');
        };
      }, [dragging]);

      const style = {
        transition,
        transform: CSS.Transform.toString(transform),
      };

      // console.log('dragging', dragging);
      // console.log('sorting', sorting);
      // console.log('transition', transition);
      console.log('onRemove', onRemove);

      return (
        <div
          className={classNames(
            styles.Wrapper,
            sorting && styles.sorting,
            dragging && styles.Dragging,
            dragOverlay && styles.DragOverlay
          )}
          style={style}
          ref={ref}
        >
          <Box
            layerStyle="bordered"
            className={classNames(styles.Item, handle && styles.WithHandle)}
            //style={style}
            // {...props}
          >
            <HStack
              fontSize={14}
              fontWeight={600}
              spacing={0}
              justifyContent="space-between"
            >
              {handle && (
                <Box className={styles.Handle}>
                  <Handle {...listeners} />
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
                <Box className={styles.Remove} onClick={onRemove}>
                  <TrashIcon boxSize="20px" />
                </Box>
              ) : null}
            </HStack>
          </Box>
        </div>
      );
    }
  )
);

// const Content = ({ item }: any) => ;

// const MemoizedContent = React.memo(Content);
