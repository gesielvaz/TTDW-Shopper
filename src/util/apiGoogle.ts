import { GoogleAIFileManager } from '@google/generative-ai/server';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not defined in the environment variables.");
}
const fileManager = new GoogleAIFileManager(apiKey);


export async function uploadFile(filePath: string, mimeType: string, displayName: string) {
    try {
        const uploadResponse = await fileManager.uploadFile(filePath, {
            mimeType: mimeType,
            displayName: displayName,
        });
        console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`);
        return uploadResponse.file.uri;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error("Failed to upload the file.");
    }
}
