import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    // 1) Extracting data from request body
    const {
      data: { youtubeLink },
    } = await req.json();

    // 2) Checking if data is missing
    if (!youtubeLink)
      return new NextResponse("Data is missing", {
        status: 400,
      });

    // 3) Get current user
    const user = await currentUser();

    // 4) Throw error if there is no user (Impossible, but to make sure we have that.)
    if (!user) throw new Error("Unauthorized");

    // 6) Posting video to backend
    const video = await axios.post(
      process.env.NEXT_PUBLIC_AWS_VIDEO_URL + "/video",
      { youtubeLink }
    );

    // 6) Returning JSON response with the uploaded video
    return NextResponse.json(video);
  } catch (err: any) {
    // Handling errors
    return new NextResponse(err.message, { status: 400 });
  }
}
