//! UPDATE VERSION IF MAKE ANY CHANGES

export const settings = {
  sections: [
    {
      id: 'statistics',
      visible: false,
      order: 1,
    },
    {
      id: 'curated-collections',
      visible: true,
      order: 2,
    },
    {
      id: 'top-collections',
      visible: true,
      order: 3,
    },
    {
      id: 'owned-collections',
      visible: true,
      order: 4,
    },
    {
      id: 'watchlist',
      visible: true,
      order: 5,
    },
  ],
  watchlist: [],
  wallets: [],
  activeWallet: null,
  baseCurrency: 'ETH',
  rates: null,
  privacyMode: false,
  version: '1.0.0',
};
