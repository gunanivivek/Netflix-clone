import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Play, Plus, ThumbsUp, Volume2, X } from "lucide-react";
import tmdb from "@/features/services/tmdb";
import VideoPlayer from "./VideoPLayer";

interface MovieModalProps {
  movieId: number;
  mediaType: "movie" | "tv";
  onClose: () => void;
}

interface MovieDetails {
  id: number;
  title?: string;
  name?: string;
  original_name?: string;
  overview?: string;
  backdrop_path?: string;
  poster_path?: string;
  genres?: { id: number; name: string }[];
  release_date?: string;
  first_air_date?: string;
  vote_average?: number;
  original_language?: string;
  runtime?: number;
  number_of_seasons?: number;
  number_of_episodes?: number;
  cast?: { name: string }[];
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieModal: React.FC<MovieModalProps> = ({
  movieId,
  mediaType,
  onClose,
}) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [cast, setCast] = useState<string>("");
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await tmdb.get(`/${mediaType}/${movieId}`);
        setMovie(res.data);

        // Fetch cast
        const credits = await tmdb.get(`/${mediaType}/${movieId}/credits`);
        const castNames = credits.data.cast
          .slice(0, 5)
          .map((c: { name: string }) => c.name)
          .join(", ");
        setCast(castNames);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovieDetails();
  }, [movieId, mediaType]);

  if (!movie) return null;

  if (showPlayer) {
    return ReactDOM.createPortal(
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <VideoPlayer
          sources={[
            "/Jolly LLB 3 _ Trailer _ Akshay Kumar _ Arshad Warsi _ Subhash Kapoor _ In Cinemas 19th September.mp4",
            "/THE BENGAL FILES Official Trailer _ Vivek Agnihotri _ Abhishek A _ Pallavi J _ Zee Studios _ 5 Sept.mp4",
            "/WAR 2 _ Official Trailer _ Hrithik Roshan _ NTR _ Kiara Advani _ Ayan Mukerji _ YRF Spy Universe.mp4",
            "/'I'll Be There For You' (Friends Theme Song).mp4"
          ]}
        />
        <button
          onClick={() => setShowPlayer(false)}
          className="absolute top-5 right-5 bg-black/60 text-white px-4 py-2 rounded hover:bg-black/80 transition"
        >
          ✕
        </button>
      </div>,
      document.body
    );
  }

  const releaseDate = movie.release_date || movie.first_air_date || "N/A";
  const duration = movie.runtime
    ? `${movie.runtime}m`
    : movie.number_of_episodes
    ? `${movie.number_of_episodes} episodes`
    : "N/A";

  return ReactDOM.createPortal(
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/80 z-40" onClick={onClose}></div>

      {/* Modal container */}
      <div className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-7xl -translate-x-1/2 -translate-y-1/2 bg-black rounded-xl shadow-2xl text-white flex flex-col md:flex-row max-h-[85vh] overflow-hidden">
        {/* Left poster/backdrop */}
        <div className="relative md:w-1/2 h-72 md:h-auto flex-shrink-0">
          <img
            src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
            alt={movie.title || movie.name || movie.original_name}
            className="w-full h-full object-cover"
          />
          {/* Voice icon */}
          <button className="absolute bottom-3 right-3 bg-black/50 p-2 rounded-full hover:bg-black/70 transition">
            <Volume2 size={20} />
          </button>
        </div>

        {/* Right content */}
        <div className="p-6 flex-1 overflow-y-auto">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-4">
            {movie.title || movie.name || movie.original_name}
          </h2>

          {/* Action buttons */}
          <div className="flex gap-4 mb-4">
            <button
              className="bg-white text-black px-6 py-2 rounded-md flex items-center gap-2 font-semibold hover:bg-gray-200 transition"
              onClick={() => setShowPlayer(!showPlayer)}
            >
              <Play size={20} /> Play
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold hover:bg-gray-600 transition">
              <Plus size={20} />
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold hover:bg-gray-600 transition">
              <ThumbsUp size={20} />
            </button>
          </div>
          

          {/* Movie metadata */}
          <div className="text-gray-400 text-sm mb-4 space-y-1">
            <p>
              {releaseDate} | {duration} | Rating:{" "}
              {movie.vote_average?.toFixed(1) || "N/A"}
            </p>
            <p>Cast: {cast}</p>
            <p>Genres: {movie.genres?.map((g) => g.name).join(", ")}</p>
            <p>Language: {movie.original_language?.toUpperCase()}</p>
          </div>

          {/* Overview */}
          <p className="text-gray-300">
            {movie.overview || "No overview available."}
          </p>
        </div>

        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-white text-3xl font-bold z-50 hover:text-gray-300 transition"
          onClick={onClose}
        >
          <X size={30} />
        </button>
      </div>
    </>,
    document.body
  );
};

export default MovieModal;
