import React from 'react';
import { Box, HStack, useColorMode } from '@chakra-ui/react';
import { SelectDownArrow } from '@/components/icons';

import { HiddenSelect, useSelect } from '@react-aria/select';
import { useButton } from '@react-aria/button';
import { useSelectState } from '@react-stately/select';

import { List, Dropdown } from './components';
export { Item as Option, Section } from '@react-stately/collections';

import cn from 'classnames';
import styles from './Select.module.sass';

interface SelectProps {
  variant?: string;
  label?: string;
  placeholder?: string;
  description?: string;
  labelInfo?: string;
  isOpen?: boolean;
  items?: any;
  defaultSelectedKey?: string;
}

export const Select = (props: any) => {
  // Create state based on the incoming props
  const state = useSelectState(props);

  const { isOpen, selectedItem } = state;

  const {
    label,
    placeholder = 'Select an option',
    description,
    labelInfo,
    items,
  } = props;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  // Get props for child elements from useSelect
  const ref = React.useRef(null);

  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );

  // Get props for the button based on the trigger props from useSelect
  const { buttonProps } = useButton(triggerProps, ref);

  return (
    <Box className={cn(styles.Wrapper, isDark && styles.Dark)}>
      <HStack className={styles.LabelWrapper}>
        {label && (
          <Box className={styles.Label} __css={css.label} {...labelProps}>
            {label}
          </Box>
        )}
        {labelInfo && <Box>{labelInfo}</Box>}
      </HStack>

      {description && (
        <Box className={styles.Description} __css={css.description}>
          {description}
        </Box>
      )}

      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />

      <Box
        className={cn(
          styles.SelectWrapper,
          isOpen && styles.isOpen,
          selectedItem && styles.isSelected
        )}
      >
        <button
          ref={ref}
          //as="button"
          className={styles.Select}
          //__css={css.select}
          {...buttonProps}
        >
          <span {...valueProps}>
            {selectedItem ? selectedItem.rendered : placeholder}
          </span>

          <Box className={styles.Arrow} aria-hidden="true">
            <SelectDownArrow />
          </Box>
        </button>
      </Box>

      {state.isOpen && (
        <Dropdown isOpen={state.isOpen} onClose={state.close}>
          <List {...menuProps} state={state} items={items} />
        </Dropdown>
      )}
    </Box>
  );
};
