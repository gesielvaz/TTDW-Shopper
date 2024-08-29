import { Request, Response, NextFunction } from "express";
import { formatResponse } from "../adapters/formatResponse";
import errorHandler from "../errors/errorHandler";
import { IRegister } from "../interface/IRegister";
import { RegisterServices } from "../services/register/create";

export const CreateRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Upload Entro ")
  try {
    const { body } = req;

    const data: IRegister = {
      ...body,
    };

    const result = await RegisterServices(data);

    return formatResponse(res, 200, "Success", result);
  } catch (error) {
    return errorHandler(error, req, res, next);
  }
};
