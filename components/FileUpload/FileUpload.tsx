import { Avatar, Grid, IconButton } from '@mui/material';
import React, { FunctionComponent, ReactNode, useState } from 'react';

interface Props {
    children: ReactNode
    setFile: Function;
    accept: string;
}

const FileUpload: FunctionComponent<Props> = ( { children, setFile, accept } ) => {

    const [ avatar, setAvatar ] = useState<string>( '' );

    const Upload = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        if ( e.target.files?.[ 0 ] ) {
            setFile( e.target.files[ 0 ] )
            setAvatar( URL.createObjectURL( e.target.files[ 0 ] ) )
        }
    }

    return (
        <Grid container direction={ 'column' } alignItems={ 'center' } mt={ 4 }>
            <Grid item>
                <Avatar
                    variant={ 'square' }
                    src={ avatar }
                    sx={ {
                        width: 90,
                        height: 90,
                    } }
                />
            </Grid>
            <Grid item>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept={ accept } type="file" onChange={ Upload }/>
                    { children }
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default FileUpload;
