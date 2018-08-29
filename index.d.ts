declare module 'xhr-fetch' {

	interface SuccessCallBack {
		(error: null, data: string): void;
	}

	interface FailCallBack {
		（error:string): void;
	}

	type NodeLikeCallBack = SuccessCallBack | FailCallBack

	const ajaxFetch: (url: string, cb: NodeLikeCallback) => void;

	export default ajaxFetch;
}