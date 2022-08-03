import axios from 'axios';
import { ethers } from "ethers";

export const GetCollection = async (slug: string) => {
  //
  const url = process.env.RESERVOIR_API_URL + "collection/v3";

  const isValidAddress = ethers.utils.isAddress(slug);

  const params = isValidAddress ? 
  {
    id: slug,
    includeTopBid: true,
  } :
  {
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

export const SearchCollection = async (filter: string) => {
  //
  const url = process.env.RESERVOIR_API_URL + "search/collections/v1";

  const params = filter ? {
    name: filter,
  } : {};

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

export const GetCollectionActivity = async (address: string) => {
  //
  const url = process.env.RESERVOIR_API_URL + `collections/${address}/activity/v1`;

  const params = {
    limit: 20
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


export const GetTopCollections = async (sortBy: string, limit: number) => {
  const url = process.env.RESERVOIR_API_URL + "collections/v4";

  const params = {
    sortBy,
    limit
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


export const GetUserCollections = async (address: string) => {
  const url = process.env.RESERVOIR_API_URL + `users/${address}/collections/v2`;

  const params = {
    limit: 20
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

