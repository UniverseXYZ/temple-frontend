import React, { FC } from 'react';
import { Box, useOutsideClick, useMultiStyleConfig } from '@chakra-ui/react';

import { useSelect } from '@mui/base';

import cn from 'classnames';

interface ISelectProps {
  options: ISelectOption[];
  variant?: string;
  placeholder?: string;
}

interface ISelectOption {
  value: string | number | object | undefined;
  label: string;
}

export const Select: FC<ISelectProps> = (props) => {
  //
  const { options, placeholder = 'Select...', variant } = props;

  const listboxRef = React.useRef(null);
  const [listboxVisible, setListboxVisible] = React.useState(false);

  const { getButtonProps, getListboxProps, getOptionProps, value, onChange } =
    useSelect({
      listboxRef,
      options,
    });

  useOutsideClick({
    ref: listboxRef,
    handler: () => setListboxVisible(false),
  });

  const inputStyles = useMultiStyleConfig('Select', { variant });

  React.useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  return (
    <Box
      __css={inputStyles.wrapper}
      width="200px"
      border="1px solid #ccc"
      onClick={() => setListboxVisible(true)}
      onChange={onChange}
    >
      <Box {...getButtonProps()}>
        {value ?? <span className="placeholder">{placeholder}</span>}
      </Box>

      <Box
        {...getListboxProps()}
        aria-expanded={listboxVisible}
        //className={cn(!listboxVisible && 'hidden')}
        __css={inputStyles.listbox}
      >
        {options.map((option, index) => {
          return (
            <Box key={index} {...getOptionProps(option)}>
              {option.label}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
