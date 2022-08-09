import React from 'react';
import { Box, Image, useColorMode } from '@chakra-ui/react';
import Blockies from 'react-blockies';

import cn from 'classnames';
import styles from './WalletAvatar.module.sass';

export const WalletAvatar = (props: any) => {
  //
  const { name, image, size = '40px' } = props;

  const Block = () => <Blockies seed={name} size={9} scale={4} />;
  const Avatar = () => <Image src={image} alt={name} />;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box className={cn(styles.Avatar, isDark && styles.Dark)} boxSize={size}>
      {image ? <Avatar /> : <Block />}
    </Box>
  );
};
