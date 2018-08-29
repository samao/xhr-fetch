declare module 'xhr-fetch' {

	interface NodeLikeCallBack {
		(error: string | null, data?: string): void;
	}

	const xhrFetch: (url: string, cb: NodeLikeCallBack) => void;

	export default xhrFetch;
}