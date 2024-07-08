import { db } from "@/lib/db";
import { ClipWithAWSData, MatchingAllData, VideoWithAWSData } from "@/types";
import axios from "axios";

type Params = {
  clipId: string;
  videoId: string;
};

export const getMatchingDetails = async (params: Params) => {
  try {
    // 1) Get details from Mongo
    let matching = await db.matching.findFirst({
      where: {
        clipId: params.clipId,
        videoId: params.videoId,
      },
      include: {
        video: true,
        clip: true,
      },
    });

    // 2) In case there is no matching
    if (!matching) throw new Error("Matching cannot be found");

    // 3) Find aws data for video/clip
    const [awsClipResponse, awsVideoResponse] = await Promise.all([
      axios.post(
        process.env.NEXT_PUBLIC_AWS_VIDEO_URL + "/s3/" + matching.clip.awsKey
      ),
      axios.post(
        process.env.NEXT_PUBLIC_AWS_VIDEO_URL + "/s3/" + matching.video.awsKey
      ),
    ]);

    (matching.clip as ClipWithAWSData).awsClipUrl = awsClipResponse?.data?.url;
    (matching.video as VideoWithAWSData).awsVideoUrl =
      awsVideoResponse?.data?.url;

    // 4) Return
    return matching as MatchingAllData;
  } catch (err: any) {
    throw new Error(err?.reseponse?.data.message || err?.message);
  }
};
