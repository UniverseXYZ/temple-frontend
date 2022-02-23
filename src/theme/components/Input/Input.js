import { mode } from '@chakra-ui/theme-tools';
import * as variants from './variants';

export const Input = {
  parts: ['wrapper', 'field'],
  // style object for base or default style
  baseStyle: (props) => ({
    wrapper: {},
    field: {
      borderRadius: '12px !important',
    },
  }),
  // styles for different sizes ('sm', 'md', 'lg')
  sizes: {
    md: {
      wrapper: {
        borderRadius: '12px',

        _before: {
          borderRadius: '12px',
        },
      },
      field: {
        borderRadius: '12px',
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
  },
};
