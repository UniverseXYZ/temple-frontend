import React, { createContext } from 'react';
import { useLocalStorage } from 'react-use';

import { settings } from './settings';

const defaultSettings = settings;

export const SettingsContext: any = createContext(defaultSettings);

export const SettingsProvider = ({ children }: any) => {
  const [value, setValue] = useLocalStorage('settings', defaultSettings);

  const defaultContextValue = [value, setValue];

  return (
    <SettingsContext.Provider value={defaultContextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
