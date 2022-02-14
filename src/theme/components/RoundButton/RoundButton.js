import { mode } from '@chakra-ui/theme-tools';

export const RoundButton = {
  // style object for base or default style
  baseStyle: (props) => ({
    display: 'block',
    background: mode('white', 'dark.80')(props),
    borderRadius: 'full',
    border: '1px solid',
    borderColor: mode('black.10', 'whiteTransparent.10')(props),
    boxShadow: '0px 10px 36px rgba(136, 120, 172, 0.14)',
    transition: 'all 150ms linear',

    path: {
      stroke: mode('black', 'white')(props),
    },

    _hover: {
      borderColor: mode('black.20', 'whiteTransparent.10')(props),
      background: mode('white', 'dark.60')(props),
    },
  }),
  // styles for different sizes ('sm', 'md', 'lg')
  sizes: {
    sm: {
      width: '36px',
      height: '36px',
    },
    md: {
      width: '50px',
      height: '50px',
    },
  },
  // styles for different visual variants ('outline', 'solid')
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: 'md',
  },
};
