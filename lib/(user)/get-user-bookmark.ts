"use server";

import { BookmarkWithAllDataType } from "@/types";
import { cookies } from "next/headers";

export const getUserBookmark = async (userId: string) => {
  try {
    const cookieStore = cookies();
    const bookmarks: any = cookieStore.get("bookmark");
    console.log(userId);

    // TODO: Replace with db
    return bookmarks
      ? (JSON.parse(bookmarks?.value) as BookmarkWithAllDataType[])
      : [];
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};
