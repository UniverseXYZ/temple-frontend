import React from 'react';
import { useSettings } from '@/hooks';

export const items = [
  {
    id: 'statistics',
    image: '/assets/images/icons/icon-settings-1.png',
    title: 'Statistics',
    description: 'General stats of your NFT collection',
  },
  {
    id: 'curated-collections',
    image: '/assets/images/icons/icon-settings-2.png',
    title: 'Curated collections',
    description: 'Universe community picks',
  },
  {
    id: 'top-collections',
    image: '/assets/images/icons/icon-settings-3.png',
    title: 'Top collections',
    description: 'Top collections all over the time',
  },
  {
    id: 'owned-collections',
    image: '/assets/images/icons/icon-settings-4.png',
    title: 'Owned collections',
    description: 'Collections user owns',
  },
  {
    id: 'watchlist',
    image: '/assets/images/icons/icon-settings-5.png',
    title: 'My watchlist',
    description: 'Collections I follow',
  },
];

export function useItems() {
  //
  const { sections } = useSettings();

  const sortedItems = [...items];

  sortedItems.forEach((item) => {
    // find item with same id in settings sections
    const finded = sections.find((section) => section.id === item.id);
    // add order field
    item.order = finded.order;
  });

  sortedItems.sort((a, b) => a.order - b.order);

  return [sortedItems];
}
