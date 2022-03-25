import { mode } from '@chakra-ui/theme-tools';

export const Card = {
  // style object for base or default style
  baseStyle: (props: any) => ({
    background: mode('whiteTransparent.100', 'whiteTransparent.5')(props),
    borderRadius: 12,
    transition: 'all 150ms linear',
    backdropFilter: mode('none', 'blur(40px)')(props),

    boxShadow: mode(
      '0px 10px 35px rgba(136 120 172 / 15%)',
      '0 0 0 1px rgba(255 255 255 / 10%)'
    )(props),

    '&.Card--withBorder': {
      boxShadow: mode(
        '0 0 0 1px rgba(0 0 0 / 10%)',
        '0 0 0 1px rgba(255 255 255 / 10%)'
      )(props),
    },

    '&.Card--withHover': {
      _hover: {
        background: mode('whiteTransparent.100', 'whiteTransparent.10')(props),
        boxShadow: mode(
          '0px 0px 30px rgba(0 0 0 / 20%)',
          '0 0 0 1px rgba(255 255 255 / 20%)'
        )(props),
      },
    },
  }),
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    // whitebox: (props: any) => ({
    //   boxShadow: mode(
    //     '0px 10px 35px rgba(136 120 172 / 15%)',
    //     '0 0 0 1px rgba(255 255 255 / 20%)'
    //   )(props),
    // }),
    // bordered: (props: any) => ({
    //   boxShadow: mode(
    //     '0 0 0 1px rgba(0 0 0 / 10%)',
    //     '0 0 0 1px rgba(255 255 255 / 10%)'
    //   )(props),
    // }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    //variant: 'whitebox',
  },
};
