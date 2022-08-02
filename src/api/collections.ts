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

  console.log(url, params, headers)

  const { data } = await axios({
    method: 'GET',
    baseURL: '',
    url: url,
    params: params,
    headers: headers
  });

  console.log("data:", data)

  return data;
};
