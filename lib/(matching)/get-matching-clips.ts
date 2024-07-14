"use server";
import { db } from "@/lib/db";
import { currentUser as clerkCurrentUser } from "@clerk/nextjs/server";

type Params = {
  videoId: string;
};

export const getMatchingClips = async (params: Params) => {
  try {
    // 1)
    const currentUser = await clerkCurrentUser();

    if (!currentUser) throw new Error("Unauthorized");

    // 2)
    const matchings = await db.matching.findMany({
      where: {
        videoId: params.videoId,
        clip: {
          userId: currentUser.id,
        },
      },
      include: {
        clip: true,
      },
    });

    // 3)
    const matchingClips = matchings?.map((matching) => matching.clip);

    // 4)
    return matchingClips;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};
