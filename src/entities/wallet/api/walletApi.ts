import { API_URL } from '@/app/config/network';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

enum TAGS {
  BALANCE = 'BALANCE',
}

const walletApi = createApi({
  reducerPath: 'walletApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: [TAGS.BALANCE],
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: () => 'wallet',
      providesTags: [TAGS.BALANCE],
    }),
    updateBalance: builder.mutation({
      query: (amount: number) => ({
        url: '/wallet',
        method: 'PUT',
        body: { amount },
      }),
      invalidatesTags: [TAGS.BALANCE],
    }),
  }),
});

export const { useGetBalanceQuery } = walletApi;

export default walletApi;
