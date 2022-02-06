import { Box, Icon } from '@chakra-ui/react';

export const Ethereum = (props: any) => (
  <Box boxSize="16px" {...props}>
    <Icon
      fill="none"
      viewBox="0 0 10 16"
      display="block"
      boxSize={props.boxSize ?? '16px'}
    >
      <g>
        <path
          d="M5.00732 11.8027V15.9998L10.0006 8.68205L5.00732 11.8027Z"
          fill="#2F3030"
        />
        <path
          d="M9.80906 8.32602L5.00732 1.52588e-05V6.05405L9.80906 8.32602Z"
          fill="#2F3030"
        />
        <path
          d="M5.00732 6.05235V11.2188L9.76993 8.3084L5.00732 6.05235Z"
          fill="#131313"
        />
        <path
          d="M0.206543 8.32602L5.00749 1.52588e-05V6.05405L0.206543 8.32602Z"
          fill="#828384"
        />
        <path
          d="M5.00649 6.05235V11.2188L0.230957 8.3084L5.00649 6.05235Z"
          fill="#343535"
        />
        <path
          d="M4.99297 11.8027V15.9998L0 8.68205L4.99297 11.8027Z"
          fill="#828384"
        />
      </g>
      <defs>
        <clipPath id="clip0_709_7316">
          <rect width="10" height="16" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  </Box>
);
