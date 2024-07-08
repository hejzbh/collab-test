"use server";

import { BookmarkAllData } from "@/types";
import { db } from "@/lib/db";

export const getUserBookmark = async (userId: string) => {
  try {
    if (!userId) throw new Error("User ID is missing");

    const bookmarks = await db.bookmark.findMany({
      where: { userId },
      take: 20,
      include: {
        matching: {
          include: {
            video: true,
            clip: true,
          },
        },
      },
    });

    return {
      bookmarks: bookmarks as BookmarkAllData[],
    };
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};
