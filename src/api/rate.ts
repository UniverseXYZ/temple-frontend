import axios from 'axios';

export const GetRates = async () => {
  //
  const url = `https://api.coingecko.com/api/v3/simple/price`;

  const params = {
    ids: 'ethereum',
    vs_currencies: 'usd',
    include_last_updated_at: true,
  };

  const { data } = await axios({
    method: 'GET',
    baseURL: '',
    url: url,
    params: params,
  });

  return data;
};
