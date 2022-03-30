import { mode } from '@chakra-ui/theme-tools';

export const TransactionBadge = {
  parts: ['wrapper', 'icon', 'text'],
  // style object for base or default style
  baseStyle: (props: any) => ({
    wrapper: {
      display: 'inline-block',
      lineHeight: '1',
      fontWeight: 600,
    },
    icon: {},
    text: {},
  }),
  // styles for different sizes ('sm', 'md', 'lg')
  sizes: {
    sm: {
      wrapper: {
        padding: '3px 8px',
        borderRadius: '4px',
      },

      icon: {
        width: '14px',
      },

      text: {
        fontSize: '12px',
        marginLeft: '2px',
      },
    },

    md: {
      wrapper: {
        padding: '3px 10px',
        borderRadius: '6px',
      },

      icon: {
        width: '18px',
      },

      text: {
        fontSize: '14px',
        marginLeft: '4px',
      },
    },

    lg: {
      wrapper: {
        padding: '15px',
        borderRadius: '8px',
      },

      icon: {
        width: '20px',
      },

      text: {
        display: 'none',
      },
    },

    xl: {
      wrapper: {
        padding: '21px',
        borderRadius: '8px',
      },

      icon: {
        width: '24px',
      },

      text: {
        display: 'none',
      },
    },
  },
  // styles for different visual variants ('outline', 'solid')
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: 'sm',
  },
};
