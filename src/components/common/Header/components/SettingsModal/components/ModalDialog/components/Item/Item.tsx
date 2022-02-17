import React, { useEffect } from 'react';
import { Box, Image, Flex, Text, Switch, useColorMode } from '@chakra-ui/react';
import { Handle } from '@/components/icons';
import { useSettings } from '@/hooks';

import { CSS } from '@dnd-kit/utilities';
import type { DraggableSyntheticListeners } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';

export interface ISettingsItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface Props {
  key: number;
  item: ISettingsItem;
  onChange(id: string, visible: boolean): void;
  dragging?: boolean;
  sorting?: boolean;
  transition?: string;
  listeners?: DraggableSyntheticListeners;
  transform?: Transform | null | any;
}

import cn from 'classnames';
import styles from './Item.module.sass';

export const Item = React.memo(
  React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    //
    const {
      item,
      onChange,
      listeners,
      dragging,
      //sorting,
      transition,
      transform,
    } = props;

    const { id, image, title, description } = item;

    const { getSectionVisible } = useSettings();

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

    const onVisibleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const id = event.target.value;
      const visible = event.target.checked;
      onChange(id, visible);
    };

    return (
      <div
        className={cn(
          styles.Item,
          //sorting && styles.Sorting,
          dragging && styles.Dragging,
          colorMode === 'dark' && styles.Dark
        )}
        ref={ref}
        style={style}
      >
        <Flex align="center">
          <Handle {...listeners} isDragging={dragging} />
          <Image className={styles.Image} src={image} alt={title} />
          <Box flex="1">
            <Text className={styles.Title}>{title}</Text>
            <Text className={styles.Description}>{description}</Text>
          </Box>
          <Switch
            defaultChecked={getSectionVisible(id)}
            onChange={onVisibleChange}
            value={id}
          />
        </Flex>
      </div>
    );
  })
);
