import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '07b70a0cfemsh7e92788289e4639p1e6117jsn5c2a7912b061'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ( { url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery( { baseUrl }),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : ( count ) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails : builder.query({
            query : ( coinId ) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory :  builder.query({
            query : ( {coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`)  
        })
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;

  