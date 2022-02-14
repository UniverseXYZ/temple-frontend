import React, { FC, useContext } from 'react';
import { Container, Button, HStack } from '@chakra-ui/react';

import { Card } from '@/components/common';
import { SettingsContext } from '@/context';
import { useLocalStorage } from '@rehooks/local-storage';

import Section from './components/Sections/Sections';

export const Homepage: FC = () => {
  const settings = useContext(SettingsContext);
  //console.log(settings);

  //const [settings] = useLocalStorage('settings');
  //console.log('sections', sections);

  return (
    <div style={{ height: 10000 }}>
      <Container maxW="1142px" mb="100px" mt="100px">
        <Card variant="whitebox" p={50} mb={10}>
          <HStack spacing={10}>
            <Button
            //onClick={() => setSectionVisible('curated-collections', false)}
            >
              Test
            </Button>
            <Button variant="outline">Test</Button>
            <Button disabled>Test</Button>
            <Button variant="outline" disabled>
              Test
            </Button>
          </HStack>
        </Card>
      </Container>

      {/* <SettingsContext.Consumer>
        {(value) =>
          value.sections.map((section) =>
            section.visible ? Section(section) : null
          )
        }
      </SettingsContext.Consumer> */}

      {settings.sections.map((section) =>
        section.visible ? Section(section) : null
      )}
    </div>
  );
};
