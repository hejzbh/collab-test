"use server";
import { db } from "@/lib/db";

type Params = {
  matchingId: string;
  userId: string;
};

export const isMatchingBookmarked = async (params: Params) => {
  try {
    const bookmarkFound = await db.bookmark.findFirst({
      where: {
        userId: params.userId,
        matchingId: params.matchingId,
      },
    });

    return bookmarkFound ? true : false;
  } catch {
    return false;
  }
};
