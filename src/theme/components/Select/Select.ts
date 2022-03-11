import { mode } from '@chakra-ui/theme-tools';
import * as variants from './variants';

export const Select = {
  parts: ['wrapper', 'select', 'option', 'listbox'],
  // style object for base or default style
  baseStyle: (props: any) => ({
    wrapper: {},
    listbox: {
      position: 'absolute',
      height: 'auto',
      width: '100%',
      transition: 'opacity 0.1s ease',
      overflow: 'auto',
      zIndex: 1,
      outline: 0,
      opacity: 0,
      visibility: 'hidden',

      _expanded: {
        opacity: 1,
        visibility: 'visible',
        //transition: 'opacity 0.4s 0.5s ease, visibility 0.4s 0.5s step-end',
      },
    },
  }),
  // styles for different sizes ('sm', 'md', 'lg')
  sizes: {
    md: {
      wrapper: {
        borderRadius: '12px',

        _before: {
          borderRadius: '12px',
        },
      },
    },
  },
  // styles for different visual variants ('outline', 'solid')
  variants: {
    ...variants,
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: 'outline',
  },
};
