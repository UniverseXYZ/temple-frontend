import { OwnedNfts, Description, Activity } from './components/tabs';

export const tabs = (tokenCount, userNFTs, description) => {
  return [
  {
    id: 1,
    title: 'Owned NFTs',
    component: <OwnedNfts userNFTs={userNFTs}/>,
    ticker: `${tokenCount}`,
  },
  {
    id: 2,
    title: 'Description',
    component: <Description text={description}/>,
  },
  {
    id: 3,
    title: 'Collection activity',
    component: <Activity />,
  },
]};
