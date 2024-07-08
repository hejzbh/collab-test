"use server";

import { currentUser as clerkCurrentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

type Params = {
  q?: string;
  sortDirection?: "asc" | "desc";
};

export const getUserClips = async (params: Params) => {
  try {
    const currentUser = await clerkCurrentUser();

    if (!currentUser) throw new Error("Unauthorized");

    const clips = await db.clip.findMany({
      where: {
        userId: currentUser?.id,

        ...(params?.q
          ? {
              title: {
                contains: params?.q,
              },
            }
          : {}),
      },
      orderBy: {
        createdAt: params.sortDirection,
      },
    });

    return clips;
  } catch (err: any) {
    throw new Error(err.response.data.message || err.message);
  }
};
