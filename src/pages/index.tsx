import React from 'react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '@/components/router';
// BrowserRouter  for development
// MemoryRouter for production
import { usePoolingRates } from '@/hooks';

import { Layout } from '@/components/common';
import {
  Homepage,
  Watchlist,
  Collection,
  CuratedCollections,
  OwnedCollections,
  TopCollections,
  Search,
} from '@/components/pages';

const Index = () => {
  // Fetch rates from Coingecko
  usePoolingRates();

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
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Index;
