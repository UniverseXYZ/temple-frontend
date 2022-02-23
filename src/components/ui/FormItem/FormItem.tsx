import React, { FC } from 'react';
import {
  Box,
  Flex,
  HStack,
  FormControl,
  FormLabel,
  // TODO: FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';

import { useField } from 'formik';

import { InfoTooltip } from '@/components/common';

interface Props {
  name: string;
  label?: string;
  required?: boolean;
  tooltip?: string;
  errorMessage?: string;
  maxLeight?: number;
}

export const FormItem: FC<Props> = (props) => {
  //
  const {
    name,
    children,
    label = null,
    required = false,
    tooltip,
    maxLeight,
  } = props;

  const [field, meta] = useField(props);

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    // for select, you must pass props.children to Chakra UI's Select component explicitly
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { id: `${name}-form-field`, ...field });
    }
    return child;
  });

  const isInvalid = meta.touched && !!meta.error;

  return (
    <FormControl isInvalid={isInvalid}>
      {label && (
        <FormLabel id={`${name}-label`} htmlFor={`${name}-form-field`}>
          <Flex align="center">
            <Box>{label}</Box>
            {required && <RequiredMark />}
            {tooltip && <LabelTooltip tooltip={tooltip} />}
            {maxLeight && (
              <ValueLeightCouner maxLeight={maxLeight} value={field.value} />
            )}
          </Flex>
        </FormLabel>
      )}
      {childrenWithProps}
      {isInvalid && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormControl>
  );
};

const RequiredMark = () => (
  <Box ml={0} role="presentation" aria-hidden="true">
    *
  </Box>
);

const LabelTooltip = (props: any) => (
  <Box ml="6px">
    <InfoTooltip label={props.tooltip} />
  </Box>
);

const ValueLeightCouner = ({ value, maxLeight }: any) => {
  return (
    <Box ml="auto" fontSize="10px" fontWeight="400">
      {value?.length} / {maxLeight}
    </Box>
  );
};
