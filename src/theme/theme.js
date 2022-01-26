import { extendTheme } from '@chakra-ui/react';
import * as components from './compoments';

export const theme = extendTheme({
  components: {
    ...components,
  },
});
