import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 w-full sm:max-w-md md:max-w-lg"
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
        className="w-full p-2 rounded bg-gray-800 text-white outline-none text-sm sm:text-base"
      />
      <button
        type="submit"
        className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded text-sm sm:text-base"
      >
        Search
      </button>

      {/* Optional close button when used inside header */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 hover:text-white text-lg sm:text-xl ml-1"
        >
          ✕
        </button>
      )}
    </form>
  );
};

export default SearchBar;
