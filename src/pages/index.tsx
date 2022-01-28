import { Layout } from '@/components/common';
import { Container, Box, Heading, Button } from '@chakra-ui/react';

const FrontPage = () => (
  <div style={{ height: 10000 }}>
    <Container maxW="container.xl">
      <Heading mb={15}>Im a Heading</Heading>
      <Box layerStyle="whitebox" p={50} w={256}>
        <Button>Test</Button>
        <Button variant="outline">Test</Button>
      </Box>
    </Container>
  </div>
);

FrontPage.Layout = Layout;

export default FrontPage;
