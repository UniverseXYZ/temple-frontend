import React from 'react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '@/components/router';
// BrowserRouter  for development
// MemoryRouter for production

import { Layout } from '@/components/common';
import {
  Homepage,
  Watchlist,
  Collection,
  CuratedCollections,
  OwnedCollections,
  TopCollections,
} from '@/components/pages';

const Index = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/collections">
              <Route path=":slug" element={<Collection />} />
            </Route>
            <Route path="/owned-collections" element={<OwnedCollections />} />
            <Route
              path="/curated-collections"
              element={<CuratedCollections />}
            />
            <Route path="/top-collections" element={<TopCollections />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Index;
