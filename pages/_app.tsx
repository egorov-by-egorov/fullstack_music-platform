import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { storeWrapper } from '../store/store';
import '../styles/globals.scss'
import theme from '../styles/theme';
import createEmotionCache from '../utility/createEmotionCache';

console.log( `${ process.env.REACT_APP_NAME } ${ process.env.REACT_APP_VERSION }` );

const clientSideEmotionCache = createEmotionCache();


interface Props extends AppProps {
    emotionCache: EmotionCache,
}

const App: FC<Props> = ( { Component, emotionCache = clientSideEmotionCache, ...rest } ) => {
    const { store, props } = storeWrapper.useWrappedStore( rest );
    const { pageProps } = props

    return (
        <Provider store={ store }>
            <CacheProvider value={ clientSideEmotionCache }>
                <Head>
                    <meta name="viewport" content="initial-scale=1, width=device-width"/>
                </Head>
                <ThemeProvider theme={ theme }>
                    <CssBaseline/>
                    <Component { ...pageProps } />
                </ThemeProvider>
            </CacheProvider>
        </Provider>
    )
}

export default App
