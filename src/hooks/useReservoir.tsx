import Reservoir from '@/api/reservoir';
import { ethers } from 'ethers';

function useReservoir() {

    const reservoir = new Reservoir();    

    const makeSearchQuery = async (query: string) => {
        const url = reservoir.baseUrl + "search/collections/v1";
        const params = query ? { name: query } : {};
    
        const data = await reservoir.get(url, params)
        return data 
    };

    const getUserNFTs = async (wallet: string, token: string) => {
      const url = reservoir.baseUrl + `users/${ethers.utils.getAddress(wallet)}/tokens/v2`;
      const params = {
        collection: token,
        limit: 20,
      };

      const data = await reservoir.get(url, params)
      return data
    }

    const getUserCollections = async (wallet: string, token: string) => {
      const url = reservoir.baseUrl + `users/${ethers.utils.getAddress(wallet)}/collections/v2`;
      const params = {
        collection: token,
        limit: 20,
      };

      const data = await reservoir.get(url, params)
      return data
    }

    const getDailyStats = async (address: string) => {
      const url = reservoir.baseUrl + "collections/daily-volumes/v1";
      const params = 
      {
        id: address,
        limit: 1000,
      }

      const data = await reservoir.get(url, params)
      return data

    }

    const getCollection = async (addressOrSlug: string) => {
        const url = reservoir.baseUrl + "collection/v3";
        const isValidAddress = ethers.utils.isAddress(addressOrSlug);      
        const params = isValidAddress ? 
        {
          id: addressOrSlug,
          includeTopBid: true,
        } :
        {
          slug: addressOrSlug,
          includeTopBid: true,
        };

        const data = await reservoir.get(url, params)
        return data 
    }
    
    return {
        makeSearchQuery,
        getCollection,
        getUserNFTs,
        getUserCollections,
        getDailyStats
    }
}

export { useReservoir };
