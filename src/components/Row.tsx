import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import tmdb from "@/features/services/tmdb";
import MovieModal from "./MovieModal";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  original_name?: string;
  poster_path?: string;
  backdrop_path?: string;
  media_type?: "movie" | "tv";
}

interface Props {
  title: string;
  fetchUrl: string;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Row: React.FC<Props> = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState<{
    id: number;
    type: "movie" | "tv";
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await tmdb.get(fetchUrl);
        setMovies(res.data.results || []);
      } catch (error) {
        console.error("Error fetching movies: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchUrl]);

  const handleNext = () => {
    if (index < movies.length - 6) {
      setIndex((prev) => prev + 6);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => Math.max(prev - 6, 0));
    }
  };

  return (
    <div className="">
      <h2 className="text-white text-xl font-bold mb-3 px-4">{title}</h2>

      <div className="relative group px-4">
        {/* Prev Button */}
        {index > 0 && !loading && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
                       w-10 sm:w-14 h-[140px] 
                       bg-gradient-to-r from-black/90 to-transparent 
                       flex items-center justify-center rounded-l-md
                       opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition hover:cursor-pointer"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
        )}

        {/* Movie Grid */}
        <div className="overflow-hidden">
          <div
            className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[16.666%] gap-2 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * (100 / 6)}%)`,
            }}
          >
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-[140px] rounded-md bg-neutral-800 animate-pulse"
                  />
                ))
              : movies.map((movie) => (
                  <div
                    key={movie.id}
                    className="cursor-pointer relative"
                    onClick={() => {
                      if (movie.backdrop_path || movie.poster_path) {
                        setSelectedMovie({
                          id: movie.id,
                          type: movie.media_type || "movie",
                        });
                      }
                    }}
                  >
                    {movie.backdrop_path || movie.poster_path ? (
                      <img
                        src={`${IMAGE_BASE_URL}${
                          movie.backdrop_path || movie.poster_path
                        }`}
                        alt={movie.title || "Movie poster"}
                        className="w-full h-[140px] object-cover rounded-md"
                      />
                    ) : (
                      <div className="skeleton h-[140px] w-full rounded-md"></div>
                    )}
                  </div>
                ))}
          </div>
        </div>

        {/* Next Button */}
        {index < movies.length - 6 && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
                       w-10 sm:w-14 h-[140px] 
                       bg-gradient-to-l from-black/90 to-transparent 
                       flex items-center justify-center rounded-r-md
                        opacity-100 sm:opacity-0  sm:group-hover:opacity-100 transition hover:cursor-pointer"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        )}
      </div>

      {/* Movie Modal */}
      {selectedMovie && (
        <MovieModal
          movieId={selectedMovie.id}
          mediaType={selectedMovie.type}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Row;
