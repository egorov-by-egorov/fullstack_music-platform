import { ID } from '../types/default';
import { IComment } from '../types/IComment';
import { api } from './api';

export interface ICommentCreateFilter {
    'username': string,
    'text': string,
    'trackID': ID
}

export const commentAPI = api.injectEndpoints( {
    endpoints: ( build ) => ( {
        createComment: build.mutation<IComment, ICommentCreateFilter>( {
            query: ( data ) => ( {
                url: 'tracks/comments/create',
                method: 'post',
                body: data
            } ),
            invalidatesTags: [ 'DetailTrack' ]
        } ),
    } )
} )

export const {
    useCreateCommentMutation
} = commentAPI
