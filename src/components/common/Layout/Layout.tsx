import React from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/common';

export const Layout = () => (
  <>
    <Header />
    <Box pt="60px" className="Wrapper">
      <Outlet />
    </Box>
  </>
);
