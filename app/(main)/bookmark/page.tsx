import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import dynamic from "next/dynamic";
import { getUserBookmark } from "@/lib/(user)/get-user-bookmark";

const BookmarksList = dynamic(
  () => import("@/components/bookmark/BookmarkList")
);

async function getBookmarks() {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  const data = await getUserBookmark(user.id);

  return data;
}

const BookmarkPage = async () => {
  const { bookmarks } = await getBookmarks();

  if (!bookmarks || (bookmarks && !bookmarks.length)) {
    const NoResultsBanner = dynamic(
      () => import("@/components/banners/NoResultsBanner"),
      { loading: () => null }
    );

    return <NoResultsBanner title="You have no saved matches" description="" />;
  }

  return (
    <div className="p-2 md:p-10">
      <BookmarksList bookmarks={bookmarks} />
    </div>
  );
};

export default BookmarkPage;
