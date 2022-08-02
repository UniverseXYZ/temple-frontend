import { OwnedNfts, Description, Activity } from './components/tabs';

export const tabs = (props) => {
  return (
    [
      {
        id: 1,
        title: 'Owned NFTs',
        component: <OwnedNfts />,
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
        component: <Activity />,
      },
    ]
  )
}