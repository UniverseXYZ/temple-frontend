import { GetNetworth } from '@/api/zapper';

function useNetworth() {
    const getNetworth = async (wallet: string) => {
        const data = await GetNetworth(wallet)
        return data 
    };
    
    return {
        getNetworth
    }
}

export { useNetworth };
