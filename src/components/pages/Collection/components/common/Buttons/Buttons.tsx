import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { IconButton } from '@/components/common';
import { Tooltip } from '@/components/ui';
import { StarIcon } from '@/components/icons';

import { Skeleton } from './Skeleton';

import cn from 'classnames';
import styles from './Buttons.module.sass';
import { useSettings } from '@/hooks';

interface Props {
  isLoading?: boolean;
  tokenAddress: string;
}

export const Buttons = (props: Props) => {
  //
  const { isLoading, tokenAddress } = props;
  const { isInWatchlist, toggleAddressinWatchlist } =
  useSettings();

  const active = isInWatchlist(tokenAddress);
  console.log(active)
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Box mr="20px">
            <a href="https://snapshot.org/#/universexyz.eth" target={"_"}>
              <Button>
                Vote
              </Button>
            </a>
          </Box>
          <Box>
            <Box>
              <Tooltip label="Add to Watchlist" variant="white">
                <IconButton
                  className={active ? styles.WatchlistActive : styles.Watchlist}
                  aria-label="Add to Watchlist"
                  icon={<StarIcon />}
                  onClick={() => toggleAddressinWatchlist(tokenAddress)}
                />
              </Tooltip>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
