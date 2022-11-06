import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';


interface FormInput {
    name: string;
    artist: string;
    text: string;
}

const schema = yup
    .object()
    .shape( {
        name: yup.string().required(),
        artist: yup.string().required(),
        text: yup.string().required(),
    } )


interface Props {
}

const FormCreateTrackInfo: FunctionComponent<Props> = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<FormInput>( {
        resolver: yupResolver( schema ),
    } );

    const onSubmit: SubmitHandler<FormInput> = data => {
        console.log( data )
    };

    return (
        <Box component="form" onSubmit={ handleSubmit( onSubmit ) } noValidate>
            <TextField
                margin="normal"
                type="text"
                required
                fullWidth
                autoFocus
                label="Название трека"
                autoComplete="current-password"
                error={ Boolean( errors.name ) }
                helperText={ errors.name?.message }
                { ...register( 'name', { required: true } ) }
            />
            <TextField
                margin="normal"
                required
                fullWidth
                label="Имя исполнителя"
                type="text"
                autoComplete="current-password"
                error={ Boolean( errors.artist ) }
                helperText={ errors.artist?.message }
                { ...register( 'artist', { required: true } ) }
            />
            <TextField
                margin="normal"
                required
                fullWidth
                label="Слова к треку"
                type="text"
                autoComplete="current-password"
                multiline
                rows={ 4 }
                error={ Boolean( errors.text ) }
                helperText={ errors.text?.message }
                { ...register( 'text', { required: true } ) }
            />
            <LoadingButton
                type="submit"
                key="Enter"
                variant="contained"
                color="primary"
                loading={ false }
                loadingPosition="center"
                sx={ { my: 2 } }
            >
                Отправить
            </LoadingButton>
        </Box>
    );
};

export default FormCreateTrackInfo;
