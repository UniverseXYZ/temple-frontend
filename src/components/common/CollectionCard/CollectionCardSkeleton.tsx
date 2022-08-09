import React from 'react';
import { Box, Flex, HStack, Spacer, useColorMode } from '@chakra-ui/react';
import { Card } from '@/components/common';
import ContentLoader from 'react-content-loader';

import cn from 'classnames';
import styles from './NftCard.module.sass';

export const CollectionCardSkeleton = () => {
  //
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  //

  const Img = () => (
    <ContentLoader
      speed={2}
      width={255}
      height={255}
      viewBox="0 0 255 255"
      backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
      foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
    >
      <path d="M0 12C0 5.37258 5.37258 0 12 0H243C249.627 0 255 5.37258 255 12V255H0V12Z" />
    </ContentLoader>
  );

  const Title = () => (
    <ContentLoader
      speed={2}
      width={141}
      height={15}
      viewBox="0 0 141 15"
      backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
      foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
    >
      <rect width="141" height="15" rx="7.5" />
    </ContentLoader>
  );

  const Left = () => (
    <ContentLoader
      speed={2}
      width={84}
      height={40}
      viewBox="0 0 84 40"
      backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
      foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
    >
      <rect width="84" height="13" rx="6.5" />
      <rect y="25" width="55" height="15" rx="7.5" />
    </ContentLoader>
  );

  const Right = () => (
    <ContentLoader
      speed={2}
      width={84}
      height={40}
      viewBox="0 0 84 40"
      backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
      foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
    >
      <rect width="84" height="13" rx="6.5" />
      <rect x="29" y="25" width="55" height="15" rx="7.5" />
    </ContentLoader>
  );

  return (
    <Box>
      <Card>
        <Box>
          <Img />
        </Box>

        <Box>
          <Box padding="17px 14px">
            <Title />
          </Box>
          <Box
            width="calc(100% - 28px)"
            height="1px"
            bg={!isDark ? '#E5E5E5' : '#333333'}
            margin="0 14px"
          ></Box>
          <Box padding="16px 14px" mt="2.5px">
            <Flex>
              <Box>
                <Left />
              </Box>
              <Spacer />
              <Box>
                <Right />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
