import { Divider, List, Paper, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { IComment } from '../../types/IComment';
import CommentsItem from '../CommentsItem/CommentsItem';

interface Props {
    comments: IComment[]
}

const CommentsList: FunctionComponent<Props> = ( { comments } ) => {

    if ( !comments.length ) {
        return (
            <Paper elevation={ 0 } sx={ {
                p: 2,
                my: 5,
                borderRadius: 4,
                backgroundColor: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(40px)'
            } }>
                <Typography align={ 'center' }>Комментариев нет</Typography>
            </Paper>
        )
    }
    return (
        <List sx={ { width: '100%', bgcolor: 'background.paper' } }>
            {
                comments.map( ( comment, index ) => {
                    return (
                        <React.Fragment key={ comment._id }>
                            <CommentsItem comment={ comment }/>
                            {
                                comments.length !== index &&
                                <Divider variant="inset" component="li"/>
                            }
                        </React.Fragment>
                    )
                } )
            }

        </List>
    );
};

export default CommentsList;
