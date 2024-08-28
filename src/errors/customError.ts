export interface IErrBody {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string | number]: any;
}

export class Err extends Error {
	code: number;
	body?: IErrBody;

	constructor(message?: string, code?: number, body?: IErrBody) {
		super(message ?? "Internal Server Error");
		this.code = code ?? 500;
		this.body = body;
	}

	toJson() {
		return {
			code: this.code,
			message: this.message,
			body: this.body,
		};
	}
}
