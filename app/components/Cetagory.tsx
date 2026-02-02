export default function Cetagory() {
  return (
    <div className="w-full h-12 flex items-center justify-center gap-6 px-4 bg-gray-100 text-black text-sm font-medium border-2 border-pink-200">
      {/* Logo / All Button */}
      <button className="px-3 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-600">
        All
      </button>

      {/* Category Buttons */}
      <button className="px-3 py-1 rounded-md hover:bg-pink-100">Cafe</button>
      <button className="px-3 py-1 rounded-md hover:bg-pink-100">Home</button>
      <button className="px-3 py-1 rounded-md hover:bg-pink-100">Toys</button>
      <button className="px-3 py-1 rounded-md hover:bg-pink-100">Fresh</button>
      <button className="px-3 py-1 rounded-md hover:bg-pink-100">
        Electronics
      </button>
      <button className="px-3 py-1 rounded-md hover:bg-pink-100">
        Mobiles
      </button>
      <button className="px-3 py-1 rounded-md hover:bg-pink-100">Beauty</button>
      <button className="px-3 py-1 rounded-md hover:bg-pink-100">
        Fashion
      </button>
    </div>
  );
}
