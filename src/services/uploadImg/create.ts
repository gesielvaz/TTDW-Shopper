import { UploadImg } from "../../entities/uploadImg";
import { IUpdateImg } from "../../interface/IUploadImg";
import { UploadImgRepository } from "../../repositories/repositories";


export const PutUploadImgServices = async (data: IUpdateImg) => {
 
  const insert_data = UploadImgRepository().create(data);

  await UploadImgRepository().save(insert_data);

  return "Created Successfully";
};
