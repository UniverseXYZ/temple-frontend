// import React from 'react';
// import { Box, useColorMode, Flex, Spacer } from '@chakra-ui/react';
// import { Card } from '@/components/common';
// import ContentLoader from 'react-content-loader';

// import cn from 'classnames';
import styles from './Skeleton.module.sass';

// export const Skeleton = () => {
//   //
//   const { colorMode } = useColorMode();
//   const isDark = colorMode === 'dark';
//   //
//   const Img = () => (
//     <ContentLoader
//       speed={2}
//       width={255}
//       height={255}
//       viewBox="0 0 255 255"
//       backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
//       foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
//     >
//       <path d="M0 12C0 5.37258 5.37258 0 12 0H243C249.627 0 255 5.37258 255 12V255H0V12Z" />
//     </ContentLoader>
//   );

//   const Title = () => (
//     <ContentLoader
//       speed={2}
//       width={141}
//       height={15}
//       viewBox="0 0 141 15"
//       backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
//       foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
//     >
//       <rect width="141" height="15" rx="7.5" />
//     </ContentLoader>
//   );

//   const Left = () => (
//     <ContentLoader
//       speed={2}
//       width={84}
//       height={40}
//       viewBox="0 0 84 40"
//       backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
//       foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
//     >
//       <rect width="84" height="13" rx="6.5" />
//       <rect y="25" width="55" height="15" rx="7.5" />
//     </ContentLoader>
//   );

//   const Right = () => (
//     <ContentLoader
//       speed={2}
//       width={84}
//       height={40}
//       viewBox="0 0 84 40"
//       backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
//       foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
//     >
//       <rect width="84" height="13" rx="6.5" />
//       <rect x="29" y="25" width="55" height="15" rx="7.5" />
//     </ContentLoader>
//   );

//   return (
//     <Box className={cn(styles.Wrapper, isDark && styles.Dark)}>
//     {[...Array(4)].map((_, index) => (
//     <Card key={index}>
//       <Box>
//         <Img />
//       </Box>

//       <Box>
//         <Box padding="17px 14px">
//           <Title />
//         </Box>
//         <Box
//           width="calc(100% - 28px)"
//           height="1px"
//           bg={!isDark ? '#E5E5E5' : '#333333'}
//           margin="0 14px"
//         ></Box>
//         <Box padding="16px 14px" mt="2.5px">
//           <Flex>
//             <Box>
//               <Left />
//             </Box>
//             <Spacer />
//             <Box>
//               <Right />
//             </Box>
//           </Flex>
//         </Box>
//       </Box>
//     </Card>
//     ))}
//   </Box>
//   );
// };

import React from 'react';
import {
  //Link,
  LinkBox,
  LinkOverlay,
  Box,
  Image,
  Flex,
  Spacer,
  HStack,
  useColorMode,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import {
  Card,
  Avatar,
  BundleTag,
  CurrencyExchanger,
} from '@/components/common';

import cn from 'classnames';
import ContentLoader from 'react-content-loader';


interface Props {
  showAuthor?: boolean;
  showText?: boolean;
  showFooter?: boolean;
  collection: any;
  ownership: any;
}


export const Skeleton = (props: Props) => {
  const showFooter = props.showFooter ?? true;
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <>
      <LinkBox className={cn(styles.Wrapper, isDark && styles.Dark)}>
      {[...Array(4)].map((_, index) => (
          <Card
            key={index}
            className={cn(
              styles.Card,
              colorMode === 'dark' && styles.Dark,
            )}
            hover
          >
            <Box className={styles.Image}>
              <Image
                src={"/mocks/collection-card-image.png"}
                alt="Collection Background"
              />
            </Box>

            <Box className={styles.Avatar}>
              <Avatar
                image='/mocks/collection-card-image.png'
                name={
                    `${<ContentLoader
                        speed={2}
                        width={141}
                        height={15}
                        viewBox="0 0 141 15"
                        backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
                        foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
                    >
                        <rect width="141" height="15" rx="7.5" />
                    </ContentLoader>}`
                }
                boxSize="68px"
              />
            </Box>

            <Box className={styles.Content}>
              <Title>
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
              </Title>

              {showFooter && <Footer isDark={isDark} />}
            </Box>
          </Card>
      ))}
      </LinkBox>
    </>
  );
};

const Title = ({ children }: any) => (
  <Box className={styles.Title}>{children}</Box>
);

const Author = ({ children }: any) => (
  <Box className={styles.Author}>
    <span>by</span>
    <a href="#/author">{children}</a>
  </Box>
);

const Text = ({ children }: any) => (
  <Box className={styles.Text}>{children}</Box>
);

const Footer = (isDark: any) => (
  <>
    <Box className={styles.Footer}>
      <Flex>
        <Box textAlign="left">
          <Box fontSize={12} color="grey" mb={'8px'}>
            Floor price
          </Box>

          <Box fontWeight={600} fontSize={14}>
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
          </Box>
        </Box>
        <Spacer />
        <Box>
          <Box fontSize={12} color="grey" mb={'8px'} textAlign="right">
            Volume traded
          </Box>

          <Flex fontWeight={600} fontSize={14} justify="end">
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
          </Flex>
        </Box>
      </Flex>
    </Box>
  </>
);

Skeleton.defaultProps = {
  showAuthor: false,
  showText: false,
  showFooter: true,
};


