
import { IRegister } from "../../interface/IRegister";
import { RegisterRepository } from "../../repositories/repositories";


export const RegisterServices = async (data: IRegister) => {
 
  const insert_data = RegisterRepository().create(data);

  await RegisterRepository().save(insert_data);

  return "Created Successfully";
};
