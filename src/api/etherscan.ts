import axios, { AxiosInstance } from 'axios';

export default class Etherscan {
    axios: any;
    baseUrl: string;

    constructor() {
        this.axios = axios.create({
            headers: {
                "Content-Type": "application/json",
            }
        })
        this.baseUrl = process.env.ETHERSCAN_API_URL || "";
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