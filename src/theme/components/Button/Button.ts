import { mode } from '@chakra-ui/theme-tools';
import * as variants from './variants';

export const Button = {
  // style object for base or default style
  baseStyle: (props: any) => ({
    fontFamily: 'Space Grotesk',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '12px',
    padding: '11px 16px',
    color: '#000',

    _focus: {
      outline: '0',
      boxShadow: '0',
    },

    path: {
      fill: mode('black', 'white')(props),
    },
  }),
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    md: {
      height: '42px',
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    ...variants,
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};
