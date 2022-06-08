import React, { useEffect, createContext } from 'react';
import { useLocalStorage } from 'react-use';

import { settings } from './settings';

const defaultSettings = settings;

export const SettingsContext: any = createContext(defaultSettings);

export const SettingsProvider = ({ children }: any) => {
  const [localStorageSettings, setLocalStorageSettings] = useLocalStorage(
    'settings',
    defaultSettings
  );

  useEffect(() => {
    //
    if (localStorageSettings) {
      console.log('value', localStorageSettings);
      const isSameVersion =
        localStorageSettings.version === defaultSettings.version;

      if (!isSameVersion) {
        //TODO: Save old user settings
        setLocalStorageSettings(defaultSettings);
      }

      return;
    }
    //
  }, []);

  const defaultContextValue = [localStorageSettings, setLocalStorageSettings];

  return (
    <SettingsContext.Provider value={defaultContextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
