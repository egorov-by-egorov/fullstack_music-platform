import { Button, Container } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { api } from '../../api/api';
import SubHeader from '../../components/SubHeader/SubHeader';
import TrackList from '../../components/TrackList/TrackList';
import MainLayouts from '../../layouts/MainLayouts';
import { NextThunkDispatch, storeWrapper } from '../../store/store';
import { ITrack } from '../../types/ITrack';

interface Props {
    tracks: ITrack[]
}

const Index: FunctionComponent<Props> = ( { tracks } ) => {
    const router = useRouter()

    return (
        <MainLayouts>
            <SubHeader title={ 'Список треков' } action={ <Button
                variant={ 'outlined' }
                onClick={ _ => router.push( '/tracks/create' ) }
            >
                Загрузить
            </Button> }/>
            <Container component={ 'section' } maxWidth={ 'xl' }>
                {
                    tracks &&
                    <TrackList tracks={ tracks }/>
                }
            </Container>
        </MainLayouts>
    );
};


export const getServerSideProps = storeWrapper.getServerSideProps(
    ( store ) => async ( context ) => {
        const dispatch = store.dispatch as NextThunkDispatch
        const { data: tracks } = await dispatch(
            //@ts-ignore
            api.endpoints.getAllTracks.initiate( {
                'page-number': 1,
                'page-size': 999
            } )
        );

        //console.log( 'State on server', store.getState() );

        return { props: { tracks } };
    }
);

export default Index