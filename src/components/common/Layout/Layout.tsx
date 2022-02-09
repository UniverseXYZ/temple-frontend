import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/common';

export const Layout: FC = () => (
  <>
    <Header />
    <Outlet />
  </>
);
