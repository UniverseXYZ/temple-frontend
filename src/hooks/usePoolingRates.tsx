import { useQuery } from 'react-query';
import { GetRates } from '@/api/rate';
import { useCurrency } from '@/hooks';

function usePoolingRates() {
  //

  const { setRates } = useCurrency();

  useQuery('rates', async () => await GetRates(), {
    // Refetch the data every second
    refetchInterval: 30000,
    onSuccess: (data) => {
      setRates(data);
    },
  });

  //
}

export { usePoolingRates };
