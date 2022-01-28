import { extendTheme } from '@chakra-ui/react';
import * as components from './components';

export const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontFamily: 'Sharp Grotesk',
        fontWeight: 600,
      },
    },
  },
  layerStyles: {
    whitebox: {
      bg: 'white',
      boxShadow: '0px 10px 35px rgba(136 120 172 / 15%)',
      borderRadius: 12,
    },
  },
  components: {
    ...components,
  },
});
