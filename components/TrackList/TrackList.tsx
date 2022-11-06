import { List } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { ITrack } from '../../types/ITrack';
import TrackItem from '../TrackItem/TrackItem';

interface Props {
    tracks: ITrack[]
}

const TrackList: FunctionComponent<Props> = ( { tracks } ) => {

    return (
        <List sx={ {
            width: '100%',
            borderRadius: '4px',
            backgroundColor: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(40px)'
        } }>
            {
                tracks.map( track => {
                    return (
                        <TrackItem track={ track } key={ track._id }/>
                    )
                } )
            }
        </List>
    );
};

export default TrackList;
