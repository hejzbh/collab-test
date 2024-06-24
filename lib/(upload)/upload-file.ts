import axios from "axios";

export const uploadFile = async (file: File) => {
  try {
    // 1) Make call to get presigned url
    const presignedDataResponse = await axios.get(
      process.env.NEXT_PUBLIC_AWS_VIDEO_URL! + "mp4" + "/clip" //todo
    );

    const presignedData = presignedDataResponse?.data;

    if (!presignedData) throw new Error("Could not get presigned url");

    const { key, url } = presignedData;

    await axios.put(url, file);

    return key;
  } catch (err: any) {
    throw new Error("Error while uploading file");
  }
};
