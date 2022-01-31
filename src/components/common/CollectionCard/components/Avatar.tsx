import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const Avatar: React.FC = (props) => (
  <Box {...props}>
    <Image
      borderRadius="full"
      src="/mocks/collection-card-avatar.png"
      alt="Avatar"
    />
  </Box>
);

export default Avatar;
