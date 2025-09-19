import SearchBar from "@/components/HeaderComp/SearchBar";
import Row from "@/components/Row";
import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  return (
    <div className="bg-black min-h-screen text-white py-20 px-15">
      <div className="mb-6">
        <SearchBar />
      </div>
      {}
      {query ? (
        <>
          <h2 className="text-2xl font-bold mb-6">
            Search Results for "{query}"
          </h2>
          {<Row title="" fetchUrl={`/search/movie?query=${query}`} />}
        </>
      ) : (
        <p>Type something to search...</p>
      )}
    </div>
  );
};

export default SearchResults;
