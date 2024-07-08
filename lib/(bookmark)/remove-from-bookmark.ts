"use server";
import { db } from "@/lib/db";

type Params = {
  matchingId: string;
  userId: string;
};

export const removeFromBookmark = async (params: Params) => {
  try {
    await db.bookmark.deleteMany({
      where: {
        userId: params.userId,
        matchingId: params.matchingId,
      },
    });
  } catch (err: any) {
    throw new Error(err.message);
  }
};
