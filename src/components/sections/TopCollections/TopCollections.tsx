import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  HStack,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { ElasticSwitch, Select, Option } from '@/components/ui/';

import { Collections } from './components';
import { useReservoir } from '@/hooks';
import { StringLocale } from 'yup/lib/locale';
const items = [
  {
    title: 'Collections',
    value: 'collections',
  },
  // {
  //   title: 'Activity',
  //   value: 'activity',
  //   disabled: true,
  // },
  // {
  //   title: 'Test',
  //   value: 'test',
  // },
];

const options = [
  { name: 'Koala' },
  { name: 'Kangaroo' },
  { name: 'Platypus' },
  { name: 'Bald Eagle' },
  { name: 'Bison' },
  { name: 'Skunk' },
];

interface IVolume {
  "1day": number;
  "7days": number;
  "30days": number;
  "allTime": number;
}

interface IVolumeChange {
  "1day": number;
  "7days": number;
  "30days": number;
}

interface IFloorAsk {
  price: {
    amount: {
      native: number;
    }
  }
}

interface IFloorSale {
  "1day": number;
  "7days": number;
  "30days": number;
}

export interface ITopCollections {
  collections: ITopCollection;
}

export interface ITopCollection {
  id: StringLocale;
  slug: string;
  name: string;
  image: string;
  banner: string;
  discordUrl: string;
  externalUrl: string;
  twitterUsername: string;
  description: string;
  sampleImage: string[];
  tokenCount: number;
  onSaleCount: number;
  primaryContract: string;
  tokenSetId: string;
  royalties: any;
  lastBuy: any;
  floorAsk: IFloorAsk;
  topBid: any;
  rank: any;
  volume: IVolume;
  volumeChange: IVolumeChange;
  floorSale: IFloorSale;
  floorSaleChange: IFloorSale;
  collections: any;
}

export const TopCollections = () => {
  const [active, setAcitve] = useState('collections');
  const [collections, setCollection] = useState<ITopCollections>({collections: {} as ITopCollection});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = React.useState('allTimeVolume');

  const onSwitchChange = (value: any) => {
    setAcitve(value);
  };


  const { getTopCollection } = useReservoir();

  const handlePeriodChange = (value: any) => {
    setIsLoading(true);
    if(value != selectedPeriod) {
      setSelectedPeriod(value);
      getTopCollection(value).then((res: any) => {
        setCollection(res.collections);
        setIsLoading(false);
      });
    }
  };


  React.useEffect(() => {
    const fetchTopCollection = async () => {
      const data = await getTopCollection(selectedPeriod);
      if(data) {
        setCollection(data.collections);
        setIsLoading(false)
      }
    }

    if(isLoading) {
      fetchTopCollection()
    }

    
  }, [isLoading, getTopCollection, selectedPeriod])
  
  console.log(selectedPeriod)
  return (
    <Box as="section">
      <Container maxW="container.xl">
        <HStack mb="35px">
          <Heading as="h2" size="lg">
            Top collections
          </Heading>
          <Spacer />
          <HStack spacing="15px">
            <ElasticSwitch items={items} onChange={onSwitchChange} />
            <Box width="200px">
              <Select defaultSelectedKey="allTimeVolume" aria-labelledby="Sort by" selectedKey={selectedPeriod} onSelectionChange={(selected: string) => handlePeriodChange(selected)}>
                <Option key="1DayVolume">Last 24 hours</Option>
                <Option key="7DayVolume">Last 7 days</Option>
                <Option key="30DayVolume">Last 30 days</Option>
                <Option key="allTimeVolume">All Time</Option>
              </Select>
            </Box>
          </HStack>
        </HStack>

        {!isLoading && active === 'collections' && <Collections collections={collections} />}
        {active === 'activity' && 'Activity'}

        <Link to="/top-collections">
          <Button variant="outline" mt="22px" w="100%">
            Show all
          </Button>
        </Link>
      </Container>
    </Box>
  );
};
