import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { AppAlert } from '../types/AppStore';
import { showAlert } from './reducers/AppSlice';

export const middlewareCustomErrorLogger: Middleware =
    ( api: MiddlewareAPI ) => ( next ) => ( action ) => {
        // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
        if ( isRejectedWithValue( action ) ) {
            if ( action.payload?.data?.error?.message ) {
                const { dispatch, getState } = api
                const { AppSlice: { language } } = getState()

                const alert: AppAlert = {
                    open: true,
                    severity: 'error',
                    title: 'Error',
                    message: action.payload.data.error.message || 'Something went wrong'
                };
                console.warn( 'We got a rejected action!', action )
                dispatch( showAlert( alert ) )
            }

        }
        return next( action )
    }
