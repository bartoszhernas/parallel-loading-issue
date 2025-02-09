export const dynamic = 'force-dynamic';

export default async function Page() {
  // form with user info in it
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold">Edit User</h1>
    </div>
  );
}
