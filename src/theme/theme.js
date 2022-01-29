import { extendTheme } from '@chakra-ui/react';
import * as components from './components';

export const theme = extendTheme({
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
  layerStyles: {
    whitebox: {
      bg: 'white',
      boxShadow: '0px 10px 35px rgba(136 120 172 / 15%)',
      borderRadius: 12,
    },
    bordered: {
      bg: 'white',
      borderRadius: 12,
      border: '1px solid rgba(0 0 0 / 10%)',
      transition: 'box-shadow 0.2s ease-in-out',

      _hover: {
        boxShadow: '0px 0px 30px rgba(0 0 0 / 20%)',
      },
    },
  },
  components: {
    ...components,
  },
});
