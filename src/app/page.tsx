export const dynamic = 'force-dynamic';

import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/users/1">Users 1 Edit</Link>
    </main>
  );
}
