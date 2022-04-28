import React, { useState, useRef, createRef } from 'react';
import { Box, HStack, Flex } from '@chakra-ui/react';

import cn from 'classnames';
import styles from './ElasticSwitch.module.sass';

interface Props {
  items: Item[];
  defaultIndex?: number;
  //selectedIndex?: number;
  //activeItem?: Value;
  onChange?: (value: Value) => void;
}

interface Item {
  title: string;
  value: Value;
  disabled?: boolean;
  icon?: React.ReactNode;
}

type Value = number | string;

export const ElasticSwitch = (props: Props) => {
  //
  const { items, defaultIndex = 0, onChange } = props;

  const [activeIndexState, setActiveIndexState] = useState(defaultIndex ?? 0);

  // const [activeItemState, setActiveState] = useState(
  //   activeItem || items[0].value
  // );

  const elementsRef = useRef(items.map(() => createRef()));

  const handleItemSelect = (element: any, value: Value, index: number) => {
    console.log(element);

    setActiveIndexState(index);
    //setActiveState(value);
    onChange && onChange(value);
  };

  return (
    <Box className={styles.Wrapper}>
      <HStack className={styles.List} spacing="4px">
        {items.map((item: Item, index: number) => (
          <Box
            //@ts-ignore // TODO: FIX ME
            ref={elementsRef.current[index]}
            key={index}
            className={cn(
              styles.Item,
              index === activeIndexState && styles['Item--Active'],
              item.disabled && styles['Item--Disabled']
            )}
            onClick={(e) => handleItemSelect(e, item.value, index)}
          >
            <Flex>
              {item.icon && <Box className={styles.Icon}>{item.icon}</Box>}
              {item.title && <Box className={styles.Title}>{item.title}</Box>}
            </Flex>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};
