import Link from "next/link";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-2xl font-bold">Users</h1>
      <Link href="/users/1">User One</Link>
    </div>
  );
}
