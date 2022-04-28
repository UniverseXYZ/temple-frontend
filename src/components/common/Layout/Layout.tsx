import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/common';

export const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);
