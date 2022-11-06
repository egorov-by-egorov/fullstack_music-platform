import { Grid, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
    title: string;
    action?: ReactNode
}

const SubHeader: FunctionComponent<Props> = ( { title, action = null } ) => {
    const router = useRouter()
    return (
        <Paper elevation={ 0 }
               sx={ {
                   p: 2,
                   mb: 3,
                   borderRadius: 4,
                   backgroundColor: 'rgba(255,255,255,0.7)',
                   backdropFilter: 'blur(40px)'
               } }>
            <Grid container alignItems={ 'center' } justifyContent={ 'space-between' }>
                <Grid>
                    <Typography variant={ 'h3' }>{ title }</Typography>
                </Grid>
                <Grid>
                    {
                        action
                    }
                </Grid>

            </Grid>
        </Paper>
    );
};

export default SubHeader;
