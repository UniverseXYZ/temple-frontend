import React, { useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import { Box, HStack } from '@chakra-ui/react';
import { useCurrency } from '@/hooks';

import cn from 'classnames';
import styles from './CurrencyToggle.module.sass';

import { Ethereum, Dollar } from './components';

interface Props {
  initialValue?: string;
  onChange?: (value: any) => void;
}

const options = [
  {
    value: 'ETH',
    label: 'ETH',
    icon: <Ethereum />,
  },
  {
    value: 'USD',
    label: 'USD',
    icon: <Dollar />,
  },
];

export const CurrencyToggle = (props: Props) => {
  //
  const { onChange, initialValue } = props;

  const [selected, setSelected] = useState(initialValue || options[0].value);
  const [activeIndex, setActiveIndex] = useState(0);

  const defaultTransition = 'transform 150ms linear';
  const [transform, setTransform] = useState('translateX(0px)');
  const [transition, setTransition] = useState(defaultTransition);

  useEffect(() => {
    if (initialValue) {
      const index = options.findIndex(
        (option) => option.value === initialValue
      );
      const translate = calculateTranslate(index);
      setTransition('unset');
      setTransform(translate);
      setActiveIndex(index);
    }
  }, []);

  const onValueChange = (value: any) => {
    //TODO: Refactoring width

    const index = options.findIndex((option) => option.value === value);
    const translate = calculateTranslate(index);

    setSelected(value);
    setActiveIndex(index);
    setTransition(defaultTransition);
    setTransform(translate);
    onChange && onChange(value);
  };

  const calculateTranslate = (index: number): string => {
    let translate = 0;
    const spacing = 6;
    const width = 75;

    if (index === 0) {
      translate = 0;
    } else {
      translate = width * index + spacing * index;
    }

    return `translateX(${translate}px)`;
  };

  const style = {
    transform: transform,
    transition: transition,
  };

  //
  return (
    <Box className={styles.Wrapper}>
      <RadioGroup value={selected} onChange={onValueChange}>
        <Box className={styles.Handle} style={style}></Box>
        <HStack spacing="6px">
          {options.map((option, index) => (
            <RadioGroup.Option
              key={index}
              value={option.value}
              className={styles.Option}
            >
              {({ checked }) => (
                <Box className={cn(styles.Item, checked && styles.Checked)}>
                  <HStack spacing="8px">
                    <Box className={styles.Icon}>{option.icon}</Box>
                    <Box className={styles.Label}>{option.label}</Box>
                  </HStack>
                </Box>
              )}
            </RadioGroup.Option>
          ))}
        </HStack>
      </RadioGroup>
    </Box>
  );
};
