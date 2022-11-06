import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { IComment } from '../../types/IComment';

interface Props {
    comment: IComment
}

const CommentsItem: FunctionComponent<Props> = ( { comment } ) => {

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={ comment.username } src=""/>
            </ListItemAvatar>
            <ListItemText
                primary={ comment.username }
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={ { display: 'inline' } }
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            { comment.text }
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    );
};

export default CommentsItem;
