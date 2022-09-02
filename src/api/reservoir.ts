import axios, { AxiosInstance } from 'axios';

export default class Reservoir {
  axios: AxiosInstance;
  baseUrl: string;

  constructor(){
    this.axios = axios.create({
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.RESERVOIR_API_KEY || ""
      }
    })
    this.baseUrl = process.env.RESERVOIR_API_URL || "";
  }

  async get(url: string, params: any) {    
    const { data } = await this.axios({
      method: 'GET',
      url: url,
      params: params,
    });
  
    return data;
  }  
}