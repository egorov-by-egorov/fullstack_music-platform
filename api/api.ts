import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { BASE_URL } from '../constants/constants';

export const api = createApi( {
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery( {
        baseUrl: `${ BASE_URL }/api/v1`
    } ),
    extractRehydrationInfo ( action, { reducerPath } ) {
        if ( action.type === HYDRATE ) {
            return action.payload[ reducerPath ]
        }
    },
    tagTypes: [ 'Tracks', 'DetailTrack' ],
    endpoints: () => ( {} ),
} ) 
