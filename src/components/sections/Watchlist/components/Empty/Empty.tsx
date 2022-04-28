import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Card } from '@/components/common';

import cn from 'classnames';
import styles from './.module.sass';

export const Empty = (props) => {
  //
  const {} = props;
  return (
    <Card textAlign="center" p={'60px'}>
      <Box display="inline-block">
        <Icon />
      </Box>

      <Box mt="40px" mb="30px">
        {`You’re not watching any collections`}
      </Box>
      <Box>
        <Button>Explore collections</Button>
      </Box>
    </Card>
  );
};

const Icon = () => (
  <svg width="180" height="128" viewBox="0 0 180 128" fill="none">
    <rect
      x="0.5"
      y="0.5"
      width="179"
      height="127"
      rx="11.5"
      fill="white"
      stroke="#E7E6E9"
      strokeLinecap="round"
    />
    <path
      d="M0 12C0 5.37258 5.37258 0 12 0H168C174.627 0 180 5.37258 180 12V54H0V12Z"
      fill="#E7E6E9"
    />
    <circle cx="27" cy="27" r="11" fill="white" />
    <rect
      x="16.5"
      y="46.5"
      width="147"
      height="65"
      rx="5.5"
      fill="white"
      stroke="#E7E6E9"
      strokeLinecap="round"
    />
    <rect x="142" y="16" width="22" height="22" rx="6" fill="#D0CFD2" />
    <path
      d="M152.125 21.5838C152.505 20.8954 153.495 20.8954 153.875 21.5838L154.971 23.5664C155.114 23.8259 155.365 24.0084 155.657 24.0646L157.881 24.4939C158.653 24.643 158.959 25.5842 158.422 26.1587L156.875 27.8133C156.672 28.0299 156.576 28.3252 156.613 28.6194L156.892 30.8673C156.989 31.6479 156.188 32.2296 155.475 31.8962L153.424 30.9363C153.155 30.8106 152.845 30.8106 152.576 30.9363L150.525 31.8962C149.812 32.2296 149.011 31.6479 149.108 30.8673L149.387 28.6194C149.424 28.3252 149.328 28.0299 149.125 27.8133L147.578 26.1587C147.041 25.5842 147.347 24.643 148.119 24.4939L150.343 24.0646C150.635 24.0084 150.886 23.8259 151.029 23.5664L152.125 21.5838Z"
      fill="#7D7C7E"
    />
  </svg>
);
