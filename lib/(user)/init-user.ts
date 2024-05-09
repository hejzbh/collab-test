import { currentUser as clerkCurrentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const initUser = async function () {
  try {
    // 1)
    const clerkUser = await clerkCurrentUser();

    if (!clerkUser) throw new Error("Unauthorized");

    // 2) Initialize logged in user to database if user is not initialized yet

    const user = await db.user.upsert({
      where: {
        id: clerkUser.id,
      },
      create: {
        id: clerkUser.id,
        email: clerkUser.primaryEmailAddress?.emailAddress + "",
      },
      update: { email: clerkUser.primaryEmailAddress?.emailAddress + "" },
    });

    return user;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
