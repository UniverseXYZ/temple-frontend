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
        // backgroundImage:
        //   colorMode === 'light'
        //     ? 'url("/assets/images/top-main-bg.png")'
        //     : 'url("/assets/images/dark-top-main-bg.png")',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'contain',
      },

      '.Wrapper': {
        //paddingTop: '60px',

        _before: {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'block',
          width: '100%',
          height: '430px',
          background:
            'linear-gradient(60deg, #FEB0FE 6.61%, #ABB3FC 60.63%, #5DF7A4 110.29%)',
          mixBlendMode: 'normal',
          opacity: 0.55,
          zIndex: -1,
          transition: 'none',
        },

        _after: {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'block',
          width: '100%',
          height: '430px',
          background: mode(
            'linear-gradient(180deg, rgba(250, 251, 252, 0) 2.93%, #FAFBFC 94.79%)',
            'linear-gradient(180deg, rgba(19, 19, 19, 0) 2.93%, #131313 94.79%);'
          )(props),
          mixBlendMode: 'normal',
          zIndex: -1,
          transition: 'none',
        },
      },
    }),
  },
  components: {
    ...components,
  },
});
