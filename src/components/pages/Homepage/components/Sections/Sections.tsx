/* eslint-disable */

import React from 'react';
import { Statistics } from '@/components/sections';
import { CuratedCollections } from '@/components/sections';
import { TopCollections } from '@/components/sections';
import { OwnedCollections } from '@/components/sections';
import { Watchlist } from '@/components/sections';

const Components: any = {
  statistics: Statistics,
  'curated-collections': CuratedCollections,
  'top-collections': TopCollections,
  'owned-collections': OwnedCollections,
  watchlist: Watchlist,
};

export default (block: any, index: number) => {
  if (typeof Components[block.id] !== 'undefined') {
    const Component = Components[block.id];
    return <Component {...block} key={index} />;
  }

  // return React.createElement(
  //   () => <div>The component {block.component} has not been created yet.</div>,
  //   { key: block._uid }
  // );
};
