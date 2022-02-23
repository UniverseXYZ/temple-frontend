import { useContext } from 'react';
import { SettingsContext } from '@/context';

interface IWallet {
  name: string;
  address: string;
  image: string;
}

function useWallets() {
  const settingsContext: any = useContext(SettingsContext);

  const [settings, setSettings] = settingsContext;

  const addWallet = async (wallet: IWallet) => {
    const promise = new Promise((resolve, reject) => {
      //
      // TODO: Refactoring validation
      const validationResult = validation(wallet);

      if (!validationResult) {
        reject({
          field: 'Address',
          messege: 'Wallet address is already exist',
        });
      }

      const newSettingsArray = settings;
      newSettingsArray.wallets.push(wallet);
      setSettings(newSettingsArray);
      //
      resolve({ result: 'success', data: wallet });
    });

    return await promise;
  };

  const removeWallet = (address: string): void => {
    const newSettingsArray = settings;
    //newSettingsArray.wallets.push(wallet);
    setSettings(newSettingsArray);
  };

  const getWallet = (address: string): IWallet => {
    //
    const result: IWallet = settings.wallets.find(
      (wallet: IWallet) => wallet.address === address
    );
    return result;
  };

  const validation = (wallet: IWallet) => {
    const findedWallet = getWallet(wallet.address);
    if (findedWallet === undefined) {
      return true;
    }
    return false;
  };

  return {
    wallets: settings.wallets,
    getWallet,
    addWallet,
    removeWallet,
    //remove,
  };
}

export { useWallets };
