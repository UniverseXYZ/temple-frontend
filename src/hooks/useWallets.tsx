import { useContext } from 'react';
import { SettingsContext } from '@/context';
import { v4 as uuidv4 } from 'uuid';

interface IWallet {
  //id: string;
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

      const newWallet = {
        id: uuidv4(),
        ...wallet,
      };

      const newSettingsArray = settings;
      newSettingsArray.wallets.push(newWallet);
      newSettingsArray.selectedWallet = newWallet;
      setSettings(newSettingsArray);
      //
      resolve({ result: 'success', data: wallet });
    });

    return await promise;
  };

  const updateWallet = async (wallet: IWallet) => {
    const promise = new Promise((resolve, reject) => {
      //
      const [findedWallet, index] = getWallet(wallet.address);

      const newSettingsArray = settings;
      newSettingsArray.wallets.splice(index, 1, wallet);
      setSettings(newSettingsArray);

      resolve({ result: 'success', data: wallet });
    });

    return await promise;
  };

  const removeWallet = (address: string): void => {
    const newSettingsArray = settings;
    //newSettingsArray.wallets.push(wallet);
    setSettings(newSettingsArray);
  };

  const getWallet = (address: string) => {
    //
    const wallet: IWallet = settings.wallets.find(
      (wallet: IWallet) => wallet.address === address
    );

    const index: number = settings.wallets.findIndex(
      (wallet: IWallet) => wallet.address === address
    );

    return [wallet, index];
  };

  const validation = (wallet: IWallet) => {
    const [findedWallet] = getWallet(wallet.address);
    if (findedWallet === undefined) {
      return true;
    }
    return false;
  };

  const setSelectedWallet = () => {
    //
  };

  return {
    wallets: settings.wallets,
    selected: settings.selectedWallet,
    addWallet,
    updateWallet,
    removeWallet,
    setSelectedWallet,
  };
}

export { useWallets };
