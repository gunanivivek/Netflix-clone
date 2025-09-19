import Row from "@/components/Row";
import requests from "@/features/services/utils";
import React, { useState } from "react";

const languages = [
  { code: "hi", label: "Hindi" },
  { code: "ta", label: "Tamil" },
  { code: "ko", label: "Korean" },
  { code: "ja", label: "Japanese" },
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
];

const preferences = [
  { idx: 1, label: "Original Languages" },
  { idx: 2, label: "Dubbing" },
  { idx: 3, label: "Subtitles" },
];

const suggestions = [
  { idx: 1, label: "Suggestions for you" },
  { idx: 2, label: "Year Released" },
  { idx: 3, label: "A-Z" },
  { idx: 4, label: "Z-A" },
];

const BrowseByLang: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState("hi");
  const [preference, setPreference] = useState("Original Languages");
  const [suggestion, setSuggestion] = useState("Suggestions for you");

  

  return (
    <div className="bg-black min-h-screen px-4 sm:px-6 lg:px-10 py-6">
      {/* Header Row: Title + Dropdowns */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 mt-15">
        {/* Title */}
        <h1 className="text-white text-2xl sm:text-3xl font-light">
          Browse by Languages
        </h1>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mr-0 sm:mr-5 w-full sm:w-auto">
          {/* Preferences */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <h3 className="text-base sm:text-lg font-light whitespace-nowrap">
              Select your preferences
            </h3>
            <select
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              className="flex-1 sm:flex-none px-2 py-1 bg-black text-white text-sm sm:text-base outline outline-white font-medium"
            >
              {preferences.map((pref) => (
                <option key={pref.idx} value={pref.idx}>
                  {pref.label}
                </option>
              ))}
            </select>
          </div>

          {/* Language Selector */}
          <div className="w-full sm:w-auto overflow-x-auto">
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="w-full sm:w-auto px-2 py-1 bg-black text-white text-sm sm:text-base outline outline-white font-medium min-w-[180px]"
              size={1} 
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
          {/* Sort By */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <h3 className="text-base sm:text-lg font-light whitespace-nowrap">
              Sort by
            </h3>
            <select
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="flex-1 sm:flex-none px-2 py-1 bg-black text-white text-sm sm:text-base outline outline-white font-medium"
            >
              {suggestions.map((sug) => (
                <option key={sug.idx} value={sug.idx}>
                  {sug.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      
      <div className="space-y-8">
        <Row
          title="Top Rated"
          fetchUrl={requests.fetchMoviesByLanguage(
            selectedLang,
            "vote_average.desc"
          )}
        />
        <Row
          title="Latest Releases"
          fetchUrl={requests.fetchMoviesByLanguage(
            selectedLang,
            "release_date.desc"
          )}
        />
        <Row
          title="TV Shows"
          fetchUrl={requests.fetchTVByLanguage(selectedLang)}
        />
      </div>
    </div>
  );
};

export default BrowseByLang;
