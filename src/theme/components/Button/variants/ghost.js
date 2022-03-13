import { mode } from '@chakra-ui/theme-tools';

export const ghost = (props) => ({
  border: '1px solid',
  borderColor: mode('blackTransparent.10', 'whiteTransparent.10')(props),
  background: 'transparent !important',

  _hover: {
    borderColor: mode('blackTransparent.20', 'whiteTransparent.20')(props),
  },

  _focus: {
    borderColor: mode('blackTransparent.20', 'whiteTransparent.20')(props),
  },

  _active: {
    borderColor: mode('blackTransparent.20', 'whiteTransparent.20')(props),
  },

  ':focus:not([data-focus-visible-added])': {
    borderColor: mode('blackTransparent.20', 'whiteTransparent.20')(props),
  },

  _disabled: {
    color: mode('blackTransparent.20', 'whiteTransparent.20')(props),
  },
});
