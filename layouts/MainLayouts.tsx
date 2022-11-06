import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

interface Props {
    children: React.ReactNode
    title?: string
    description?: string
    keywords?: string
}

const WallPaper = styled( 'div' )( {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
    transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
    '&:before': {
        content: '""',
        width: '140%',
        height: '140%',
        position: 'absolute',
        top: '-40%',
        right: '-50%',
        background:
            'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
    },
    '&:after': {
        content: '""',
        width: '140%',
        height: '140%',
        position: 'absolute',
        bottom: '-50%',
        left: '-30%',
        background:
            'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
        transform: 'rotate(30deg)',
    },
} );

const MainLayouts: FunctionComponent<Props> = ( { children, title, description, keywords } ) => {

    return (
        <Box
            sx={ {
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                position: 'relative',
                background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
                transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
            } }
        >
            <Head>
                <title>{ title || 'Музыкальная площадка' }</title>
                <meta name="description"
                      content={ `Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым.` + description }/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={ keywords || 'Музыка, треки, артисты' }/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Header/>
            <Container component="main" sx={ {
                mt: 10, mb: 2
            } } maxWidth={ false }>
                { children }
            </Container>
            <Footer/>

        </Box>
    );
};

export default MainLayouts;
