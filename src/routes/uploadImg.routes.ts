import { Router } from "express";
import { ValidadeUploadImg } from "../validation/uploadImg/putUploadImg";
import { postUploadImg } from "../controllers/uploadImgControllers";

const router = Router();

router.put("/", ValidadeUploadImg, postUploadImg);


export default router;
