import { Response } from "express";

interface ResponseLayout {
	code: number;
	success: boolean;
	message?: string;
	data?: any;
}

export function formatResponse (
	res: Response,
	code: number,
	message?: string,
	data?: any,
) {
	const body: ResponseLayout = {
		code,
		success: Boolean(code >= 200 && code < 300),
		message,
		data,
	};

	if (body.data?.code) {
		delete body.data.code;
	}
	if (body.data?.message) {
		delete body.data.message;
	}

	return res.status(code).json(body);
}
