"use client";
import React, { useEffect, useState } from "react";
import { BookmarkIcon, BookmarkCheck } from "lucide-react";
import { addToBookmark } from "@/lib/(bookmark)/add-to-bookmark";
import { useUser } from "@clerk/nextjs";
import { isMatchingBookmarked } from "@/lib/(bookmark)/is-matching-bookmarked";
import { removeFromBookmark } from "@/lib/(bookmark)/remove-from-bookmark";

type Props = {
  className?: string;
  matchingId: string;
};

const BookmarkButton = ({ className = "", matchingId }: Props) => {
  const { user } = useUser();
  const [isBookmarked, setIsBookmarked] = useState<boolean | undefined>();

  useEffect(() => {
    if (!matchingId || !user?.id) return;

    isMatchingBookmarked({ matchingId, userId: user?.id }).then(
      setIsBookmarked
    );
  }, [matchingId, user?.id]); // eslint-disable-line

  async function onClick() {
    if (!user) return;

    if (isBookmarked) {
      removeFromBookmark({ matchingId, userId: user?.id }).then(() =>
        setIsBookmarked(false)
      );
    } else {
      addToBookmark({ matchingId, userId: user?.id }).then(() =>
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
