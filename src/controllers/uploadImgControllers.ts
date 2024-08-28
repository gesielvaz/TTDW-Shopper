import { Request, Response, NextFunction } from "express";
import { IUpdateImg } from "../interface/IUploadImg";
import { PutUploadImgServices } from "../services/uploadImg/create";
import { formatResponse } from "../adapters/formatResponse";
import errorHandler from "../errors/errorHandler";

export const postUploadImg = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;

    const data: IUpdateImg = {
      ...body,
    };

    const result = await PutUploadImgServices(data);

    return formatResponse(res, 200, "Success", result);
  } catch (error) {
    return errorHandler(error, req, res, next);
  }
};
