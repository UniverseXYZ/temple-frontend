import { mode } from '@chakra-ui/theme-tools';

export const Avatar = {
  // style object for base or default style
  baseStyle: (props: any) => ({
    borderColor: mode('blackTransparent.10', 'blackTransparent.80')(props),
    transition: 'border-color 150ms linear',
  }),
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    full: {
      width: '100%',
      height: '100%',
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {},
};
