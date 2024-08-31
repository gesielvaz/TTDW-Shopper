
import { v4 as uuidv4 } from 'uuid';
import { saveBase64Image } from '../../util/base64Img';
import { RegisterRepository } from '../../repositories/repositories';
import { IRegister } from '../../interface/IRegister';
import { uploadFile } from '../../util/apiGoogle';



export async function RegisterServices(data: IRegister) {
    const { image, customer_code, measure_datetime, measure_type } = data;

    try {
        const imagePath = await saveBase64Image(image);
        const imageUri = await uploadFile(imagePath, "image/jpeg", "Customer Image");
        const guid = uuidv4();

        const registerRepository = RegisterRepository();
        const newRegister = registerRepository.create({
            image: imageUri,
            customer_code,
            measure_datetime,
            measure_type,
            guid
        });

        await registerRepository.save(newRegister);
        return {
            image: imageUri,
            guid,
        };
    } catch (error) {
        console.error("Error in RegisterServices: ", error);
        throw new Error("Failed to register the reading.");
    }
}
