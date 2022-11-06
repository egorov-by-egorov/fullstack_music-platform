import { AnyAction, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { api } from '../api/api';
import { middlewareCustomErrorLogger } from './middlewareErrorLogger';
import AppSlice from './reducers/AppSlice';
import PlayerSlice from './reducers/PlayerSlice';

const rootReducer = combineReducers( {
    AppSlice,
    PlayerSlice,
    [ api.reducerPath ]: api.reducer,
} );

const masterReducer: typeof rootReducer = ( state, action ) => {
    if ( action.type === HYDRATE ) {
        // NextState
        return {
            ...state,
            ...action.payload,
        };
    } else {
        return rootReducer( state, action );
    }
};

const store = () => configureStore( {
        reducer: masterReducer,
        middleware: ( getDefaultMiddleware ) => getDefaultMiddleware( {
            serializableCheck: false
        } ).concat( api.middleware, middlewareCustomErrorLogger )
    }
);

const storeDispatch = store().dispatch

setupListeners( storeDispatch )

export type AppDispatch = typeof storeDispatch
export type RootState = ReturnType<typeof rootReducer>;
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>

export const storeWrapper = createWrapper( store, {
    debug: true,
    //serializeState: ( state ) => JSON.stringify( state ),
    //deserializeState: ( state ) => JSON.parse( state ),
} )


