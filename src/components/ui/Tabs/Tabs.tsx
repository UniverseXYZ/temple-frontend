import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';

import { Tab } from '@headlessui/react';

import cn from 'classnames';
import styles from './Tabs.module.sass';

interface TabsProps {
  items: Tab[];
}

interface Tab {
  id: string | number;
  title: string;
  ticker?: string | number;
  disabled?: boolean;
  component: React.ReactNode;
}

export const Tabs = (props: TabsProps) => {
  //
  const { items = [] } = props;

  const { colorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <Tab.Group>
      <Tab.List className={cn(styles.Tablist, isDark && styles.Dark)}>
        {items.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              cn(
                styles.Tab,
                selected && styles['Tab--Selected'],
                tab.disabled && styles['Tab--Disabled']
              )
            }
          >
            <Box className={styles.Title}>{tab.title}</Box>
            {tab.ticker && <Box className={styles.Ticker}>{tab.ticker}</Box>}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {items.map((item, index) => (
          <Tab.Panel key={index}>{item.component}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
