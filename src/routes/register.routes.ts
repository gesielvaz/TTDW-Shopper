import { Router } from "express";

import { ValidadeRegister } from "../validation/register/registerCreate";
import { Create } from "../controllers/registerControllers";

const router = Router();

router.put("/", ValidadeRegister, Create);


export default router;
