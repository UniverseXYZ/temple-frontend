// request.js
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
let TOKEN;

// optionaly add base url
const client = axios.create({ baseUrl: API_URL });

const request = ({ ...options }) => {
  // for Next.js
  if (typeof window !== 'undefined') {
    TOKEN = localStorage.getItem('token');
  }

  client.defaults.headers.common.Authorization = `${TOKEN}`;

  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionaly catch errors and add some additional logging here
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
