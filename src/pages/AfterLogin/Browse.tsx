import Row from "@/components/Row";
import React from "react";
import requests from "@/features/services/utils";

import VideoComp from "@/components/VideoComp";

const Browse: React.FC = () => {
  
  return (
    <div className="bg-black">
      <VideoComp
        src="/Jolly LLB 3 _ Trailer _ Akshay Kumar _ Arshad Warsi _ Subhash Kapoor _ In Cinemas 19th September.mp4"
        title="Jolly LLB 3"
        description="Smart-alec Jolly Mishra and jugadu Jolly Tyagi clash in Judge Tripathi's court with witty banter, wild twists, and heartfelt chaos in this ultimate courtroom comedy."
      />
      <div className="mt-5 ml-10 mr-10 space-y-8">
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Now playing" fetchUrl={requests.fetchNowPlaying} />
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies} />
        
      </div>
    </div>
  );
};

export default Browse;
