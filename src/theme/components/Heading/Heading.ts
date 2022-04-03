import { mode } from '@chakra-ui/theme-tools';

export const Heading = {
  // style object for base or default style
  baseStyle: {
    fontWeight: 600,
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    lg: {
      fontSize: 20,
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    card: (props: any) => ({
      fontFamily: 'Space Grotesk',
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      color: mode('blackTransparent.60', 'whiteTransparent.60')(props),
      textTransform: 'uppercase',
    }),

    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 36,
    },
    h3: {
      fontSize: 32,
    },
    h4: {
      fontSize: 26,
    },
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 16,
    },
  },
};
