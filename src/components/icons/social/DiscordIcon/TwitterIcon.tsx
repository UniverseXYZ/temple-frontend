import React from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

export const TwitterIcon = (props: BoxProps) => {
  //
  return (
    <Box {...props}>
      <Icon
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        display="block"
      >
        <path
          d="M19 4.66066C18.3381 4.94128 17.627 5.1309 16.8794 5.2166C17.6508 4.77503 18.2278 4.08003 18.503 3.2613C17.7783 3.67314 16.9851 3.96302 16.158 4.11836C15.6018 3.55017 14.8651 3.17357 14.0623 3.04702C13.2594 2.92047 12.4354 3.05105 11.7181 3.41849C11.0007 3.78594 10.4303 4.36968 10.0953 5.0791C9.76022 5.78852 9.67936 6.58391 9.86523 7.3418C8.39683 7.27126 6.96033 6.90611 5.64898 6.27003C4.33762 5.63395 3.18071 4.74117 2.25332 3.64963C1.93623 4.17297 1.7539 4.77973 1.7539 5.42594C1.75354 6.00767 1.90328 6.58049 2.18981 7.09358C2.47634 7.60667 2.89082 8.04416 3.39646 8.36724C2.81005 8.34938 2.23658 8.19778 1.72377 7.92506V7.97056C1.72371 8.78647 2.0187 9.57726 2.55868 10.2088C3.09865 10.8403 3.85036 11.2736 4.68625 11.4352C4.14226 11.5761 3.57192 11.5968 3.01832 11.4959C3.25416 12.1979 3.71355 12.8118 4.33219 13.2516C4.95082 13.6915 5.69772 13.9352 6.46833 13.9487C5.16018 14.9312 3.54461 15.4642 1.88153 15.4618C1.58693 15.4619 1.29258 15.4455 1 15.4125C2.68813 16.451 4.65322 17.0021 6.66018 17C13.454 17 17.168 11.6165 17.168 6.9474C17.168 6.79571 17.164 6.6425 17.1569 6.49081C17.8793 5.99097 18.5029 5.37201 18.9984 4.66293L19 4.66066Z"
          fill="black"
        />
      </Icon>
    </Box>
  );
};
