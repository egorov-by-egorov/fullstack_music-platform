import { Delete, PlayArrowRounded } from '@mui/icons-material';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { useDeleteTrackMutation } from '../../api/TrackAPI';
import { BASE_URL } from '../../constants/constants';
import { ITrack } from '../../types/ITrack';

interface Props {
    track: ITrack,
}

const TrackItem: FunctionComponent<Props> = ( { track } ) => {
    const router = useRouter()
    const [ deleteTrack ] = useDeleteTrackMutation()

    return (
        <ListItem
            alignItems="flex-start"
            secondaryAction={
                <IconButton onClick={ _ => deleteTrack( track._id ) }>
                    <Delete/>
                </IconButton>
            }
        >
            <ListItemButton
                onClick={ () => router.push( `/tracks/${ track._id }` ) }
                sx={ { mr: 2 } }
            >
                <ListItemAvatar>
                    <Avatar alt={ track.artist + '' + track.name } src={ `${ BASE_URL }/${ track.picture }` }/>
                </ListItemAvatar>
                <ListItemText
                    primary={ track.name }
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={ { display: 'inline' } }
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                { track.artist }
                            </Typography>
                        </React.Fragment>
                    }
                />
                <PlayArrowRounded
                    sx={ { fontSize: '2rem' } }
                    htmlColor={ '#000' }
                />
            </ListItemButton>
        </ListItem>
    );
};

export default TrackItem;
