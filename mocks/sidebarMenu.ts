import { ROUTES } from '../constants/constants';

export interface ISidebarMenu {
    to: string;
    title: string;
    exact: boolean;
}

export const MENU_ITEMS: Array<ISidebarMenu> = [
    {
        to: ROUTES.HOME,
        title: 'Главная',
        exact: false
    },
    {
        to: ROUTES.TRACK_LIST,
        title: 'Список треков',
        exact: false
    },
    {
        to: ROUTES.ALBUM_LIST,
        title: 'Список альбомов',
        exact: false
    }
]
