"use client";
import React, { useEffect, useState } from "react";
import { BookmarkIcon, BookmarkCheck } from "lucide-react";
import { useBookmark } from "@/store/bookmark-store";

type Props = {
  className?: string;
  matchingId: string;
};

const BookmarkButton = ({ className = "", matchingId }: Props) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean | undefined>();
  const { isMatchingInBookmark, removeFromBookmark, addToBookmark } =
    useBookmark();

  useEffect(() => {
    if (!matchingId) return;
    isMatchingInBookmark({ matchingId, userId: "1" }).then(setIsBookmarked);
  }, [matchingId]);

  async function onClick() {
    if (isBookmarked) {
      removeFromBookmark({ matchingId, userId: "1" }).then(() =>
        setIsBookmarked(false)
      );
    } else {
      addToBookmark({ matchingId, userId: "1" }).then(() =>
        setIsBookmarked(true)
      );
    }
  }

  if (isBookmarked === undefined) return null;

  return (
    <button
      onClick={onClick}
      title={isBookmarked ? "Remove from bookmark" : "Add To Bookmark"}
      className={`${className}`}
    >
      {isBookmarked ? (
        <BookmarkCheck className="text-textColors-blue" size={30} />
      ) : (
        <BookmarkIcon className="text-textColors-secondary" size={30} />
      )}
    </button>
  );
};

export default BookmarkButton;
