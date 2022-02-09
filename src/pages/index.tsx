import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/components/common';
import { Homepage, Watchlist } from '@/components/pages';

const Index = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="watchlist" element={<Watchlist />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export default Index;
