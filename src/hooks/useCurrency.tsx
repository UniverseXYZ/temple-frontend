import { useContext } from 'react';
import { SettingsContext, TCurrencies } from '@/context';

function useCurrency() {
  const settingsContext: any = useContext(SettingsContext);

  const [settings, setSettings] = settingsContext;

  const setCurrency = (currency: TCurrencies) => {
    const newSettingsArray = settings;
    newSettingsArray.baseCurrency = currency;
    setSettings(newSettingsArray);
  };

  const setRates = (rates: any) => {
    const newSettingsArray = settings;
    newSettingsArray.rates = rates;
    setSettings(newSettingsArray);
  };

  return {
    selectedCurrency: settings.baseCurrency,
    rates: settings.rates,
    setCurrency: setCurrency,
    setRates: setRates,
  };
}

export { useCurrency };
