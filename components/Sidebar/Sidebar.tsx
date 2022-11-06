import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { MENU_ITEMS } from '../../mocks/sidebarMenu';
import theme from '../../styles/theme';

interface Props {
    open: boolean
    setOpen: ( b: boolean ) => void,
}


const Sidebar: FunctionComponent<Props> = ( { open, setOpen } ) => {
    const { asPath } = useRouter()

    return (
        <aside>
            <Drawer
                anchor={ 'left' }
                open={ open }
                onClose={ _ => setOpen( false ) }
            >
                <Box
                    sx={ { width: 250 } }
                    role="presentation"
                    onClick={ _ => setOpen( false ) }
                    onKeyDown={ _ => setOpen( false ) }
                >
                    <List>
                        { MENU_ITEMS.map( ( item, index ) => (
                            <ListItem key={ item.title + index } disablePadding>
                                <ListItemButton sx={ {
                                    color: asPath === item.to ? theme.palette.primary.main : theme.palette.secondary.main
                                } }>
                                    <Link href={ item.to }>
                                        <ListItemText primary={ item.title }/>
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        ) ) }
                    </List>
                </Box>
            </Drawer>
        </aside>
    );
};

export default Sidebar;
