import { useContext } from 'react';
import { SettingsContext } from '@/context';
import { Watchlist } from '@/components/sections';
import { watch } from 'fs';

interface ISection {
  id: number;
  visible: boolean;
}

function useSettings() {
  const settingsContext: any = useContext(SettingsContext);

  
  const [settings, setSettings] = settingsContext;

  const setSections = (sections: ISection[]): void => {
    const newSettingsArray = settings;
    newSettingsArray.sections = sections;
    setSettings(newSettingsArray);
  };

  const toggleAddressinWatchlist = (address: string): void => {
    const newSettingsArray = settings;
    if(isInWatchlist(address)){
      newSettingsArray.watchlist = newSettingsArray.watchlist.filter(
        (a: string) => a !== address
      );
    } else {
      newSettingsArray.watchlist.push(address)
    }
    setSettings(newSettingsArray);
  };

  const isInWatchlist = (address: string): boolean => {
    if (!settings.watchlist) return false;
    return (settings.watchlist.find((a: string) => a == address) !== undefined)
  }

  const getSectionVisible = (id: string) => {
    const section = settings.sections.find((section: any) => section.id === id);
    return section?.visible;
  };

  return {
    settings: settings,
    watchlist: settings.watchlist,
    toggleAddressinWatchlist,
    isInWatchlist,
    sections: settings.sections,
    setSections,
    getSectionVisible,
  };
}

export { useSettings };
