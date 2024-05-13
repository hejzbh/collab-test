import axios from "axios";

export const uploadFile = async (file: File) => {
  try {
    // 1) Make call to get presigned url
    const presignedDataResponse = await axios.get(
      "https://ro5dfslqq6.execute-api.us-east-1.amazonaws.com/video" // todo: move to env
    );

    const presignedData = presignedDataResponse?.data;

    if (!presignedData) throw new Error("Could not get presigned url");

    const { url, id } = presignedData;

    // 2) Upload file on presigned url
    await axios.put(url, file);

    // 3) Get uploaded file id
    const fileData = await axios.post(
      "https://ro5dfslqq6.execute-api.us-east-1.amazonaws.com/video",
      {
        id,
      }
    );

    const fileId = fileData.data;

    return fileId;
  } catch (err: any) {
    throw new Error("Error while uploading file");
  }
};
