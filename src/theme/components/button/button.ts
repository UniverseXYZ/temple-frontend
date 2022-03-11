import * as variants from './variants';

export const Button = {
  // style object for base or default style
  baseStyle: {
    fontSize: '16px',
    fontWeight: 500,
    borderRadius: '12px',
    padding: '11px 26px',
    color: '#000',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
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
