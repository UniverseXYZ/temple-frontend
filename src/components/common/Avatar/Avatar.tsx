import React, { FC } from 'react';
import {
  Avatar as ChakraAvatar,
  AvatarBadge,
  AvatarProps,
} from '@chakra-ui/react';

import { Badge } from './components';

interface Props extends AvatarProps {
  image: string;
  name: string;
}

const Avatar: FC<Props> = (props) => {
  const { image, name, ...restProps } = props;

  return (
    <ChakraAvatar
      src={image}
      name={name}
      showBorder
      bg={'none'}
      ignoreFallback={true}
      borderColor="rgba(0 0 0 / 10%)"
      {...restProps}
    >
      <AvatarBadge border={0} bottom={'4px'} right={'4px'}>
        <Badge boxSize="19px" />
      </AvatarBadge>
    </ChakraAvatar>
  );
};

export default Avatar;
