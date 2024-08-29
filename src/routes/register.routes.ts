import { Router } from "express";
import { CreateRegister } from "../controllers/registerControllers";
import { ValidadeRegister } from "../validation/register/registerCreate";

const router = Router();

router.put("/", ValidadeRegister, CreateRegister);


export default router;
