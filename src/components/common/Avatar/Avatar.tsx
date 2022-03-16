import React, { FC } from 'react';
import {
  Avatar as ChakraAvatar,
  AvatarBadge,
  AvatarProps,
  useStyleConfig,
} from '@chakra-ui/react';

import { Badge } from './components';

interface Props extends AvatarProps {
  image: string;
  name: string;
  badgeSize?: string | number;
}

const Avatar: FC<Props> = (props) => {
  const { image, variant, name, badgeSize = '19px', ...restProps } = props;

  const styles = useStyleConfig('Avatar', { variant });

  return (
    <ChakraAvatar
      src={image}
      name={name}
      showBorder
      bg={'none'}
      ignoreFallback={true}
      sx={styles}
      {...restProps}
    >
      <AvatarBadge border={0} bottom={0} right={0}>
        <Badge boxSize={badgeSize} />
      </AvatarBadge>
    </ChakraAvatar>
  );
};

export default Avatar;
