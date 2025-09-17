import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, ChevronLeft } from "lucide-react";

import React from "react";

const TrendingComp:React.FC = () => {
  const movies = [
    {
      id: 1,
      title: "Wednesday",
      poster:
        "https://m.media-amazon.com/images/I/81Iq5fhfNGL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      title: "Great Indian Kapil Sharma Show",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMGE5Y2ZiNWYtODA4Mi00M2YxLWFjNzQtZWVmZDRiNmE1YjVjXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 3,
      title: "Kingdom Samrajya",
      poster:
        "https://preview.redd.it/kingdom-as-saamrajya-v0-x8g1fwhdvsdf1.jpeg?width=640&crop=smart&auto=webp&s=551f4016aa779a3930422b14e5ff256c9c0803d5",
    },
    {
      id: 4,
      title: "Inspector Zende",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/Inspector_Zende_poster.jpg",
    },
    {
      id: 5,
      title: "Raid 2",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/82/Raid_2_poster.jpg",
    },
    {
      id: 6,
      title: "Squid Game",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYTU3ZDVhNmMtMDVlNC00MDc0LTgwNDMtYWE5MTI2ZGI4YWIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
  ];

  return (
    <section className="bg-black my-5 flex justify-center">
      <div className="w-full max-w-7xl">
        <h2 className="text-3xl text-white font-bold mb-6 ">Trending Now</h2>

        {/* Row: left button | carousel content | right button */}
        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <Carousel
            opts={{ align: "start", loop: false }}
            className="flex items-center w-full"
          >
            <CarouselPrevious className="flex h-72 w-14 items-center justify-center rounded-r-full bg-black/40 hover:bg-black transition shrink-0 focus:outline-none focus:ring-0 border-none">
              <ChevronLeft size={32} color="white" />
            </CarouselPrevious>

            {/* Carousel Content with extra padding */}
            <CarouselContent className="px-4">
              {" "}
              {/* <-- adds space on left/right */}
              {movies.map((movie, index) => (
                <CarouselItem
                  key={movie.id}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="p-2">
                    <div className="relative rounded-lg overflow-hidden group">
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span
                        className="absolute bottom-0.5 left-1 text-[7rem] font-extrabold"
                        style={{
                          color: "black",
                          WebkitTextStroke: "2px white",
                        }}
                      >
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Next Button */}
            <CarouselNext className="flex h-72 w-14 items-center justify-center rounded-l-full bg-black/40 hover:bg-black transition shrink-0 focus:outline-none focus:ring-0 border-none">
              <ChevronRight size={32} color="white" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TrendingComp;
