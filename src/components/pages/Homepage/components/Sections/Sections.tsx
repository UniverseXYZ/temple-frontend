/* eslint-disable */

import React, { FC } from 'react';
import { Statistics } from '@/components/sections';
import { CuratedCollections } from '@/components/sections';
import { TopCollections } from '@/components/sections';
import { UserCollections } from '@/components/sections';
import { MyWatchlist } from '@/components/sections';

const Components: any = {
  statistics: Statistics,
  'curated-collections': CuratedCollections,
  'top-collections': TopCollections,
  'user-collections': UserCollections,
  'my-watchlist': MyWatchlist,
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
