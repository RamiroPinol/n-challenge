// Vendor
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

// Types
import { IVideoData } from "../types";

export default function VideoPage({
  data,
}: {
  data: IVideoData[];
}): JSX.Element {
  const { videoID } = useParams();

  if (!videoID) return <></>;

  // Get the video data from the data prop
  const videoData = data.find((video) => video.id === parseInt(videoID));

  // If the video data is not found, show not found page
  if (!videoData) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-white text-4xl m-8">Video not found</h1>
      </div>
    );
  }

  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const { name, url } = videoData;
  const videoYouTubeID = url.split("v=")[1];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl m-8">{name}</h1>
      <YouTube videoId={videoYouTubeID} opts={opts} />
    </div>
  );
}
