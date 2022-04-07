import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/components/common';
import { Homepage, Watchlist, Collection } from '@/components/pages';

const Index = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/collections">
            <Route path=":slug" element={<Collection />} />
          </Route>
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export default Index;
