import { UploadVideoFormData } from "@/components/forms/UploadVideoForm";
import { uploadFile } from "./upload-file";

export const uploadClip = async (data: UploadVideoFormData) => {
  try {
    if (!data?.file) return;

    await uploadFile(data?.file);
  } catch {
    throw new Error("Error while uploading clip");
  }
};
