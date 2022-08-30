import { OwnedNfts, Description, Activity } from './components/tabs';

export const tabs = (tokenCount, userNFTs, description) => {
  const tabsToReturn = [];
  if(tokenCount > 0){
    tabsToReturn.push(
      {
        id: 1,
        title: 'Owned NFTs',
        component: <OwnedNfts userNFTs={userNFTs}/>,
        ticker: `${tokenCount}`,
      }
    )
  }
  if(description) {
    tabsToReturn.push(
      {
        id: 2,
        title: 'Description',
        component: <Description text={description}/>,
      }
    )
  }
  tabsToReturn.push(
    {
      id: 3,
      title: 'Collection activity',
      component: <Activity />,
    }  
  )
  return tabsToReturn;
};
