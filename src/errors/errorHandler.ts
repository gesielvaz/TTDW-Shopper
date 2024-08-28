/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";

import { formatResponse } from "../adapters/formatResponse";
import { Err } from "./customError";

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    
	// Celebrate Errors
	if (err && err.details) {
		const validationError = createValidationError(err.details);
		return formatResponse(
			res,
			400,
			`Validation Error ${validationError._error}`
		);
	}
	// Our Errors
	if (err instanceof Err) {
		return formatResponse(res, err.code, err.message, err.body);
	}
	if (err instanceof Error) {
		const errorMessage = "Internal Server Error: " + err.message;
		return formatResponse(res, 500, errorMessage);
	}
}

function createValidationError(validationDetails: any[]) {
	const errorBody: { [key: string]: string } = {};
	validationDetails.forEach((detail) => {
		errorBody["_error"] = detail.message;
	});
	return errorBody;
}

export default errorHandler;
