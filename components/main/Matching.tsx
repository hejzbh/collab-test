import { HomePageProps } from "@/app/(main)/page";
import dynamic from "next/dynamic";
import React from "react";

// Props
interface MatchingProps {
  searchParams: HomePageProps["searchParams"];
}

const Matching = ({ searchParams }: MatchingProps) => {
  // 1) User didnt select video
  if (!searchParams.selectedVideoId) {
    const NotSelectedBanner = dynamic(
      () => import("@/components/banners/NotSelectedBanner"),
      { loading: () => null }
    );

    return (
      <NotSelectedBanner
        title="Please choose one of the videos"
        description="Here will appear a comparison between the clip and video you've chosen"
      />
    );
  }

  return <div>Matching</div>;
};

export default Matching;
