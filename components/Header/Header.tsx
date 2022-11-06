import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Search = styled( 'div' )( ( { theme } ) => ( {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha( theme.palette.common.white, 0.15 ),
    '&:hover': {
        backgroundColor: alpha( theme.palette.common.white, 0.25 ),
    },
    marginLeft: 0,
    width: '100%',
    [ theme.breakpoints.up( 'sm' ) ]: {
        marginLeft: theme.spacing( 1 ),
        width: 'auto',
    },
} ) );

const SearchIconWrapper = styled( 'div' )( ( { theme } ) => ( {
    padding: theme.spacing( 0, 2 ),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
} ) );

const StyledInputBase = styled( InputBase )( ( { theme } ) => ( {
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing( 1, 1, 1, 0 ),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${ theme.spacing( 4 ) })`,
        transition: theme.transitions.create( 'width' ),
        width: '100%',
        [ theme.breakpoints.up( 'sm' ) ]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
} ) );

interface Props {
}

const Header: FunctionComponent<Props> = () => {
    const [ sidebarOpen, setSidebarOpen ] = useState<boolean>( false )

    return (
        <>
            <AppBar position="fixed" color={ 'secondary' }>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={ { mr: 2 } }
                        onClick={ _ => setSidebarOpen( true ) }
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={ { flexGrow: 1, display: { xs: 'none', sm: 'block' } } }
                    >
                        <Link href={ '/' }>
                            Music Platform
                        </Link>
                    </Typography>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={ { 'aria-label': 'search' } }
                        />
                    </Search>
                </Toolbar>
            </AppBar>
            <Sidebar open={ sidebarOpen } setOpen={ setSidebarOpen }/>
        </>
    );
};

export default Header;

