import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { IconButton } from '@/components/common';
import { Tooltip } from '@/components/ui';
import { StarIcon } from '@/components/icons';

import { Skeleton } from './Skeleton';

import cn from 'classnames';
import styles from './Buttons.module.sass';

interface Props {
  isLoading?: boolean;
}

export const Buttons = (props: Props) => {
  //
  const { isLoading } = props;
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Box mr="20px">
            <Button>Vote</Button>
          </Box>
          <Box>
            <Box>
              <Tooltip label="Add to Watchlist" variant="white">
                <IconButton
                  className={styles.Watchlist}
                  aria-label="Add to Watchlist"
                  icon={<StarIcon />}
                />
              </Tooltip>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
