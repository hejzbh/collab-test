"use server";

import { currentUser as clerkCurrentUser } from "@clerk/nextjs/server";
import { db } from "../db";

export const getUserClips = async () => {
  try {
    const currentUser = await clerkCurrentUser();

    const clips = await db.clip.findMany({
      where: {
        userId: currentUser?.id,
      },
    });

    return clips;
  } catch (err: any) {
    throw new Error(err.response.data.message || err.message);
  }
};
