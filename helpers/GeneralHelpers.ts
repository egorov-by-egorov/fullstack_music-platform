export function declinationWords ( number: number, txt: string ): string {
    const cases = [ 2, 0, 1, 1, 1, 2 ];
    return txt[ ( number % 100 > 4 && number % 100 < 20 ) ? 2 : cases[ ( number % 10 < 5 ) ? number % 10 : 5 ] ];
}

export function getTimeCustom ( date: string ) {
    return date !== null ? new Date( date ).getTime() : 0;
}

export function limitedStringValue ( string: string = '', length: number = 20 ): string {
    return string.length > length ? `${ string.slice( 0, length ) }...` : string;
}

export function formatBytes ( bytes: number, decimals = 2 ): string | number {
    if ( bytes === 0 ) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [ 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];

    const i = Math.floor( Math.log( bytes ) / Math.log( k ) );

    return parseFloat( ( bytes / Math.pow( k, i ) ).toFixed( dm ) ) + ' ' + sizes[ i ];
}

// Для формата сумм
export function ccyFormat ( num: number ): string {
    return num.toFixed( 2 )
}

export function invoiceTotal ( prices: Array<number> ): number {
    return prices.map( ( price ) => price ).reduce( ( sum, val ) => val ? sum + val : sum, 0 );
}

export function invoiceCountTotalPrice ( price: number, count: number ): number {
    return price * count;
}

export function b64ToBlob ( base64: string, type = 'application/octet-stream' ): Promise<Blob> {
    return fetch( `data:${ type };base64,${ base64 }` ).then( res => res.blob() );
}

export async function linkToBlob ( url: string ): Promise<string | Blob> {
    return await fetch( url ).then( res => res.blob() )
}
