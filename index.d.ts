declare module 'xhr-fetch' {

	interface NodeLikeCallback {
		(error: string | null, data?: string): void;
	}

	const ajaxFetch: (url: string, cb: NodeLikeCallback) => void;

	export default ajaxFetch;
}