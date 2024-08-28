import { UploadImg } from "../entities/uploadImg";

export const UploadImgRepository = (insertData?: UploadImg) => {
  return UploadImg.getRepository();
};

