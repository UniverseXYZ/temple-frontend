import { mode } from '@chakra-ui/theme-tools';

export const solid = (props) => ({
  bgGradient: 'linear(170deg, #bceb00 15%, #00eaea 85%)',
  boxShadow: mode('xl', 'none')(props),
  position: 'relative',
  zIndex: 1,

  _before: {
    content: "''",
    display: 'block',
    height: '100%',
    width: '100%',
    position: 'absolute',
    background: 'rgb(255 255 255 / 0%)',
    transition: 'background 150ms linear',
    borderRadius: '12px',
    zIndex: -1,
  },

  _hover: {
    bgGradient: 'linear(170deg, #bceb00 15%, #00eaea 85%)',
    boxShadow: mode('lg', 'none')(props),

    _before: {
      background: 'rgb(255 255 255 / 40%)',
    },
  },

  _active: {
    bgGradient: 'linear(170deg, #bceb00 15%, #00eaea 85%)',
    boxShadow: mode('lg', 'none')(props),

    _before: {
      background: 'rgb(255 255 255 / 40%)',
    },
  },

  _focus: {
    boxShadow: mode('lg', 'none')(props),

    _before: {
      background: 'rgb(255 255 255 / 40%)',
    },
  },

  _disabled: {
    background: mode('#f2f2f2 !important', '#202020 !important')(props),
    color: mode('#999', '#4c4c4c')(props),
    opacity: 1,

    _hover: {
      boxShadow: 'none',

      _before: {
        background: 'rgb(255 255 255 / 0%)',
      },
    },
  },

  '&:focus:not([data-focus-visible-added])': {
    boxShadow: 'lg',
  },
});
