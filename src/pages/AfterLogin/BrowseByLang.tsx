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
    <div className="bg-black min-h-screen px-10 py-6">
      {/* Header Row: Title + Dropdown */}
      <div className="flex items-center justify-between mb-23 mt-17">
        <h1 className="text-white text-3xl font-light">Browse by Languages</h1>
        <div className="flex items-center justify-center gap-3 mr-5">
          <div className="flex items-center  justify-between gap-3">
            <h3 className="text-lg font-light">Select your preferences</h3>
            <select
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              className="px-2 py-1 pr-25 bg-black text-white text-base outline-white outline font-medium"
            >
              {preferences.map((pref) => (
                <option key={pref.idx} value={pref.idx}>
                  {pref.label}
                </option>
              ))}
            </select>
          </div>

          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="px-2 pr-25 py-1 bg-black text-white text-base text-start outline-white outline font-medium"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
          <div className="flex items-center justify-center gap-3">
            <h3 className="text-lg font-light">Sort by </h3>
            <select
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="px-2 py-1 pr-25 bg-black text-white text-base outline-white outline font-medium"
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

      {/* Rows */}
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
  );
};

export default BrowseByLang;
