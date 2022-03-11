import React, { FC } from 'react';
import { Box, Image } from '@chakra-ui/react';
import Blockies from 'react-blockies';

import styles from './WalletAvatar.module.sass';

export const WalletAvatar = (props: any) => {
  //
  const { name, image, size = '40px' } = props;

  const Block = () => <Blockies seed={name} size={9} scale={4} />;
  const Avatar = () => <Image src={image} alt={name} />;

  return (
    <Box className={styles.Avatar} boxSize={size}>
      {image ? <Avatar /> : <Block />}
    </Box>
  );
};
