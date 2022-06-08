import api from './api';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const GenerateUserId = async () => {
  //

  const { data } = await api({
    method: 'POST',
    url: `${API_URL}/user/auth/generate`,
  });

  return data;
};
