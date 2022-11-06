import { Typography } from '@mui/material';
import MainLayouts from '../layouts/MainLayouts';

export default function Home () {
    return (
        <MainLayouts title={ 'Главная' }>
            <Typography variant={ 'h1' }>Hello Next</Typography>
        </MainLayouts>
    )
}
