import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Box, Paper, TextField } from '@mui/material';
import React, { FunctionComponent, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ICommentCreateFilter, useCreateCommentMutation } from '../../api/CommentAPI';
import { ID } from '../../types/default';


interface FormInput {
    username: string;
    text: string;
}

const schema = yup
    .object()
    .shape( {
        username: yup.string().required(),
        text: yup.string().required(),
    } )

interface Props {
    trackID: ID
}

const FormCreateComment: FunctionComponent<Props> = ( { trackID } ) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<FormInput>( {
        resolver: yupResolver( schema ),
    } );
    const [ createComment, { isSuccess: isSuccessCreateComment } ] = useCreateCommentMutation()

    useEffect( () => {
        if ( isSuccessCreateComment ) {
            reset()
        }
    }, [ isSuccessCreateComment ] )

    const onSubmit: SubmitHandler<FormInput> = data => {
        const resultData: ICommentCreateFilter = {
            ...data,
            trackID
        }
        createComment( resultData )
    };
    return (
        <Paper elevation={ 0 } sx={ {
            p: 2,
            my: 5,
            borderRadius: 4,
            backgroundColor: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(40px)'
        } }>
            <Box component="form" onSubmit={ handleSubmit( onSubmit ) } noValidate>
                <TextField
                    margin="normal"
                    type="text"
                    required
                    fullWidth
                    label="Ваше имя"
                    autoComplete="current-password"
                    error={ Boolean( errors.username ) }
                    helperText={ errors.username?.message }
                    { ...register( 'username', { required: true } ) }
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Комментарий"
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
        </Paper>
    );
};

export default FormCreateComment;
