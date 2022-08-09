/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { CSS } from '@dnd-kit/utilities';
import type { DraggableSyntheticListeners } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';
import { CollectionItem } from '@/components/common';

import cn from 'classnames';
import styles from './Item.module.scss';

export interface Props {
  dragOverlay?: boolean;
  dragging?: boolean;
  handle?: boolean;
  height?: number;
  fadeIn?: boolean;
  transform?: Transform | null | any;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  style?: React.CSSProperties;
  transition?: string;
  wrapperStyle?: React.CSSProperties;
  onRemove?(id: string): void;
  item: any;
  id?: string;
  className?: string;
}

export const Item = React.memo(
  React.forwardRef<HTMLDivElement, Props>(
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
      const { colorMode } = useColorMode();

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

      return (
        <div
          className={cn(
            styles.Wrapper,
            sorting && styles.Sorting,
            dragging && styles.Dragging,
            dragOverlay && styles.DragOverlay,
            colorMode === 'dark' && styles.Dark
          )}
          style={style}
          ref={ref}
        >
          <CollectionItem
            item={item}
            handle={handle}
            handleListeners={listeners}
            isDragging={dragging}
            onRemove={onRemove}
          />
        </div>
      );
    }
  )
);
