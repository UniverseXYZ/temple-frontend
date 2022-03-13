import { mode } from '@chakra-ui/theme-tools';

export const Modal = {
  // style object for base or default style
  baseStyle: (props: any) => ({
    dialog: {
      background: mode('white', 'dark.60')(props),
      borderRadius: '12px',
    },

    overlay: {
      background: 'blackTransparent.80',
    },

    header: {
      fontFamily: 'Sharp Grotesk',
      fontWeight: 600,
      fontSize: '20px',
      padding: '30px 0',
      margin: '0 30px',
      //borderBottom: '1px solid',
      borderColor: mode('black.10', 'whiteTransparent.10')(props),
    },

    body: {
      padding: '30px',
    },

    footer: {
      padding: '30px 30px',
      borderTop: '1px solid',
      borderColor: mode('black.10', 'whiteTransparent.10')(props),
    },

    closeButton: {
      position: 'absolute',
      top: '-13px',
      right: '-13px',
      width: '26px',
      height: '26px',
      borderRadius: '50%',
      background: mode('white', 'dark.40')(props),
      boxShadow: '0px 10px 20px rgba(136, 120, 172, 0.2)',

      _hover: {
        background: mode('white', 'dark.40')(props),
      },
      _focus: {
        boxShadow: 0,
      },
      _active: {
        background: mode('white', 'dark.40')(props),
        boxShadow: '0px 5px 10px rgba(136, 120, 172, 0.2)',
      },
    },
  }),
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      dialog: {
        maxWidth: '500px',
      },
    },
    md: {
      dialog: {
        maxWidth: '560px',
      },
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {},
};
