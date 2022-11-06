import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import MainLayouts from '../layouts/MainLayouts';

interface Props {
}


const about: FunctionComponent<Props> = () => {
    const router = useRouter()
    return (
        <MainLayouts title={ 'О нас' }>
            <Typography variant={ 'h1' }>About</Typography>
            <Button onClick={ _ => router.push( '/' ) }>Назад</Button>
        </MainLayouts>

    );
};

export default about;
