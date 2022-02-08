export const outline = ({ colorMode }) => ({
  backgroundImage: 'linear-gradient(175deg,#bceb00,#00eaea) !important',
  backgroundOrigin: 'border-box !important',
  borderColor: 'transparent',
  boxShadow:
    colorMode === 'light'
      ? 'inset 2px 1000px 1px #fff'
      : 'inset 2px 1000px 1px #141414',

  _hover: {
    boxShadow:
      colorMode === 'light'
        ? 'inset 0 40px 0px rgb(255 255 255 / 80%)'
        : 'inset 0 40px 0px rgb(0 0 0 / 80%)',
  },
  _focus: {
    boxShadow:
      colorMode === 'light'
        ? 'inset 0 40px 0px rgb(255 255 255 / 80%)'
        : 'inset 0 40px 0px rgb(0 0 0 / 80%)',
  },
  _active: {
    boxShadow:
      colorMode === 'light'
        ? 'inset 0 40px 0px rgb(255 255 255 / 80%)'
        : 'inset 0 40px 0px rgb(0 0 0 / 80%)',
  },

  ':focus:not([data-focus-visible-added])': {
    boxShadow:
      colorMode === 'light'
        ? 'inset 0 40px 0px rgb(255 255 255 / 80%)'
        : 'inset 0 40px 0px rgb(0 0 0 / 80%)',
  },

  _disabled: {
    boxShadow: 'none !important',
    background: 'none !important',
    borderColor: colorMode === 'light' ? '#e6e6e6' : '#2b2b2b',
    color: colorMode === 'light' ? '#ccc' : '#434343',
    opacity: 1,

    _hover: {
      boxShadow: 'none',
    },
  },
});
