import { GetNetworth } from '@/api/zapper';

function useNetworth() {
    const getNetworth = async (wallet: string) => {
        console.log("active wallet", wallet);
        const data = await GetNetworth(wallet)
        return data 
    };
    
    return {
        getNetworth
    }
}

export { useNetworth };
