import Head from 'next/head';
import { Layout } from '@/components/common';
//import { Box, Button } from '@chakra-ui/react';

const MyWatchlist = () => (
  <>
    <Head>
      <title>My page title</title>
    </Head>
    <h1>My Watchlist</h1>
  </>
);

MyWatchlist.Layout = Layout;

export default MyWatchlist;
