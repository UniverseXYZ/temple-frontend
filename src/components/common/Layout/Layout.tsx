import React, { ReactNode, FC } from 'react';
import Head from 'next/head';

import { Header } from '@/components/common';
import Background from './Background';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <>
    <Head>
      <title>Test</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Background />
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
