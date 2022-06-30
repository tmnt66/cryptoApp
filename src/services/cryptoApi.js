import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '987ddf1473msh616835db8d0f93ap1d64afjsndfb983b8d74a',
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({

        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),

        getCryptoDetails: builder.query({
            query: ({uuid , timePeriod}) => createRequest(`/coin/${uuid}?timePeriod=${timePeriod}`),
        }),

        getCryptoHistory: builder.query({
            query: ({uuid , timePeriod}) => createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`),
        })
})
})


export const { useGetCryptosQuery, useGetCryptoDetailsQuery , useGetCryptoHistoryQuery } = cryptoApi;


