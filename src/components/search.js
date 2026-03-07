const Search = ({ value, setValue, handler }) => {
  return (
    <div className="flex items-center gap-0 justify-center">
      <div className="relative flex-1 max-w-xl group">
        {/* Search Icon */}
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-300 transition-colors duration-200 group-focus-within:text-rose-500 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>

        <input
          type="text"
          value={value}
          onChange={setValue}
          placeholder="Search by title..."
          className="w-full h-12 pl-11 pr-4 bg-white border-2 border-rose-100 rounded-l-2xl text-sm text-gray-700 placeholder-rose-200 outline-none transition-all duration-200 focus:border-rose-400 focus:shadow-[0_0_0_3px_rgba(254,158,199,0.2)] shadow-sm"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        />
      </div>

      <button
        type="button"
        onClick={handler}
        className="h-12 px-3 bg-[#fe9ec7] hover:bg-[#fd7fb8] active:bg-[#fc60a9] text-white text-sm font-semibold rounded-r-2xl transition-all duration-150 shadow-sm hover:shadow-md active:scale-95 tracking-wide"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
