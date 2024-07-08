import { BookmarkAllData } from "@/types";
import dynamic from "next/dynamic";
import React from "react";

const BookmarkCard = dynamic(
  () => import("@/components/bookmark/BookmarkCard")
);

type Props = {
  className?: string;
  bookmarks: BookmarkAllData[];
};

const BookmarkList = ({ bookmarks, className = "" }: Props) => {
  return (
    <ul className={`flex flex-wrap gap-8 ${className}`}>
      {bookmarks?.map((bookmark) => (
        <li key={bookmark.id}>
          <BookmarkCard bookmark={bookmark} />
        </li>
      ))}
    </ul>
  );
};

export default BookmarkList;
