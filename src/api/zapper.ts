import axios from 'axios';

export const GetNetworth = async (wallet: string) => {
  const url = "https://api.zapper.fi/v2/nft/balances/net-worth"
  const params = {
    addresses: [wallet.toLowerCase()]
  };
  const { data } = await axios({
    method: 'GET',
    baseURL: '',
    url: url,
    params: params,
    auth: {
        username: process.env.ZAPPER_KEY || "",
        password: ""
    }
  });

  return data;
};
