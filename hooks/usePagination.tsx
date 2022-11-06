import { SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';

export default function usePagination () {

    const { query } = useRouter();
    const [ page, setPage ] = useState<number>( 1 );
    const [ rowsPerPage, setRowsPerPage ] = useState<number>( 8 );

    useEffect( () => {
        if ( query ) {
            setPage( Number( query[ 'page-number' ] || 1 ) )
            setRowsPerPage( Number( query[ 'page-size' ] ) || 8 )
        } else {
            setPage( _ => 1 )
            setRowsPerPage( _ => 8 )
        }
    }, [ query ] );


    const handleChangePage = ( event: ChangeEvent<unknown>, value: number ) => {
        setPage( value );
    };

    const handleChangeRowsPerPage = ( event: SelectChangeEvent<number> ) => {
        setRowsPerPage( parseInt( event.target.value as string, 10 ) );
        setPage( 1 );
    };

    return {
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage
    }
}
