import React from 'react';
import { Box, Flex, HStack, Text, Icon } from '@chakra-ui/react';
import { Ethereum } from '@/components/icons';

import cn from 'classnames';
import styles from '../DropdownItem/DropdownItem.module.sass';

export const AllWalletsItem = (props: any) => {
  //
  const { onSelect } = props;

  return (
    <Box className={styles.Item} onClick={() => onSelect()}>
      <Flex align="center">
        <Box className={styles.Avatar} boxSize="36px">
          <AllWalletsIcon />
        </Box>

        <Box className={styles.Content}>
          <Text className={styles.Name}>All wallets</Text>
          <Box className={styles.Address}>3 wallets</Box>
        </Box>

        <Box className={cn(styles.Balance, styles.WithoutEdit)}>
          <HStack justify="end">
            <Box>
              <Ethereum />
            </Box>
            <Box className={styles.BalanceAmount}>0,24</Box>
          </HStack>
          <Box className={styles.BalanceText}>on balance</Box>
        </Box>
      </Flex>
    </Box>
  );
};

const AllWalletsIcon = () => (
  <Icon
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    display="block"
  >
    <circle
      cx="17"
      cy="7.00008"
      r="4.33333"
      fill="url(#paint0_linear_935_24185)"
    />
    <circle
      cx="17"
      cy="17.0001"
      r="4.33333"
      fill="url(#paint1_linear_935_24185)"
    />
    <circle
      cx="6.99999"
      cy="7.00008"
      r="4.33333"
      fill="url(#paint2_linear_935_24185)"
    />
    <circle
      cx="6.99999"
      cy="17.0001"
      r="4.33333"
      fill="url(#paint3_linear_935_24185)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_935_24185"
        x1="12.6667"
        y1="2.66675"
        x2="21.3333"
        y2="11.3334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#914FE6" />
        <stop offset="1" stopColor="#316CDF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_935_24185"
        x1="13.8195"
        y1="14.2128"
        x2="19.8259"
        y2="20.2191"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BCEB00" />
        <stop offset="1" stopColor="#00EAEA" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_935_24185"
        x1="2.66666"
        y1="2.66675"
        x2="11.3333"
        y2="11.3334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF7439" />
        <stop offset="1" stopColor="#FF39BC" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_935_24185"
        x1="2.66666"
        y1="12.6667"
        x2="11.3333"
        y2="21.3334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E64FBB" />
        <stop offset="1" stopColor="#B56CFF" />
      </linearGradient>
    </defs>
  </Icon>
);
