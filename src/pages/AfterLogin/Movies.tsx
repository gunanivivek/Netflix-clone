import Row from "@/components/Row";
import React from "react";
import requests from "@/features/services/utils";

import VideoComp from "@/components/VideoComp";

const Movies:React.FC = () => {
  return (
    <div className="bg-black">
      <VideoComp
        src="/THE BENGAL FILES Official Trailer _ Vivek Agnihotri _ Abhishek A _ Pallavi J _ Zee Studios _ 5 Sept.mp4"
        title="The Bengal Files"
        description="The Bengal Files sheds light on the hidden history of the Hindu genocide in Bengal, including the harrowing events of The Direct Action Day, also known as the Great Calcutta Killings, and the Genocide of Noakhali."
      />
      <div className="mt-5 ml-10 mr-10">
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Top Rated" fetchUrl={requests.fetchAiringToday} />
        <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
        <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
        <Row title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      </div>
    </div>
  );
};

export default Movies;
