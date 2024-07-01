import { create } from "zustand";

import { matchingsDummy } from "@/constants/matchings";
import Cookies from "js-cookie";
import { BookmarkWithAllDataType } from "@/types";

type FunctionParams = {
  matchingId: string;
  userId: string;
};

interface BookmarkStore {
  isMatchingInBookmark: (params: FunctionParams) => Promise<any>;
  removeFromBookmark: (params: FunctionParams) => Promise<any>;
  addToBookmark: (params: FunctionParams) => Promise<any>;
}

export const useBookmark = create<BookmarkStore>((set) => ({
  addToBookmark: async (params) => {
    try {
      /**  await db.bookmark.create({
        data: {
          userId: params.userId,
          matchingId: params.matchingId,
        },
      }); */

      const bookmarkCookie = Cookies.get("bookmark");

      let dummyBookmarks = bookmarkCookie ? JSON.parse(bookmarkCookie) : [];

      const matchingFound = matchingsDummy.find(
        (matching) => matching.id === params.matchingId
      );
      if (!matchingFound) throw new Error("Cannot found matching");

      dummyBookmarks.push({
        id: Math.random().toString(),
        userId: "1",
        matching: matchingFound,
        matchingId: matchingFound.id,
      });

      Cookies.set("bookmark", JSON.stringify(dummyBookmarks));
    } catch {
      throw new Error("Something went wrong");
    }
  },
  removeFromBookmark: async (params) => {
    try {
      /**   await db.bookmark.deleteMany({
        where: {
          userId: params.userId,
          matchingId: params.matchingId,
        },
      }); */ const bookmarkCookie = Cookies.get("bookmark");

      let dummyBookmarks = bookmarkCookie ? JSON.parse(bookmarkCookie) : [];

      dummyBookmarks = dummyBookmarks.filter(
        (bookmark: BookmarkWithAllDataType) =>
          bookmark.matchingId !== params.matchingId
      );
      Cookies.set("bookmark", JSON.stringify(dummyBookmarks));
    } catch {
      throw new Error("Something went wrong");
    }
  },
  isMatchingInBookmark: async (params) => {
    try {
      /**  const bookmarkFound = await db.bookmark.findFirst({
        where: {
          userId: params.userId,
          matchingId: params.matchingId,
        },
      }); */
      const bookmarkCookie = Cookies.get("bookmark");

      let dummyBookmarks = bookmarkCookie ? JSON.parse(bookmarkCookie) : [];
      const bookmarkFound = dummyBookmarks.find(
        (bookmark: BookmarkWithAllDataType) =>
          bookmark.matchingId === params.matchingId
      );

      return bookmarkFound ? true : false;
    } catch {
      return null;
    }
  },
}));
