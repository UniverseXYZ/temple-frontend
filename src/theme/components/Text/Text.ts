import { mode } from '@chakra-ui/theme-tools';

export const Text = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    'gray.60': (props: any) => ({
      color: mode('blackTransparent.60', 'whiteTransparent.60')(props),
    }),
  },
};
