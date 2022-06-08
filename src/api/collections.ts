import api from './api';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const GetCollectionBySlug = async (slug: string | undefined) => {
  //
  const url = `${API_URL}/collections/${slug}`;

  const { data } = await api({
    method: 'GET',
    url: url,
  });

  console.log(data);

  return data;
};

export const GetCollectionsSearch = async (
  query: string,
  limit = 10,
  cursor?: number
) => {
  //
  const url = `${API_URL}/collections/search`;

  const params = {
    query: query,
    limit: limit,
    cursor: cursor,
  };

  const { data } = await api({
    method: 'GET',
    url: url,
    params: params,
  });

  console.log(data);

  return data;
};
