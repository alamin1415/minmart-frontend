export default function Loading() {
  return (
    <div className="p-4 animate-pulse">
      {/* Banner */}
      <div className="h-32 bg-gray-200 rounded-lg mb-6"></div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border rounded-lg p-3 space-y-3">
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
