import React from 'react';
import { Box, LinkBox, LinkOverlay, Flex } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui';
import { CopyableText } from '@/components/common';
import { ExternalLink } from '@/components/icons';
import { truncateEthAddress } from '@/utils';

import cn from 'classnames';
import styles from './WalletAddress.module.sass';

interface Props {
  address: string;
}

export const WalletAddress = (props: Props) => {
  //
  const { address } = props;

  const tuncAddress = truncateEthAddress(address, 5, 4);
  const etherscanUrl = `https://etherscan.io/address/${address}`;
  //
  return (
    <Box className={styles.Wrapper}>
      <Flex align="center">
        <CopyableText value={address}>
          <Box className={styles.Address}>{tuncAddress}</Box>
        </CopyableText>

        <Tooltip label="Show on entherscan">
          <LinkBox className={styles.Link}>
            <LinkOverlay href={etherscanUrl} target="_blank">
              <ExternalLink className={styles.Icon} />
            </LinkOverlay>
          </LinkBox>
        </Tooltip>
      </Flex>
    </Box>
  );
};
