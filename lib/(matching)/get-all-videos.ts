import { db } from "@/lib/db";

type Params = {
  q?: string;
};

export const getAllVideos = async (params: Params) => {
  try {
    // 1)
    const videos = await db.video.findMany({
      ...(params?.q
        ? {
            where: {
              title: {
                contains: params?.q,
              },
            },
          }
        : {}),
    });

    // 2)
    return videos;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};
