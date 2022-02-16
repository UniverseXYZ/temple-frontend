import { mode } from '@chakra-ui/theme-tools';

export const Tooltip = {
  // style object for base or default style
  baseStyle: (props) => ({
    bg: mode('white', 'dark.60')(props),
    color: mode('black', 'white')(props),
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid',
    borderColor: mode('#ececec', 'dark.40')(props),
    boxShadow: '0px 6px 12px rgba(0 0 0 / 5%)',
    fontWeight: '14px',

    '--popper-arrow-bg': mode('white', 'var(--chakra-colors-dark-60)')(props),

    '.chakra-tooltip__arrow': {
      borderTop: '1px solid',
      borderLeft: '1px solid',
      borderColor: mode('#ececec', 'dark.40')(props),
      borderTopLeftRadius: '3px',
      top: '-1px !important',
    },
  }),
  // styles for different sizes ('sm', 'md', 'lg')
  sizes: {},
  // styles for different visual variants ('outline', 'solid')
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {},
};
