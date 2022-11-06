import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerState } from '../../types/IPlayer';
import { ITrack } from '../../types/ITrack';

const initialState: PlayerState = {
    active: null,
    volume: 50,
    duration: 100,
    currentTime: 0,
    pause: true
}

export const PlayerSlice = createSlice( {
    name: 'player',
    initialState,
    reducers: {
        playTrack ( state ) {
            state.pause = false
        },
        pauseTrack ( state ) {
            state.pause = true
        },
        setVolume ( state, action: PayloadAction<number> ) {
            state.volume = action.payload
        },
        setDuration ( state, action: PayloadAction<number> ) {
            state.duration = action.payload
        },
        setCurrentTime ( state, action: PayloadAction<number> ) {
            state.currentTime = action.payload
        },
        setActive ( state, action: PayloadAction<null | ITrack> ) {
            state.active = action.payload
            state.currentTime = 0
            state.duration = 0
        }
    }
} )

export default PlayerSlice.reducer