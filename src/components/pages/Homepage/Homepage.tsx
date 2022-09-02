import React from 'react';
import { Link } from 'react-router-dom';
import {
  VStack,
  Box,
  Container,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import { PageWithGradient } from '@/components/layouts';

import { useSettings } from '@/hooks';

import Section from './components/Section/Section';

export const Homepage = () => {
  //
  const { sections } = useSettings();

  return (
    <PageWithGradient>
      <VStack spacing="80px" align="stretch">
        {sections.map((section: any, index: number) =>
          section.visible ? Section(section, index) : null
        )}
      </VStack>
    </PageWithGradient>
  );
};
