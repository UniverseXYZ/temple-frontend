/* eslint-disable */

import React, { FC } from 'react';
import { Statistics } from '@/components/sections';
import { CuratedCollections } from '@/components/sections';
import { TopCollections } from '@/components/sections';
import { UserCollections } from '@/components/sections';
import { MyWatchlist } from '@/components/sections';

const Components = {
  statistics: Statistics,
  'curated-collections': CuratedCollections,
  'top-collections': TopCollections,
  'user-collections': UserCollections,
  'my-watchlist': MyWatchlist,
};

export default (block) => {
  if (typeof Components[block.id] !== 'undefined') {
    return React.createElement(Components[block.id], {
      key: block._uid,
      block: block,
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
