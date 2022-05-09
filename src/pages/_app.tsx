import { ChakraProvider } from '@chakra-ui/react';
import { SettingsProvider } from '@/context';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import { theme } from '@/theme/theme';
import '@/sass/style.sass';
import 'swiper/css';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  //
  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <ChakraProvider theme={theme}>
          <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : (
              <Component {...pageProps} />
            )}
          </div>
        </ChakraProvider>
      </SettingsProvider>
    </QueryClientProvider>
  );
}

export default App;
