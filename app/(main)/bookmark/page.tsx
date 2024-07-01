import React from "react";
import { getUserBookmark } from "@/lib/(user)/get-user-bookmark";
import { currentUser } from "@clerk/nextjs/server";
import dynamic from "next/dynamic";

const BookmarksList = dynamic(
  () => import("@/components/bookmark/BookmarkList")
);

async function getBookmarks() {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  const bookmarks = await getUserBookmark(user.id);

  /**await db.bookmark.findMany({
    where: {
      userId: user?.id,
    },
  }); */
  return bookmarks;
}

const BookmarkPage = async () => {
  const bookmarks = await getBookmarks();

  if (!bookmarks || (bookmarks && !bookmarks.length)) {
    const NoResultsBanner = dynamic(
      () => import("@/components/banners/NoResultsBanner"),
      { loading: () => null }
    );

    return (
      <NoResultsBanner
        title="You don't have any saved matching"
        description=""
      />
    );
  }

  return (
    <div className="p-2 md:p-10">
      <BookmarksList bookmarks={bookmarks} />
    </div>
  );
};

export default BookmarkPage;
