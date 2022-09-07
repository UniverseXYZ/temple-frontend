import React from 'react';
import { Box } from '@chakra-ui/react';
import { CollectionList } from '@/components/common';
import { useState } from 'react';
import { Listbox } from '@headlessui/react';

import cn from 'classnames';
import styles from './.module.sass';
import { ITopCollection } from '../../TopCollections';

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

export const Collections = (collections: any) => {
  //
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <>
      <CollectionList collections={collections} />
    </>
  );
};
