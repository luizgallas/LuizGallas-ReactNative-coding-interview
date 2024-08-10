import { useInfiniteQuery } from '@tanstack/react-query';

import axiosInstance from '../utils/axios';

export const useListPersons = (amountToFetch: number = 50) => {
  const { data, error, isLoading, refetch, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ['getPersonsList'],
      async () =>
        (
          await axiosInstance.get('persons', {
            params: {
              _quantity: amountToFetch,
            },
          })
        ).data,
      {
        getNextPageParam: (lastPage, allPages) =>
          allPages ? allPages.length + 1 : 0,
      },
    );

  return { data, error, isLoading, refetch, fetchNextPage, isFetchingNextPage };
};
