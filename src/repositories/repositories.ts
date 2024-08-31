import { Register } from "../entities/register";

export const RegisterRepository = () => {
  return Register.getRepository();
};

