import React, { FC } from 'react';
import { Box, Image, Flex, Text, Switch, useColorMode } from '@chakra-ui/react';
import { Handle } from '@/components/icons';
import { useSettings } from '@/hooks';

export interface ISettingsItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface Props extends ISettingsItem {
  key: number;
  onChange(id: string, visible: boolean): void;
}

import cn from 'classnames';
import styles from './SettingsItem.module.sass';

export const SettingsItem: FC<Props> = (props) => {
  //
  const { id, image, title, description, onChange } = props;

  const { getSectionVisible } = useSettings();

  const { colorMode } = useColorMode();

  const onVisibleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.value;
    const visible = event.target.checked;
    onChange(id, visible);
  };

  return (
    <Box className={cn(styles.Item, colorMode === 'dark' && styles.Dark)}>
      <Flex align="center">
        <Handle className={styles.Handle} />
        <Image className={styles.Image} src={image} alt={title} />
        <Box flex="1">
          <Text className={styles.Title}>{title}</Text>
          <Text className={styles.Description}>{description}</Text>
        </Box>
        <Switch
          defaultChecked={getSectionVisible(id)}
          onChange={onVisibleChange}
          value={id}
        />
      </Flex>
    </Box>
  );
};
