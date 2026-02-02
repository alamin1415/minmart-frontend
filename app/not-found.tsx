import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold">404</h1>

      <p className="text-gray-600 mt-2">
        This page or product is out of stock 😅
      </p>

      <Link
        href="/"
        className="mt-4 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
