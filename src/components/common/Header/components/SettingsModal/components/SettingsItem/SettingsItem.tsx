import React, { FC, useState } from 'react';
import { Box, Image, Flex, Text, Switch, useColorMode } from '@chakra-ui/react';
import { Handle } from '@/components/icons';
import { useSettings } from '@/hooks';

export interface ISettingsItem {
  id: string;
  visible: boolean;
  image: string;
  title: string;
  description: string;
}

interface Props extends ISettingsItem {
  key: number;
}

import cn from 'classnames';
import styles from './SettingsItem.module.sass';

export const SettingsItem: FC<Props> = (props) => {
  //
  const { id, visible, image, title, description } = props;

  //const [checked, setChecked] = useState(visible);

  const { getSectionVisible, setSectionVisible } = useSettings();

  const { colorMode } = useColorMode();

  const onVisibleChange = (event) => {
    const id = event.target.value;
    const visible = event.target.checked;
    setSectionVisible(id, visible);
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
