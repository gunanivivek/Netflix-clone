import React, { useMemo } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  sources: string[]; 
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ sources }) => {

  const randomSrc = useMemo(() => {
    if (!sources || sources.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * sources.length);
    return sources[randomIndex];
  }, [sources]);

  if (!randomSrc) {
    return <div className="text-white text-center">No video available</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden">
      <ReactPlayer
        src={randomSrc}
        controls
        playing
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
