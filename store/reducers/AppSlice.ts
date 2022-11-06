import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppAlert, AppFormDialog } from '../../types/AppStore';

interface AppState {
    alert: AppAlert;
    dialog: AppFormDialog,
    appLoader: boolean;
}

const initialState: AppState = {
    alert: {
        open: false,
        severity: 'success',
        title: '',
        message: '',
    },
    dialog: {
        open: false,
        content: null,
    },
    appLoader: false
};

export const AppSlice = createSlice( {
    name: 'app',
    initialState,
    reducers: {
        showAlert ( state, action: PayloadAction<AppAlert> ) {
            state.alert = action.payload
        },
        hideAlert ( state ) {
            state.alert = {
                open: false,
                severity: 'success',
                title: '',
                message: ''
            }
        },
        showDialog ( state, action: PayloadAction<AppFormDialog> ) {
            state.dialog = action.payload
        },
        hideDialog ( state ) {
            state.dialog = {
                open: false,
                content: null,
            }
        },
        showAppLoader ( state ) {
            state.appLoader = true
        },
        hideAppLoader ( state ) {
            state.appLoader = false
        }
    },
} )


export const {
    showAlert,
    hideAlert,
    showDialog,
    hideDialog,
    showAppLoader,
    hideAppLoader,
} = AppSlice.actions


export default AppSlice.reducer
