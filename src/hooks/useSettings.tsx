import { useState, useContext } from 'react';
import { SettingsContext } from '@/context';
import { writeStorage } from '@rehooks/local-storage';

function useSettings() {
  const settingsContext = useContext(SettingsContext);

  const setSectionVisible = (id: string, visible: boolean): void => {
    const settings = settingsContext;
    const index = settings.sections.findIndex((section) => section.id === id);
    settings.sections[index].visible = visible;
    writeStorage('settings', settings);
  };

  const getSectionVisible = (id: string) => {
    const settings = settingsContext;
    const section = settings.sections.find((section) => section.id === id);
    return section?.visible;
  };

  return {
    settings: settingsContext,
    sections: settingsContext.sections,
    setSectionVisible,
    getSectionVisible,
  };
}

export { useSettings };
