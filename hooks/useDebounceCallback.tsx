import { useCallback, useRef } from 'react';

export default function useDebounceCallback (
    callback: ( ...args: Array<any> ) => void,
    delay: number
) {
    const timer = useRef<any | null>( null );

    return useCallback(
        ( ...args: Array<any> ) => {
            if ( timer.current ) {
                clearTimeout( timer.current )
            }
            timer.current = setTimeout( () => {
                callback( ...args )
            }, delay )
        },
        [ callback, delay ],
    )

}