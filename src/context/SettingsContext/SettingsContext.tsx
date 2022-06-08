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

  console.log('value', localStorageSettings);

  useEffect(() => {
    //
    if (localStorageSettings) {
      const isSameVersion =
        localStorageSettings.version === defaultSettings.version;
      console.log('isSameVersion', isSameVersion);

      if (!isSameVersion) {
        //TODO: Save old user settings
        console.log('Update localStorage settings');
        setLocalStorageSettings(defaultSettings);
      }

      return;
    }
    //
  }, [localStorageSettings]);

  const defaultContextValue = [localStorageSettings, setLocalStorageSettings];

  return (
    <SettingsContext.Provider value={defaultContextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
