export default async function Loading() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="h-full w-1/2 bg-blue-500"></div>
  );
}
