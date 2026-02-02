'use client';

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center px-6 shadow-md bg-white">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
        <span className="text-blue-600">MIN</span>
        <span className="text-red-500">MART</span>
      </h1>

      <nav className="flex items-center flex-1 justify-between ml-8 text-black">
        <button className="flex items-center gap-1 px-3 py-2 border rounded-md hover:bg-gray-100">
          <span>Select Location</span>
        </button>

        <input
          type="text"
          placeholder="Search for products..."
          className="w-full max-w-xl px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-500"
        />

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer font-medium">
            <span className="text-xl">🛒</span>
            <span>Cart</span>
          </div>

          <span className="cursor-pointer font-medium">Login</span>
        </div>
      </nav>
    </header>
  );
}
