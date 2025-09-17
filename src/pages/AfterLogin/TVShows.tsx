import Row from "@/components/Row";
import React from "react";
import requests from "@/features/services/utils";

import VideoComp from "@/components/VideoComp";

const TVShows:React.FC = () => {
  return (
    <div className="bg-black">
      <VideoComp
        src="/'I'll Be There For You' (Friends Theme Song).mp4"
        title="F.R.I.E.N.D.S"
        description="Friends is a classic American sitcom that aired from 1994 to 2004, focusing on a group of six friends—Rachel, Ross, Monica, Chandler, Joey, and Phoebe—living in New York City."
      />
      <div className="mt-5 ml-10 mr-10">
        <Row title="Popular TV Shows" fetchUrl={requests.fetchPopularTV} />
        <Row title="Top Rated TV Shows" fetchUrl={requests.fetchTopRatedTV} />
        <Row title="On the Air now" fetchUrl={requests.fetchOnTheAir} />
        <Row title="Airing Today" fetchUrl={requests.fetchAiringToday} />
      </div>
    </div>
  );
};

export default TVShows;
