import React, { FC } from 'react';
import { Container, Button, HStack } from '@chakra-ui/react';

import { Card } from '@/components/common';
import { Select } from '@/components/ui';
import { useSettings } from '@/hooks';

import Section from './components/Sections/Sections';

export const Homepage: FC = () => {
  //
  const { sections } = useSettings();

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

            <Select
              options={[
                { label: 'Test', value: 'Test' },
                { label: 'Test 2', value: 'Test 2' },
              ]}
            />
          </HStack>
        </Card>
      </Container>

      {sections.map((section: any, index: number) =>
        section.visible ? Section(section, index) : null
      )}
    </div>
  );
};
