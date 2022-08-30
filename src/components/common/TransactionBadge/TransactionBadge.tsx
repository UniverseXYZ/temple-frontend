import React from 'react';
import { Box, Flex, useMultiStyleConfig } from '@chakra-ui/react';

import {
  ListIcon,
  MintIcon,
  TransferIcon,
  SaleIcon,
  OffersIcon,
  BidsIcon,
  BurnsIcon,
  CancelIcon,
} from './components';

const STATUSES = {
  LIST: 'ask',
  MINT: 'mint',
  TRANSFER: 'transfer',
  SALE: 'sale',
  OFFERS: 'offers',
  BIDS: 'bid',
  BURNS: 'burns',
  CANCEL_LISTING: 'ask_cancel',
};

const STATUS_MAP = {
  [STATUSES.LIST]: {
    name: 'List',
    color: '#a2f2b9',
    icon: <ListIcon />,
  },
  [STATUSES.MINT]: {
    name: 'Mint',
    color: '#fff175',
    icon: <MintIcon />,
  },
  [STATUSES.TRANSFER]: {
    name: 'Transfer',
    color: '#bcdfff',
    icon: <TransferIcon />,
  },
  [STATUSES.SALE]: {
    name: 'Sale',
    color: '#f6bcff',
    icon: <SaleIcon />,
  },
  [STATUSES.OFFERS]: {
    name: 'Offers',
    color: '#cdc9ff',
    icon: <OffersIcon />,
  },
  [STATUSES.BIDS]: {
    name: 'Bids',
    color: '#b8f6ff',
    icon: <BidsIcon />,
  },
  [STATUSES.BURNS]: {
    name: 'Burns',
    color: '#ffccc5',
    icon: <BurnsIcon />,
  },
  [STATUSES.CANCEL_LISTING]: {
    name: 'Cancel listing',
    color: '#e6e6e6',
    icon: <CancelIcon />,
  },
};

type StatusList =
  | 'list'
  | 'mint'
  | 'transfer'
  | 'sale'
  | 'offers'
  | 'bids'
  | 'burns'
  | 'cancel_listing';

type SizeList = 'sm' | 'md' | 'lg' | 'xl';

interface TransactionBadgeProps {
  variant?: string;
  size?: SizeList;
  status: StatusList | string; // TODO: FIX type string
}

export const TransactionBadge = React.forwardRef<
  HTMLDivElement,
  TransactionBadgeProps
>((props, ref) => {
  //
  const { variant, size, status, ...rest } = props;

  const styles = useMultiStyleConfig('TransactionBadge', { variant, size });

  return (
    <Box
      ref={ref}
      __css={styles.wrapper}
      background={STATUS_MAP[status].color}
      {...rest}
    >
      <Flex align="center">
        <Box __css={styles.icon}>{STATUS_MAP[status].icon}</Box>
        <Box __css={styles.text}>{STATUS_MAP[status].name}</Box>
      </Flex>
    </Box>
  );
});
