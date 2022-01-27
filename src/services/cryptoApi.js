/* Forma de Redux para fecth Data, logica de la obtencion de la Api se realiza aqui. */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const crytoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '847aefa4edmsh9ba14e3a3e18a90p106ea3jsnd2c6798faaa5'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

/* Funcion que crea una peticion, y regresa un objeto que contiene la URL, y contiene el header de las Apis */
const createRequest = (url) => ({ url, headers:crytoApiHeaders})


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({ /* builder como parametro, y regresa un objeto, el nombre de los enpoints */
        getCryptos: builder.query({
            query: () => createRequest('')/* Apunta a un request especifico, la informcion de los exchanges */
        })
    })
})


export const {
    useGetCryptosQuery, /* Redux crea un hook instantamentemnte que obtiene toda la data para tus querys */
} = cryptoApi;



