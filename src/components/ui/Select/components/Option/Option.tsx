import React from 'react';
import { Box } from '@chakra-ui/react';
import { useOption } from '@react-aria/listbox';

import cn from 'classnames';
import styles from '../../Select.module.sass';

export const Option = ({ item, state }: any) => {
  const ref = React.useRef(null);
  const { optionProps, isSelected, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  console.log('item', item);

  return (
    <li
      className={cn(styles.Option, isSelected && styles.isSelected)}
      ref={ref}
      {...optionProps}
    >
      {item.rendered}

      {isSelected && <Icon />}
    </li>
  );
};

const Icon = () => (
  <Box className={styles.Icon}>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M1.7998 6.30001L4.5998 9.00001L10.1998 3.60001"
        stroke="url(#paint0_linear_3047_36186)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3047_36186"
          x1="2.91722"
          y1="4.56329"
          x2="6.3219"
          y2="9.85945"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCEB00" />
          <stop offset="1" stopColor="#00EAEA" />
        </linearGradient>
      </defs>
    </svg>
  </Box>
);
