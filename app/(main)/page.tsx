import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function HomePage() {
  const user = auth();
  return (
    <main>
      <h1>User ID: {user?.userId}</h1>
      <UserButton
        appearance={{
          elements: {
            avatarBox: {
              width: 50,
              height: 50,
            },
          },
        }}
      />
    </main>
  );
}
