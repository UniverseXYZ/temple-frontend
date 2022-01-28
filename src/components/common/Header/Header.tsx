import React, { FC } from 'react';
import Link from 'next/link';

import { HStack } from '@chakra-ui/react';

const routes = [
  {
    name: 'Front Page',
    path: '/',
  },
  {
    name: 'Watchlist',
    path: '/watchlist',
  },
  {
    name: 'Collections',
    path: '/collections',
  },
  {
    name: 'Search',
    path: '/search',
  },
];

const Header: FC = () => (
  <header>
    <nav>
      <HStack spacing="15px">
        {routes.map((route, index) => (
          <Link key={index} href={route.path}>
            <a>{route.name}</a>
          </Link>
        ))}
      </HStack>
    </nav>
  </header>
);

export default Header;
