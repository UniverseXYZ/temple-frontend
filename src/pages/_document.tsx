import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { theme } from '@/theme/theme';

export default class Document extends NextDocument {
  //

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <meta
            httpEquiv="Content-Security-Policy"
            content={`script-src 'nonce-2726c7f26c'`}
          /> */}
        </Head>
        <body>
          <ColorModeScript
            //@ts-ignore
            //nonce={}
            initialColorMode={theme.config.initialColorMode}
          />

          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
