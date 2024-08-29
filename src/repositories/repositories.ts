import { Register } from "../entities/register";
import { IRegister } from "../interface/IRegister";

export const RegisterRepository = (insertData?: IRegister) => {
  return Register.getRepository();
};

