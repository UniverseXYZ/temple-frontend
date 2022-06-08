import React, { useEffect } from 'react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
// BrowserRouter  for development
// MemoryRouter for production

import { useMutation } from 'react-query';
import { useLocalStorage } from 'react-use';
import { GenerateUserId } from '@/api';
import { usePoolingRates } from '@/hooks';

import { ScrollToTop } from '@/components/router';
import { Layout } from '@/components/common';
import {
  Homepage,
  Watchlist,
  Collection,
  CuratedCollections,
  OwnedCollections,
  TopCollections,
  Search,
  Test,
} from '@/components/pages';

const Index = () => {
  //
  const [userId, setUserId] = useLocalStorage('user_id');
  const [token, setToken] = useLocalStorage('token');

  useEffect(() => {
    if (!userId) {
      const generate = async () => {
        const { userId, token } = await generateUserId.mutateAsync();
        setUserId(userId);
        setToken(token);
      };
      generate();
    }
  }, []);

  const generateUserId = useMutation(() => {
    return GenerateUserId();
  });

  // Fetch rates from Coingecko
  usePoolingRates();

  //
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
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Index;
