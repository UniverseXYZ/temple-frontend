import { OwnedNfts, Description, Activity } from './components/tabs';

export const tabs = (props) => {
  return (
    [
      {
        id: 1,
        title: 'Owned NFTs',
        component: <OwnedNfts userNFTs={props.userNFTs}/>,
        ticker: 10,
      },
      {
        id: 2,
        title: 'Description',
        component: <Description description={props.description} />,
      },
      {
        id: 3,
        title: 'Collection activity',
        component: <Activity collectionActivity={props.collectionActivity} />,
      },
    ]
  )
}