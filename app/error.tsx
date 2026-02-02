'use client';

// Component name changed from Error → ErrorFallback
export default function ErrorFallback({
  error,
  reset,
}: {
  error: Error; // JS built-in Error type
  reset: () => void;
}) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-2xl font-semibold text-red-600">
        Oops! Something went wrong 😕
      </h2>

      <p className="text-gray-600 mt-2">
        We couldn’t load your groceries right now.
      </p>

      <button
        onClick={reset}
        className="mt-4 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Try Again
      </button>
    </div>
  );
}
