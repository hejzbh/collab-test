import axios from "axios";

export const uploadFile = async (file: File) => {
  try {
    // 1) Make call to get presigned url
    const presignedUrlResponse = await axios.get(
      "https://ro5dfslqq6.execute-api.us-east-1.amazonaws.com" // todo: move to env
    );

    const presignedUrl = presignedUrlResponse?.data;

    if (!presignedUrl) throw new Error("Could not get presigned url");

    // 2) Upload file on presigned url
    await axios.put(presignedUrl, file);

    const imageUrl = presignedUrl.split("?")[0];

    return imageUrl;
  } catch (err: any) {
    throw new Error("Error while uploading file");
  }
};
