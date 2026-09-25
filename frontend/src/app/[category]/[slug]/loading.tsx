/* eslint-disable */
export default function Loading() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      <div className="space-y-4 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
      <div className="h-80 bg-gray-200 rounded-xl animate-pulse" />
    </main>
  );
}
