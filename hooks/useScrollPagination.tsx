import { MutableRefObject, useEffect, useRef } from 'react';

export default function useScrollPagination ( parentRef: MutableRefObject<HTMLDivElement>, childRef: MutableRefObject<HTMLDivElement>, callback: () => void ) {
    const observer = useRef<IntersectionObserver | null>( null )

    useEffect( () => {

        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0,
        }
        observer.current = new IntersectionObserver( ( [ target ] ) => {
            if ( target.isIntersecting ) {
                console.log( 'intersected' )
                callback()
            }
        }, options )

        observer.current?.observe( childRef.current )

        return () => {
            observer.current?.unobserve( childRef.current )

        }
        // eslint: disable next line
    }, [] )

}