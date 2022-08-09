import { mode } from '@chakra-ui/theme-tools';

export const outline = (props: any) => ({
  wrapper: {
    position: 'relative',
    background: mode('white', 'transparent')(props),
    backgroundClip: mode('padding-box', 'none'),
    border: '1px solid',
    borderColor: mode('black.10', 'whiteTransparent.20')(props),
    transition: 'all 150ms linear',

    _before: {
      content: '""',
      display: mode('block', 'none')(props),
      position: 'absolute',
      top: '-1px',
      bottom: '-1px',
      left: '-1px',
      right: '-1px',
      background: 'linear-gradient(135deg, #bceb00 15%, #00eaea 85%)',
      transition: 'all 150ms linear',
      opacity: 0,
      zIndex: 1,
    },

    _hover: {
      borderColor: mode('transparent', 'green')(props),

      _before: {
        opacity: 1,
      },
    },

    _focusWithin: {
      boxShadow: '0px 0px 0px 5px rgba(102, 234, 90, 0.15)',
      borderColor: mode('transparent', 'green')(props),

      _before: {
        opacity: mode('1', '0')(props),
      },
    },

    _invalid: {
      borderColor: 'red',

      _hover: {
        borderColor: 'red',
      },

      _focusWithin: {
        boxShadow: '0px 0px 0px 5px rgba(255, 73, 73, 0.1)',
      },
    },
  },

  field: {
    fontSize: '16px',
    border: 0,
    zIndex: 2,

    _placeholder: {
      fontFamily: 'Space Grotesk',
      fontStyle: 'normal',
      fontWeight: 400,
      fontZize: '16px',
      color: '#999',
    },
  },
});
