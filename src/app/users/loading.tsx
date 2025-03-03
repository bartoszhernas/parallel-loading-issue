export default async function Loading() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="h-full w-1/2 bg-red-500"></div>
  );
}
