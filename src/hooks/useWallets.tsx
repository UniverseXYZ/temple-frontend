import { useContext } from 'react';
import { SettingsContext } from '@/context';

export interface IWallet {
  name: string;
  address: string;
  balance: string;
  image: string;
  isActive: boolean;
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
        ...wallet,
        isActive: true,
      };

      const newSettingsArray = settings;

      newSettingsArray.wallets.forEach((wallet: IWallet) => {
        wallet.isActive = false;
      });

      newSettingsArray.wallets.push(newWallet);

      newSettingsArray.activeWallet = newWallet;

      setSettings(newSettingsArray);
      //
      resolve({ result: 'success', data: wallet });
    });

    return await promise;
  };

  const updateWallet = async (wallet: IWallet) => {
    const promise = new Promise((resolve, reject) => {
      //
      const { wallet: findedWallet, index } = getWallet(wallet.address);

      const newSettingsArray = settings;
      newSettingsArray.wallets.splice(index, 1, wallet);

      if (findedWallet.isActive) {
        newSettingsArray.activeWallet = wallet;
      }

      setSettings(newSettingsArray);

      resolve({ result: 'success', data: wallet });
    });

    return await promise;
  };

  const removeWallet = (address: string): void => {
    const newSettingsArray = settings;
    newSettingsArray.wallets = newSettingsArray.wallets.filter(
      (wallet: IWallet) => wallet.address !== address
    );
    
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

    return { wallet, index };
  };

  const validation = (wallet: IWallet) => {
    const { wallet: findedWallet } = getWallet(wallet.address);

    if (findedWallet === undefined) {
      return true;
    }

    return false;
  };

  const setActiveWallet = (wallet: IWallet) => {
    const wallets = settings.wallets;
    const { index } = getWallet(wallet.address);

    wallets.forEach((wallet: IWallet) => {
      wallet.isActive = false;
    });

    wallets[index].isActive = true;

    const activeWallet = wallets[index];

    setSettings({
      ...settings,
      wallets,
      activeWallet: activeWallet,
    });
  };

  return {
    activeWallet: settings.activeWallet,
    wallets: settings.wallets,
    addWallet,
    updateWallet,
    removeWallet,
    setActiveWallet,
  };
}

export { useWallets };
