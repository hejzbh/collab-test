import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    // 1) Extracting data from request body
    const {
      data: { title, description, awsClipId },
    } = await req.json();

    // 2) Checking if data is missing
    if (!title || !awsClipId)
      return new NextResponse("Data is missing", {
        status: 400,
      });

    // 3) Get current user
    const user = await currentUser();

    // 4) Throw error if there is no user (Impossible, but to make sure we have that.)
    if (!user) throw new Error("Unauthorized");

    // 5) Get thumbnail (first frame) //clip_9bcf3b4a-e6ab-4894-8177-9671a6f14653.mp4_0.jpg TODO

    // 6) Creating a new clip in the database
    const clip = await db.clip.create({
      data: {
        awsKey: awsClipId,
        title,
        description,
        userId: user?.id,
        thumbnail: "",
      },
    });

    // 6) Returning JSON response with the created clip
    return NextResponse.json(clip);
  } catch (err: any) {
    // Handling errors
    return new NextResponse(err.message, { status: 400 });
  }
}
