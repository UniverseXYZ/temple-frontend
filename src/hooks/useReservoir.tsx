import Reservoir from '@/api/reservoir';

function useReservoir() {

    const reservoir = new Reservoir();    

    const makeSearchQuery = async (query: string) => {
        const data = await reservoir.searchCollections(query)
        return data 
    };
    
    return {
        makeSearchQuery
    }
}

export { useReservoir };
