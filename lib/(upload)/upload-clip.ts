import { UploadClipFormData } from "@/components/forms/UploadClipForm";
import { uploadFile } from "./upload-file";

export const uploadClip = async (data: UploadClipFormData) => {
  try {
    // 1)
    if (!data?.file) throw new Error("Data is missing");

    // 2)
    const uploadedFileId = await uploadFile(data?.file);

    // 3)
    return uploadedFileId;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
