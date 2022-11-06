import { Box, Button, Container } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect } from 'react';
import { useLazyGetOneTrackQuery } from '../../api/TrackAPI';
import CommentsList from '../../components/CommentsList/CommentsList';
import FormCreateComment from '../../components/Forms/FormCreateComment';
import Player from '../../components/Player/Player';
import SubHeader from '../../components/SubHeader/SubHeader';
import MainLayouts from '../../layouts/MainLayouts';
import { ID } from '../../types/default';

interface Props {
}

const Index: FunctionComponent<Props> = () => {
    const { query, push } = useRouter()

    const [ getOneTrackQuery, {
        data: track
    } ] = useLazyGetOneTrackQuery()

    useEffect( () => {
        if ( query.id ) {
            getOneTrackQuery( query.id as ID )
        }
    }, [ query ] )

    return (
        <MainLayouts>
            <SubHeader
                title={ track ? `${ track.artist } ${ track.name }` : 'Track не найден' }
                action={ <Button
                    variant={ 'outlined' }
                    onClick={ _ => push( '/tracks' ) }
                >
                    Назад к списку треков
                </Button> }
            />
            {
                track &&
                <Box sx={ { width: '100%' } }>
                    <Player track={ track }/>
                    <Container maxWidth={ 'lg' }>
                        <FormCreateComment trackID={ track._id }/>
                        <CommentsList comments={ track.comments }/>
                    </Container>
                </Box>
            }
        </MainLayouts>
    );
};

export default Index;
