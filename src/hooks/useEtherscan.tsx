import Etherscan from "@/api/etherscan";
import { ethers } from "ethers";

function useEtherscan() {

    const etherscan = new Etherscan();

    const getAddressBalance = async (address: string) => {
        const url = etherscan.baseUrl;
        const params = {
            module: 'account',
            action: 'balance',
            address: address,
            tag: 'latest',
            apikey: process.env.ETHERSCAN_API_KEY || ""
        };
        const data = await etherscan.get(url, params);
        if(data) {
            const formattedBalance = ethers.utils.formatEther(data.result);
            return Number(formattedBalance).toFixed(3);
        }
    }

    return {
        getAddressBalance,
    }
}

export { useEtherscan }