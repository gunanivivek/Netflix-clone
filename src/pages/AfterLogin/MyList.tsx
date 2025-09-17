import Row from "@/components/Row";
import React from "react";
import requests from "@/features/services/utils";

const MyList: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="mt-20 ml-10 mr-10 py-5 px-5">
        <h3 className="font-semibold text-4xl justify-items-start ml-15 mb-20">
          My List
        </h3>
        <div className="px-5 space-y-20">
          <Row title="" fetchUrl={requests.fetchTrending} />
          <Row title="" fetchUrl={requests.fetchTopRated} />
          <Row title="" fetchUrl={requests.fetchNowPlaying} />
          <Row title="" fetchUrl={requests.fetchNetflixOriginals} />
          <Row title="" fetchUrl={requests.fetchPopularMovies} />
        </div>
      </div>
    </div>
  );
};

export default MyList;
