const SearchInput = () => {
  return (
    <div className="flex items-center mt-6">
      <input
        type="text"
        placeholder="Search for products"
        className="flex-1 border border-black rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="bg-gray-900 border-black text-black font-medium py-2 px-6 rounded-r-md transition">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
