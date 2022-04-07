import { mode } from '@chakra-ui/theme-tools';

export const Tabs = {
  // style object for base or default style
  baseStyle: (props) => ({
    root: {},
    tab: {
      outline: 0,
      color: 'red',

      _selected: {
        color: 'red',
        borderTopRightRadius: '1px',
        borderTopLeftRadius: '1px',
      },
      _active: {
        color: 'red',
        borderTopRightRadius: '1px',
        borderTopLeftRadius: '1px',
      },
      _disabled: {},
    },
    tablist: {
      borderBottom: '2222px solid',
    },
    tabpanel: {},
  }),
  // styles for different sizes ('sm', 'md', 'lg')
  sizes: {},
  // styles for different visual variants ('outline', 'solid')
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {},
};
