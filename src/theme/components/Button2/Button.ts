import * as variants from './variants';

export const Button = {
  // style object for base or default style
  baseStyle: {
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '12px',
    padding: '12px 26px !important',
    color: '#000',

    _focus: {
      outline: '0 !important',
      boxShadow: '0 !important',
    },
  },
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
