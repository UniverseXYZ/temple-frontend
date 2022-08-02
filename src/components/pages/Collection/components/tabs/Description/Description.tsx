import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import cn from 'classnames';
import styles from './.module.sass';
// interface Props {
//   //
// }

export const Description = (props: any) => {
  //
  const {description} = props;
  return (
    <Box fontSize="18px" pt="40px">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
    </Box>
  );
};
