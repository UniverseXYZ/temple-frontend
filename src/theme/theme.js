import { extendTheme } from '@chakra-ui/react';
import * as components from './components';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    body: 'Space Grotesk, serif',
    heading: 'Sharp Grotesk, serif',
  },
  // fontSizes: {
  //   lg: 20,
  //   xl: '26px',
  // },
  styles: {
    global: ({ colorMode }) => ({
      // styles for the `body`
      body: {
        color: colorMode === 'light' ? '#000' : '#fff',
        height: '100%',
        backgroundColor: colorMode === 'light' ? '#fafbfc' : '#131313',
        backgroundImage:
          colorMode === 'light'
            ? 'url("/assets/images/top-main-bg.png")'
            : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      },
    }),
  },
  components: {
    ...components,
  },
});
