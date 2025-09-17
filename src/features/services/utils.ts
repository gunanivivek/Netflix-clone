const requests = {
  fetchTrending: `/trending/all/week`,
  fetchNetflixOriginals: `/discover/tv?with_networks=213`,

  fetchTopRated: `/movie/top_rated`,
  fetchUpcoming: `/movie/upcoming`,
  fetchNowPlaying: `/movie/now_playing`,
  fetchPopularMovies: `/movie/popular`,

  fetchActionMovies: `/discover/movie?with_genres=28`,
  fetchAdventureMovies: `/discover/movie?with_genres=12`,
  fetchAnimationMovies: `/discover/movie?with_genres=16`,
  fetchComedyMovies: `/discover/movie?with_genres=35`,
  fetchCrimeMovies: `/discover/movie?with_genres=80`,
  fetchDocumentaries: `/discover/movie?with_genres=99`,
  fetchDramaMovies: `/discover/movie?with_genres=18`,
  fetchFamilyMovies: `/discover/movie?with_genres=10751`,
  fetchFantasyMovies: `/discover/movie?with_genres=14`,
  fetchHistoryMovies: `/discover/movie?with_genres=36`,
  fetchHorrorMovies: `/discover/movie?with_genres=27`,
  fetchMusicMovies: `/discover/movie?with_genres=10402`,
  fetchMysteryMovies: `/discover/movie?with_genres=9648`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749`,
  fetchScienceFiction: `/discover/movie?with_genres=878`,
  fetchTVMovies: `/discover/movie?with_genres=10770`,
  fetchThrillerMovies: `/discover/movie?with_genres=53`,
  fetchWarMovies: `/discover/movie?with_genres=10752`,
  fetchWesternMovies: `/discover/movie?with_genres=37`,

  fetchPopularTV: `/tv/popular`,
  fetchTopRatedTV: `/tv/top_rated`,
  fetchAiringToday: `/tv/airing_today`,
  fetchOnTheAir: `/tv/on_the_air`,


  fetchMoviesByLanguage: (lang: string, sort: string = "popularity.desc") =>
    `/discover/movie?with_original_language=${lang}&sort_by=${sort}`,
  fetchTVByLanguage: (lang: string, sort: string = "popularity.desc") =>
    `/discover/tv?with_original_language=${lang}&sort_by=${sort}`,
};

export default requests;
