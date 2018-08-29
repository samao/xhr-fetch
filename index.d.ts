/*
 * @Author: iDzeir 
 * @Date: 2018-08-29 18:42:51 
 * @Last Modified by:   iDzeir 
 * @Last Modified time: 2018-08-29 18:42:51 
 */
declare module 'xhr-fetch' {
    interface NodeLikeCallBack {
        (error: string | null, data?: string): void;
    }

    const xhrFetch: (url: string, cb: NodeLikeCallBack) => void;

    export default xhrFetch;
}
