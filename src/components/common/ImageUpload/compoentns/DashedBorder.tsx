import React, { FC } from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

interface Props extends BoxProps {
  width?: number;
  height?: number;
  borderWidth?: number;
  borderDashrarray?: string;
  borderLinecap?: 'butt' | 'round' | 'square';
  className?: string;
}

export const DashedBorder: FC<Props> = (props) => {
  const {
    width = 100,
    height = 100,
    borderWidth = 2,
    borderLinecap = 'round',
    borderDashrarray = '2 5',
    ...restProps
  } = props;

  return (
    <Box {...restProps}>
      <Icon width={width} height={height} viewBox="0 0 100 100" fill="none">
        <rect
          x="1"
          y="1"
          width={width - borderWidth}
          height={height - borderWidth}
          rx="49"
          stroke="url(#gradient)"
          strokeWidth={borderWidth}
          strokeLinecap={borderLinecap}
          strokeDasharray={borderDashrarray}
        />
        <defs>
          <linearGradient
            id="gradient"
            x1="14.0365"
            y1="18.4819"
            x2="81.9549"
            y2="86.4002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BCEB00" />
            <stop offset="1" stopColor="#00EAEA" />
          </linearGradient>
        </defs>
      </Icon>
    </Box>
  );
};
