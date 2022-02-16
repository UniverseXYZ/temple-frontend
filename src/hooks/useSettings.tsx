import { useContext } from 'react';
import { SettingsContext } from '@/context';

interface ISection {
  id: number;
  visible: boolean;
}

// interface IContext {
//   sections: ISection[]
// }

function useSettings() {
  const settingsContext: any = useContext(SettingsContext);

  const [settings, setSettings] = settingsContext;

  const setSections = (sections: ISection[]): void => {
    const newSettingsArray = settings;
    newSettingsArray.sections = sections;
    setSettings(newSettingsArray);
  };

  const getSectionVisible = (id: string) => {
    const section = settings.sections.find((section: any) => section.id === id);
    return section?.visible;
  };

  return {
    settings: settings,
    sections: settings.sections,
    setSections,
    getSectionVisible,
  };
}

export { useSettings };
