import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { FC, useEffect } from 'react';
import { BASE_URL } from '../../constants/constants';
import { useTypedSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/useActions';
import theme from '../../styles/theme';
import { ITrack } from '../../types/ITrack';

const Widget = styled( 'div' )( ( { theme } ) => ( {
    padding: 16,
    borderRadius: 16,
    width: 343,
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
} ) );

const CoverImage = styled( 'div' )( {
    width: 100,
    height: 100,
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
        width: '100%',
    },
} );

const TinyText = styled( Typography )( {
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
} );


interface Props {
    track: ITrack,
    active?: boolean
}

let audio: HTMLAudioElement;

const Player: FC<Props> = ( { track } ) => {

    const {
        active,
        duration,
        currentTime,
        pause,
        volume
    } = useTypedSelector( state => state.PlayerSlice )

    const { playTrack, pauseTrack, setCurrentTime, setDuration, setActive, setVolume } = useActions()

    useEffect( () => {
        if ( !audio && track.audio ) {
            audio = new Audio( `${ BASE_URL }/${ track.audio }` )
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration( Math.ceil( audio.duration ) )
            }
            audio.ontimeupdate = () => {
                setCurrentTime( Math.ceil( audio.currentTime ) )
            }
        }
        return () => {
            pauseTrack()
            audio.pause()
        }
    }, [] );

    const onPlayHandler = () => {
        if ( pause ) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const onChangeVolume = ( value: number ) => {
        setVolume( value )
        audio.volume = value / 100
    }

    const onChangeCurrentTime = ( value: number ) => {
        setCurrentTime( value )
        audio.currentTime = value
    }

    function formatDuration ( value: number ) {
        const minute = Math.floor( value / 60 );
        const secondLeft = value - minute * 60;
        return `${ minute }:${ secondLeft < 10 ? `0${ secondLeft }` : secondLeft }`;
    }

    const mainIconColor = '#000';
    const lightIconColor = 'rgba(0,0,0,0.4)';


    return (
        <Widget>
            <Box sx={ { display: 'flex', alignItems: 'center' } }>
                <CoverImage>
                    <img
                        alt={ `${ track.artist } - ${ track.name }` }
                        src={ `${ BASE_URL }/${ track.picture }` }
                    />
                </CoverImage>
                <Box sx={ { ml: 1.5, minWidth: 0 } }>
                    <Typography variant="caption" color="text.secondary" fontWeight={ 500 }>
                        { track.artist }
                    </Typography>
                    <Typography noWrap>
                        <b>{ track.name }</b>
                    </Typography>
                    <Typography noWrap letterSpacing={ -0.25 }>
                        { track.artist } &mdash; track.name
                    </Typography>
                </Box>
            </Box>
            <Slider
                aria-label="time-indicator"
                size="small"
                value={ currentTime }
                min={ 0 }
                max={ duration }
                step={ 1 }
                onChange={ ( _, value ) => onChangeCurrentTime( value as number ) }
                sx={ {
                    color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                    height: 4,
                    '& .MuiSlider-thumb': {
                        width: 8,
                        height: 8,
                        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                        '&:before': {
                            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                        },
                        '&:hover, &.Mui-focusVisible': {
                            boxShadow: `0px 0px 0px 8px ${
                                theme.palette.mode === 'dark'
                                    ? 'rgb(255 255 255 / 16%)'
                                    : 'rgb(0 0 0 / 16%)'
                            }`,
                        },
                        '&.Mui-active': {
                            width: 20,
                            height: 20,
                        },
                    },
                    '& .MuiSlider-rail': {
                        opacity: 0.28,
                    },
                } }
            />
            <Box
                sx={ {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: -2,
                } }
            >
                <TinyText>{ formatDuration( currentTime ) }</TinyText>
                <TinyText>-{ formatDuration( duration - currentTime ) }</TinyText>
            </Box>
            <Box
                sx={ {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: -1,
                } }
            >
                <IconButton aria-label="previous song">
                    <FastRewindRounded fontSize="large" htmlColor={ mainIconColor }/>
                </IconButton>
                <IconButton
                    aria-label={ pause ? 'play' : 'pause' }
                    onClick={ onPlayHandler }
                >
                    { pause ? (
                        <PlayArrowRounded
                            sx={ { fontSize: '3rem' } }
                            htmlColor={ mainIconColor }
                        />
                    ) : (
                        <PauseRounded sx={ { fontSize: '3rem' } } htmlColor={ mainIconColor }/>
                    ) }
                </IconButton>
                <IconButton aria-label="next song">
                    <FastForwardRounded fontSize="large" htmlColor={ mainIconColor }/>
                </IconButton>
            </Box>
            <Stack spacing={ 2 } direction="row" sx={ { mb: 1, px: 1 } } alignItems="center">
                <VolumeDownRounded
                    sx={ {
                        cursor: 'pointer',
                        color: lightIconColor,
                        transition: 'all, 0.2s',
                        '&:hover': {
                            color: mainIconColor
                        }
                    } }
                    onClick={ _ => onChangeVolume( 0 ) }
                    htmlColor={ lightIconColor }
                />
                <Slider
                    aria-label="Volume"
                    defaultValue={ 100 }
                    value={ volume }
                    onChange={ ( _, value ) => onChangeVolume( value as number ) }
                    sx={ {
                        color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                        '& .MuiSlider-track': {
                            border: 'none',
                        },
                        '& .MuiSlider-thumb': {
                            width: 24,
                            height: 24,
                            backgroundColor: '#fff',
                            '&:before': {
                                boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                            },
                            '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                boxShadow: 'none',
                            },
                        },
                    } }
                />
                <VolumeUpRounded sx={ {
                    cursor: 'pointer',
                    color: lightIconColor,
                    transition: 'all, 0.2s',
                    '&:hover': {
                        color: mainIconColor
                    }
                } }
                                 onClick={ _ => onChangeVolume( 100 ) }
                                 htmlColor={ lightIconColor }
                />
                <TinyText>{ volume }</TinyText>
            </Stack>
        </Widget>
    );
};

export default Player;
