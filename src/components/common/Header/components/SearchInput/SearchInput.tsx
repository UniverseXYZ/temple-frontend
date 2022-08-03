import React, { useState, useRef, useEffect } from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import { useClickAway } from 'react-use';

import { SearchIcon, CrossIcon } from '@/components/icons';
import { SearhList } from './components';

import cn from 'classnames';
import styles from './SearchInput.module.sass';

import initialData from '@/mocks/data';
import { SearchCollection } from '@/api/reservoir';

export const SearchInput = (props: any) => {
  //
  const {} = props;

  const [suggestions, setSuggestions] = useState([]);
  const [templeValue, setTempleValue] = useState('');
  const [googleValue, setGoogleValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const templeRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const googleRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    SearchCollection(templeValue).then(res => {
      setSuggestions(res.collections);
    })
  }, [templeValue])

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
    <Box ref={ref} className={cn(styles.Wrapper, isDark && styles.Dark)}>
      <SearchIcon className={styles.SearchIcon} />
      <Box className={styles.Inputs}>
        <Box
          className={cn(styles.Field, styles.TempleField)}
          onClick={() => setIsOpen(true)}
        >
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

      <SearhList isOpen={isOpen} collections={suggestions} />
    </Box>
  );
};
