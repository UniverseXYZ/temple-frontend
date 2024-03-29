import { mode } from '@chakra-ui/theme-tools';
import * as variants from './variants';

export const Input = {
  parts: ['wrapper', 'field'],
  // style object for base or default style
  baseStyle: (props: any) => ({
    wrapper: {},
    field: {
      borderRadius: '12px !important',
    },
  }),
  // styles for different sizes ('sm', 'md', 'lg')
  sizes: {
    sm: {
      field: {
        height: '40px',
        borderRadius: '11px',
      },
    },
    md: {
      wrapper: {
        borderRadius: '12px',

        _before: {
          borderRadius: '12px',
        },
      },
      field: {
        height: '46px',
        borderRadius: '11px',
      },
    },
  },
  // styles for different visual variants ('outline', 'solid')
  variants: {
    ...variants,
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
};
