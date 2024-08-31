import { NextFunction, Request, Response } from "express";
import { RegisterServices } from "../services/register/create";
import errorHandler from "../errors/errorHandler";


export async function Create(req: Request, res: Response,  next: NextFunction) {
    try {
        const { image, customer_code, measure_datetime, measure_type } = req.body;

        const result = await RegisterServices({
            image, customer_code, measure_datetime, measure_type,
            has_confirmed: false
        });

        return res.status(200).json(result);
    } catch (error) {
        return errorHandler(error, req, res, next);
    }
}
