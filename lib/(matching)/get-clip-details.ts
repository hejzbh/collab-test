import { db } from "@/lib/db";
import { ClipWithAWSData } from "@/types";
import axios from "axios";

export const getClipDetails = async (clipId: string) => {
  try {
    // 1) Get details from Mongo
    const clip = await db.clip.findUnique({
      where: {
        id: clipId,
      },
    });

    // 2) In case there is no clip
    if (!clip) throw new Error("Clip cannot be found");

    // 3) Find aws clip url
    const awsClipUrlResponse = await axios.post(
      process.env.NEXT_PUBLIC_AWS_VIDEO_URL + "/s3/" + clip.awsKey
    );

    // 4) Return
    return {
      ...clip,
      awsClipUrl: awsClipUrlResponse?.data?.url,
    } as ClipWithAWSData;
  } catch (err: any) {
    throw new Error(err?.reseponse?.data.message || err?.message);
  }
};
