import React from 'react';
import { Box } from '@chakra-ui/react';
import { IconButton } from '@/components/ui';
import { Tooltip } from '@/components/ui';
import { StarIcon } from '@/components/icons';

import cn from 'classnames';
import styles from './.module.sass';

export const WatchlistButton = () => {
  //
  return (
    <Box>
      <Tooltip label="Add to Watchlist" variant="white">
        <IconButton aria-label="Add to Watchlist" icon={<StarIcon />} />
      </Tooltip>
    </Box>
  );
};
