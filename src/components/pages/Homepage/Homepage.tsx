import React from 'react';
import { Box } from '@chakra-ui/react';

import { useSettings } from '@/hooks';

import Section from './components/Sections/Sections';

export const Homepage = () => {
  //
  const { sections } = useSettings();

  return (
    <Box style={{ height: 10000 }} pt="60px" className="Wrapper">
      {sections.map((section: any, index: number) =>
        section.visible ? Section(section, index) : null
      )}
    </Box>
  );
};
