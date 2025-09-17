import Row from "@/components/Row";
import React from "react";
import requests from "@/features/services/utils";

import VideoComp from "@/components/VideoComp";

const Browse:React.FC = () => {
  
  return (
    <div className="bg-black">
      <VideoComp
        src="/WAR 2 _ Official Trailer _ Hrithik Roshan _ NTR _ Kiara Advani _ Ayan Mukerji _ YRF Spy Universe.mp4"
        title="War 2"
        description="War 2 is an action spy film where former agent Kabir is declared a traitor by India, and a ruthless new agent, Vikram, is sent to hunt him down as both heroes face a powerful, shadowy organization threatening the nation's stability. "
      />
      <div className="mt-5 ml-10 mr-10">
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
