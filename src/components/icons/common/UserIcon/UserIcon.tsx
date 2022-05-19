import React from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

export const UserIcon = (props: BoxProps) => {
  //
  return (
    <Box {...props}>
      <Icon
        width="100%"
        height="100%"
        viewBox="0 0 20 21"
        fill="none"
        display="block"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99966 6.5C7.99966 5.11929 9.11895 4 10.4997 4C11.8804 4 12.9997 5.11929 12.9997 6.5C12.9997 7.88071 11.8804 9 10.4997 9C9.11895 9 7.99966 7.88071 7.99966 6.5ZM10.4997 2.5C8.29052 2.5 6.49966 4.29086 6.49966 6.5C6.49966 8.70914 8.29052 10.5 10.4997 10.5C12.7088 10.5 14.4997 8.70914 14.4997 6.5C14.4997 4.29086 12.7088 2.5 10.4997 2.5ZM10.4999 11.75C8.35458 11.75 6.75266 12.2185 5.56375 12.9282C4.37424 13.6383 3.64198 14.5636 3.19593 15.4081C2.78216 16.1916 2.91762 17.0089 3.38835 17.6C3.83917 18.1662 4.56891 18.5 5.34737 18.5H15.6524C16.4308 18.5 17.1606 18.1662 17.6114 17.6C18.0821 17.0089 18.2176 16.1916 17.8039 15.4082L17.8039 15.4081C17.3578 14.5636 16.6255 13.6383 15.436 12.9282C14.2471 12.2185 12.6452 11.75 10.4999 11.75ZM4.52231 16.1087C4.86069 15.4679 5.4148 14.764 6.33257 14.2162C7.25093 13.668 8.57718 13.25 10.4999 13.25C12.4226 13.25 13.7488 13.668 14.6672 14.2162C15.5849 14.764 16.1391 15.4679 16.4775 16.1087C16.5969 16.3349 16.5592 16.5134 16.438 16.6656C16.2968 16.8429 16.0158 17 15.6524 17H5.34737C4.98391 17 4.70289 16.8429 4.56175 16.6656C4.44051 16.5134 4.4028 16.3349 4.5223 16.1087L4.52231 16.1087Z"
          fill="black"
        />
      </Icon>
    </Box>
  );
};