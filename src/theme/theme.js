import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import * as components from './components';
import colors from './colors';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,

  fonts: {
    body: 'Space Grotesk, serif',
    heading: 'Sharp Grotesk, serif',
  },

  sizes: {
    container: {
      xl: '1140px',
    },
  },

  styles: {
    global: (props) => ({
      // styles for the `body`
      body: {
        position: 'relative',
        color: mode('#000', '#fff')(props),
        height: '100%',
        backgroundColor: mode('#fafbfc', '#131313')(props),
        transition: 'none',
        fontFeatureSettings: '"ss04" on',
      },
    }),
  },
  components: {
    ...components,
  },
});
