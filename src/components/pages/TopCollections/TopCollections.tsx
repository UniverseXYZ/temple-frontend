import React from 'react';
import { Box, Container, Heading, Flex, Spacer } from '@chakra-ui/react';
import { Tabs, Select, Option } from '@/components/ui';
import { PageWithGradient } from '@/components/layouts';
import { useReservoir } from '@/hooks';

import { Collections, Activity } from './components';



const options = [
  {
    title: 'Last 24 hours',
    value: 'last-24-hours',
  },
  {
    title: 'Last 7 days',
    value: 'last-7-days',
  },
  {
    title: 'Last 30 days',
    value: 'last-30-days',
  },
  {
    title: 'Last 90 days',
    value: 'last-90-days',
  },
  {
    title: 'All time',
    value: 'all-time',
  },
];

export const TopCollections = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [topCollections, setTopCollections] = React.useState([]);
  const [selectedPeriod, setSelectedPeriod] = React.useState('allTimeVolume');
  
  const { getTopCollection } = useReservoir();

  const tabs = [
    {
      id: 'collections',
      title: 'Collections',
      ticker: `${topCollections.length}`,
      component: <Collections collections={topCollections} />,
    },
    // {
    //   id: 'activity',
    //   title: 'Activity',
    //   component: <Activity />,
    // },
  ];
  
  const handlePeriodChange = (value: any) => {
    setIsLoading(true);
    if(value != selectedPeriod) {
      setSelectedPeriod(value);
      getTopCollection(value).then((res: any) => {
        setTopCollections(res.collections);
        setIsLoading(false);
      });
    }
  };


  React.useEffect(() => {
    const fetchTopCollection = async () => {
      const data = await getTopCollection(selectedPeriod);
      if(data) {
        setTopCollections(data.collections);
        setIsLoading(false)
      }
    }

    if(isLoading) {
      fetchTopCollection()
    }

    
  }, [isLoading, getTopCollection, selectedPeriod])


  return (
    <PageWithGradient>
      <Container maxW="1142px">
        <Flex mb="40px" align="center">
          <Heading as="h2" variant="h4">
            Top Collections
          </Heading>
          <Spacer />
          <Box w="225px">
            <Select
              placeholder="Sort by"
              aria-labelledby="Sort by"
              defaultSelectedKey="allTimeVolume"
              selectedKey={selectedPeriod}
              onSelectionChange={(selected: string) => handlePeriodChange(selected)}
            >
              <Option key="1DayVolume">Last 24 hours</Option>
              <Option key="7DayVolume">Last 7 days</Option>
              <Option key="30DayVolume">Last 30 days</Option>
              <Option key="allTimeVolume">All Time</Option>
            </Select>
          </Box>
        </Flex>

        {!isLoading && <Tabs items={tabs} />}
      </Container>
    </PageWithGradient>
  );
};
