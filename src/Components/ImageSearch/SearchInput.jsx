const SearchInput = () => {
  return (
    <div className="flex items-center mt-6 overflow-hidden rounded-lg border border-gray-400 w-full max-w-md">
      <input
        type="text"
        placeholder="Search for products"
        className="flex-1 px-4 py-2 text-gray-700 focus:outline-none bg-white"
      />
      <button className="bg-gray-500 text-white font-semibold px-6 py-2">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
