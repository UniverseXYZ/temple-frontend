const hoverGradient =
  'linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(170deg, #bceb00 15%, #00eaea 85%)';

export const solid = ({ colorMode }) => ({
  bgGradient: 'linear(170deg, #bceb00 15%, #00eaea 85%)',
  boxShadow: 'xl',

  _hover: {
    background: hoverGradient,
    boxShadow: 'lg',
  },

  _active: {
    background: hoverGradient,
    boxShadow: 'lg',
  },

  _focus: {
    boxShadow: 'lg',
  },

  _disabled: {
    background:
      colorMode === 'light' ? '#f2f2f2 !important' : '#202020 !important',
    color: colorMode === 'light' ? '#999' : '#4c4c4c',
    opacity: 1,

    _hover: {
      boxShadow: 'none',
    },
  },

  '&:focus:not([data-focus-visible-added])': {
    boxShadow: 'lg',
  },
});
