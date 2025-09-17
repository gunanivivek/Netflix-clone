import { Play, Info, Volume2, VolumeX } from "lucide-react";
import React, { useState } from "react";

interface VideoCompProps {
  src: string;
  title: string;
  description: string;
}


const VideoComp: React.FC<VideoCompProps> = ({src, title, description}) => {
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative w-full h-[50vh] md:h-[85vh] text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-contain md:object-cover bg-black"
        autoPlay
        loop
        muted={muted}
        playsInline
        src={src}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

  
      <div className="absolute bottom-8 md:bottom-24 left-4 md:left-12 right-4 max-w-6xl space-y-3 md:space-y-4 z-10">
        <h1 className="text-2xl md:text-6xl font-bold drop-shadow-lg">
          {title}
        </h1>
        <p className="hidden md:block text-lg text-gray-200 line-clamp-3 max-w-lg">
          {description}.
        </p>

       
        <div className="flex gap-2 md:gap-3">
          <button className="bg-white text-black px-4 md:px-6 py-1.5 md:py-2 rounded-md flex items-center gap-2 font-semibold hover:bg-gray-200 transition">
            <Play size={30} /> <span className="hidden sm:inline">Play</span>
          </button>
          <button className="bg-gray-700/70 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-md flex items-center gap-2 font-semibold hover:bg-gray-600/80 transition">
            <Info size={30} /> <span className="hidden sm:inline">More Info</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-24 right-15 flex items-center gap-4 z-10">
        
        <button
          onClick={() => setMuted(!muted)}
          className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          {muted ? <VolumeX size={30} /> : <Volume2 size={30} />}
        </button>

       
        <div className="bg-black/70 px-2 py-1 rounded-md text-xl font-semibold border border-gray-500">
          UA 16+
        </div>
      </div>
    </div>
  );
};

export default VideoComp;

