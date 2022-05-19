import { mode } from '@chakra-ui/theme-tools';

export const Tooltip = {
  // style object for base or default style
  baseStyle: (props: any) => ({
    bg: mode('black.80', 'white')(props),
    color: mode('white', 'black')(props),
    padding: '12px 16px',
    borderRadius: '12px',
    boxShadow: mode('0px 6px 12px rgba(0 0 0 / 5%)', 'none')(props),
    fontWeight: '14px',
    textAlign: 'center',

    '--popper-arrow-bg': mode('var(--chakra-colors-black-80)', 'white')(props),

    '.chakra-tooltip__arrow': {
      //borderRadius: '3px',
      //top: '-1px',
    },
  }),
  // styles for different sizes ('sm', 'md', 'lg')
  sizes: {},
  // styles for different visual variants ('outline', 'solid')
  variants: {
    white: (props: any) => ({
      bg: mode('white', 'white')(props),
      color: mode('black', 'black')(props),
      '--popper-arrow-bg': mode('white', 'white')(props),
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {},
};
