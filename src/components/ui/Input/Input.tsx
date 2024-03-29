import React from 'react';
import {
  Box,
  Input as ChakraInput,
  InputProps,
  useFormControl,
  useMultiStyleConfig,
} from '@chakra-ui/react';

interface Props extends InputProps {
  variant?: string;
  value?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  //
  const { variant, ...restProps } = props;

  const inputStyles = useMultiStyleConfig('Input', { variant });
  const field = useFormControl(props);

  return (
    <Box __css={inputStyles.wrapper} aria-invalid={field['aria-invalid']}>
      <ChakraInput
        __css={inputStyles.field}
        ref={ref}
        {...field}
        {...restProps}
      />
    </Box>
  );
});

Input.displayName = 'Input';
