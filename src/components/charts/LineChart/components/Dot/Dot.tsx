import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';

import cn from 'classnames';
import styles from './Dot.module.sass';

export const Dot = (props: any) => {
  //
  const {} = props;

  //console.log('test', props);

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <g>
      <foreignObject width={50} height={50} x={props.cx - 25} y={props.cy - 25}>
        <Box
          className={cn(styles.Dot, isDark && styles.Dark)}
          backgroundColor={props.fill}
        />
      </foreignObject>
    </g>
  );
};
