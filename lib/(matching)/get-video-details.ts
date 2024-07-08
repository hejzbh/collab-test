import { db } from "@/lib/db";
import { VideoWithAWSData } from "@/types";
import axios from "axios";

export const getVideoDetails = async (videoId: string) => {
  try {
    // 1) Get details from Mongo
    const video = await db.video.findUnique({
      where: {
        id: videoId,
      },
    });

    // 2) In case there is no video
    if (!video) throw new Error("Video cannot be found");

    // 3) Find aws video url
    const awsVideoUrlResponse = await axios.post(
      process.env.NEXT_PUBLIC_AWS_VIDEO_URL + "/s3/" + video.awsKey
    );

    // 4) Return
    return {
      ...video,
      awsVideoUrl: awsVideoUrlResponse?.data?.url,
    } as VideoWithAWSData;
  } catch (err: any) {
    throw new Error(err?.reseponse?.data.message || err?.message);
  }
};
