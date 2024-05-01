import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
  const user = auth();
  return (
    <main>
      <h1>User ID: {user?.userId}</h1>
    </main>
  );
}
