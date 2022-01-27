/* Forma de Redux para fecth Data, logica de la obtencion de la Api se realiza aqui. */
import { createApi, fetchBasedQuery } from '@reduxjs/toolkit/query'


const crytoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '847aefa4edmsh9ba14e3a3e18a90p106ea3jsnd2c6798faaa5'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'


export const cryptoApi = createApi





