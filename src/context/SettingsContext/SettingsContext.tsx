import React, { createContext } from 'react';
import { useLocalStorage } from '@rehooks/local-storage';

import { settings } from './settings';

const defaultSettings = settings;
//const defaultContextValue = [defaultSettings, () => {}, () => {}];

export const SettingsContext = createContext(defaultSettings);

export const SettingsProvider = ({ children }) => {
  const [ctxValue] = useLocalStorage('settings', defaultSettings);

  return (
    <SettingsContext.Provider value={ctxValue}>
      {children}
    </SettingsContext.Provider>
  );
};
