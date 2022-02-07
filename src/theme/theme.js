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
    global: {
      // styles for the `body`
      body: {
        color: '#000',
        height: '100%',
        backgroundImage: 'url("/assets/images/merged-main-bg.jpg")',
        backgroundPosition: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed, scroll',
      },
    },
  },
  components: {
    ...components,
  },
});
