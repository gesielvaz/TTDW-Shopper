import fs from 'fs';
import path from 'path';

export async function saveBase64Image(base64Image: string): Promise<string> {
    try {
        const base64Data = base64Image.replace(/^data:image\/png;base64,/, '');
        const fileName = `${Date.now()}.png`;
        const filePath = path.join(__dirname, '../../uploads/', fileName);

        await fs.promises.writeFile(filePath, base64Data, 'base64');

        return filePath;
    } catch (error) {
        console.error("Error saving base64 image: ", error);
        throw new Error("Failed to save image.");
    }
}
