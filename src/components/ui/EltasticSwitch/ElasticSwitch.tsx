import React, { useState, useRef, createRef } from 'react';
import { Box, HStack, Flex, useColorMode } from '@chakra-ui/react';

import cn from 'classnames';
import styles from './ElasticSwitch.module.sass';

interface Props {
  items: Item[];
  defaultIndex?: number;
  //selectedIndex?: number;
  //activeItem?: Value;
  onChange?: (value: Value) => void;
  size?: 'sm' | 'md';
}

interface Item {
  title?: string;
  value: Value;
  disabled?: boolean;
  icon?: React.ReactNode;
}

type Value = number | string;

export const ElasticSwitch = (props: Props) => {
  //
  const { colorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  const { size = 'md', items, defaultIndex = 0, onChange } = props;

  const [activeIndexState, setActiveIndexState] = useState(defaultIndex ?? 0);

  // const [activeItemState, setActiveState] = useState(
  //   activeItem || items[0].value
  // );

  const elementsRef = useRef(items.map(() => createRef()));

  const handleItemSelect = (element: any, value: Value, index: number) => {
    setActiveIndexState(index);
    //setActiveState(value);
    onChange && onChange(value);
  };

  return (
    <Box
      className={cn(
        styles.Wrapper,
        isDark && styles.Dark,
        size === 'md' && styles['Size--md'],
        size === 'sm' && styles['Size--sm']
      )}
    >
      <HStack
        className={styles.List}
        spacing="4px"
        role="radiogroup"
        aria-orientation="horizontal"
        aria-labelledby="Elastic Switch"
      >
        {items.map((item: Item, index: number) => (
          <Box
            //@ts-ignore // TODO: FIX ME
            ref={elementsRef.current[index]}
            role="radio"
            aria-checked={index === activeIndexState}
            aria-labelledby={item.title}
            aria-disabled={item.disabled ?? null}
            tabIndex={index === activeIndexState ? 0 : -1}
            key={index}
            className={cn(
              styles.Item,
              index === activeIndexState && styles['Item--Active'],
              item.disabled && styles['Item--Disabled']
            )}
            onClick={(e) => handleItemSelect(e, item.value, index)}
          >
            <HStack display="inline-flex" h="100%" spacing={0}>
              {item.icon && (
                <Box
                  className={cn(
                    styles.Icon,
                    !item.title && styles.WithoutTitle
                  )}
                >
                  {item.icon}
                </Box>
              )}
              {item.title && (
                <Box className={styles.Title} id={item.title}>
                  {item.title}
                </Box>
              )}
            </HStack>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};
