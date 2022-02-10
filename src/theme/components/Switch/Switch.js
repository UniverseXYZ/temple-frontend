import { mode } from '@chakra-ui/theme-tools';

export const Switch = {
  // style object for base or default style
  baseStyle: (props) => ({
    thumb: {
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },

    track: {
      background: mode('black.10', '#434343')(props),
      padding: '3px',
      transition: 'background .2s linear',

      _hover: {
        background: mode('black.20', '#434343')(props),
      },

      _checked: {
        background: 'gradientGreen',

        _hover: {
          background: 'gradientGreen',
        },
      },

      _focus: {
        boxShadow: 'none',
      },
    },
  }),
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    md: {
      track: {
        width: '34px',
        height: '18px',
      },
      thumb: {
        width: '18px',
        height: '18px',

        _checked: {
          transform: 'translateX(16px)',
        },
      },
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {},
};
