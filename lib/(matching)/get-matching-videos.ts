import { db } from "@/lib/db";

type Params = {
  clipId: string;
};

export const getMatchingVideos = async (params: Params) => {
  try {
    // 1)
    const matchings = await db.matching.findMany({
      where: {
        clipId: params.clipId,
      },
      include: {
        video: true,
      },
    });

    // 2)
    const matchingVideos = matchings?.map((matching) => matching.video);

    // 3)
    return matchingVideos;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};
