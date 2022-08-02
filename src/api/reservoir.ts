import axios from 'axios';

export const GetCollection = async (slug: string) => {
  //
  const url = process.env.RESERVOIR_API_URL + "collection/v3";

  const params = {
    slug: slug,
    includeTopBid: true,
  };

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": process.env.RESERVOIR_API_KEY || ""
  }

  const { data } = await axios({
    method: 'GET',
    baseURL: '',
    url: url,
    params: params,
    headers: headers
  });

  return data;
};

export const GetDailyStats = async (address: string) => {
  //
  const url = process.env.RESERVOIR_API_URL + "collections/daily-volumes/v1";

  const params = {
    id: address,
    limit: 1000,
  };

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": process.env.RESERVOIR_API_KEY || ""
  }

  const { data } = await axios({
    method: 'GET',
    baseURL: '',
    url: url,
    params: params,
    headers: headers
  });

  return data;
};

export const GetUserNFTsByCollection = async (walletAddress: string, tokenAddress: string) => {
  //
  console.log(walletAddress, tokenAddress)
  const url = process.env.RESERVOIR_API_URL + `users/${walletAddress}/tokens/v2`;

  const params = {
    collection: tokenAddress,
    limit: 20,
  };

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": process.env.RESERVOIR_API_KEY || ""
  }

  const { data } = await axios({
    method: 'GET',
    baseURL: '',
    url: url,
    params: params,
    headers: headers
  });

  return data;
};