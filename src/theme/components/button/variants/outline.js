export const outline = {
  backgroundImage: 'linear-gradient(175deg,#bceb00,#00eaea) !important',
  backgroundOrigin: 'border-box !important',
  borderColor: 'transparent',
  boxShadow: 'inset 2px 1000px 1px #fff',

  _hover: {
    boxShadow: 'inset 0 40px 0px rgb(255 255 255 / 90%)',
  },
  _focus: {
    boxShadow: 'inset 0 40px 0px rgb(255 255 255 / 90%)',
  },
  _active: {
    boxShadow: 'inset 0 40px 0px rgb(255 255 255 / 90%)',
  },

  ':focus:not([data-focus-visible-added])': {
    boxShadow: 'inset 0 40px 0px rgb(255 255 255 / 90%)',
  },
};
