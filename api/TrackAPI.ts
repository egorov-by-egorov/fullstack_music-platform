import { ID } from '../types/default';
import { ITrack } from '../types/ITrack';
import { api } from './api';

interface IProductFilter {
    'page-number': number | null;
    'page-size': number | null;
}

export interface ITrackCreateFilter {
    'name': string,
    'artist': string,
    'text': string,
    'listens': number,
    'picture': File,
    'audio': File,
}

export const trackAPI = api.injectEndpoints( {
    endpoints: ( build ) => ( {

        createTrack: build.mutation<null, ITrackCreateFilter | null>( {
            query: ( data ) => ( {
                url: 'tracks/create',
                method: 'post',
                headers: {
                    'Content-type': 'multipart/form-data'
                },
                body: data
            } ),
            invalidatesTags: [ 'Tracks' ]
        } ),

        getAllTracks: build.query<ITrack[], IProductFilter>( {
            query: ( filter ) => ( {
                url: 'tracks/list',
                method: 'get',
                params: filter
            } ),
            providesTags: [ 'Tracks' ]
        } ),

        getOneTrack: build.query<ITrack, ID>( {
            query: ( trackID ) => ( {
                url: `tracks/${ trackID }`,
                method: 'get'
            } ),
            providesTags: [ 'DetailTrack' ]
        } ),

        deleteTrack: build.mutation<null, ID>( {
            query: ( trackID ) => ( {
                url: `tracks/${ trackID }`,
                method: 'delete'
            } ),
            invalidatesTags: [ 'Tracks' ]
        } ),

        setListen: build.mutation<null, ID>( {
            query: ( trackID ) => ( {
                url: `tracks//listen/${ trackID }`,
                method: 'post'
            } )
        } ),

    } )
} )

export const {
    useGetAllTracksQuery,
    useLazyGetOneTrackQuery,
    useDeleteTrackMutation
} = trackAPI

