import axios from "axios";

export const uploadFile = async (file: File) => {
  try {
    // 1) Make call to get presigned url
    const presignedDataResponse = await axios.get(
      process.env.NEXT_PUBLIC_AWS_VIDEO_URL!
    );

    const presignedData = presignedDataResponse?.data;

    if (!presignedData) throw new Error("Could not get presigned url");

    const { url, id } = presignedData;

    // 2) Upload file on presigned url
    await axios.put(url, file);

    // 3) Get uploaded file id
    const fileData = await axios.post(process.env.NEXT_PUBLIC_AWS_VIDEO_URL!, {
      id,
    });

    const fileId = fileData.data;

    return fileId;
  } catch (err: any) {
    throw new Error("Error while uploading file");
  }
};
