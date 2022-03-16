import React, { FC, useState, useRef } from 'react';
import { Box, useColorMode } from '@chakra-ui/react';

import { SearchIcon, CrossIcon } from '@/components/icons';
import { SearhList } from './components';

import cn from 'classnames';
import styles from './SearchInput.module.sass';

import initialData from '@/mocks/data';

export const SearchInput: FC = (props) => {
  //
  const {} = props;

  const [templeValue, setTempleValue] = useState('');
  const [googleValue, setGoogleValue] = useState('');

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const templeRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const googleRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClear = (input: string) => {
    //TODO: refactoring
    if (input === 'temple') {
      setTempleValue('');
      templeRef.current.focus();
    }

    if (input === 'google') {
      setGoogleValue('');
      googleRef.current.focus();
    }
  };

  return (
    <Box className={cn(styles.Wrapper, isDark && styles.Dark)}>
      <SearchIcon className={styles.SearchIcon} />
      <Box className={styles.Inputs}>
        <Box className={cn(styles.Field, styles.TempleField)}>
          <input
            ref={templeRef}
            name="temple"
            type="search"
            value={templeValue}
            onChange={(e) => setTempleValue(e.target.value)}
            placeholder="Search on Temple"
            autoComplete="off"
          />
          {templeValue.length > 0 && (
            <CrossIcon
              boxSize="12px"
              className={styles.CrossIcon}
              onClick={() => handleClear('temple')}
              tabIndex={-1}
            />
          )}
        </Box>

        <Box className={cn(styles.Field, styles.GoogleField)}>
          <input
            ref={googleRef}
            name="google"
            type="search"
            value={googleValue}
            onChange={(e) => setGoogleValue(e.target.value)}
            placeholder="or Google"
            autoComplete="off"
          />
          {googleValue.length > 0 && (
            <CrossIcon
              boxSize="12px"
              className={styles.CrossIcon}
              onClick={() => handleClear('google')}
              tabIndex={-1}
            />
          )}
        </Box>
      </Box>

      <SearhList collections={initialData.collections} />
    </Box>
  );
};
