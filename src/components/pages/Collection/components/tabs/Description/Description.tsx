import React from 'react';
import { Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown'

import cn from 'classnames';
import styles from './.module.sass';
// interface Props {
//   //
// }

export const Description = (props: any) => {
  //
  const { text } = props;
  return (
    <Box fontSize="18px" pt="40px" mb="15px">
      <ReactMarkdown>{text}</ReactMarkdown>
    </Box>
  );
};
