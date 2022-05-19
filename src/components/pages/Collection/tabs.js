import { OwnedNfts } from './components/tabs';

export const tabs = [
  {
    id: 1,
    title: 'Owned NFTs',
    component: <OwnedNfts />,
    ticker: 10,
  },
  {
    id: 2,
    title: 'Description',
    component: 'Test 2',
  },
  {
    id: 3,
    title: 'Collection activity',
    component: 'Test 3',
  },
];
