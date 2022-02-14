import { ChakraProvider } from '@chakra-ui/react';
import { SettingsProvider } from '@/context';
import type { AppProps } from 'next/app';
import { theme } from '@/theme/theme';
import '@/sass/style.sass';
import 'swiper/css';

function App({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <ChakraProvider theme={theme}>
        <div suppressHydrationWarning>
          {typeof window === 'undefined' ? null : <Component {...pageProps} />}
        </div>
      </ChakraProvider>
    </SettingsProvider>
  );
}

export default App;
