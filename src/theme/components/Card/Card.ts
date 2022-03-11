import { mode } from '@chakra-ui/theme-tools';

export const Card = {
  // style object for base or default style
  baseStyle: (props: any) => ({
    bg: mode('white', 'dark.80')(props),
    borderRadius: 12,
    transition: 'all 150ms linear',
  }),
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    whitebox: (props: any) => ({
      boxShadow: mode(
        '0px 10px 35px rgba(136 120 172 / 15%)',
        '0 0 0 1px rgba(255 255 255 / 10%)'
      )(props),
    }),
    bordered: (props: any) => ({
      boxShadow: mode(
        '0 0 0 1px rgba(0 0 0 / 10%)',
        '0 0 0 1px rgba(255 255 255 / 10%)'
      )(props),

      _hover: {
        bg: mode('white', 'dark.60')(props),
        boxShadow: mode(
          '0px 0px 30px rgba(0 0 0 / 20%)',
          '0 0 0 1px rgba(255 255 255 / 20%)'
        )(props),
      },
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {},
};
