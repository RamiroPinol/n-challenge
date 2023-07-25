// Vendor
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";

// Components
import Home from "./pages/Home";

// Styles
import "./App.css";

// Types
import { IVideoData, IVideoInput } from "./types";
import VideoPage from "./pages/VideoPage";

const { Header, Content } = Layout;

export default function App(): JSX.Element {
  const [data, setData] = useState<IVideoData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch("http://localhost:4001/api/videos");
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleAddVideo = async (videoData: IVideoInput) => {
    try {
      const addedVideo = await fetch("http://localhost:4001/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(videoData),
      });

      const addedVideoData: IVideoData = await addedVideo.json();

      // Add the new video to the list
      setData([...data, addedVideoData]);
    } catch (error) {
      console.error("Error adding video:", error);
    }
  };

  const handleDeleteVideo = async (videoID: number) => {
    try {
      await fetch(`http://localhost:4001/api/videos/${videoID}`, {
        method: "DELETE",
      });

      // Remove the video from the list
      setData(data.filter((video) => video.id !== videoID));
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  return (
    <div className="App">
      <Layout className="min-h-screen bg-gray-900">
        <Header className="bg-gray-900 p-4 text-white border-b border-gray-800">
          <Link to="/">
            <div className="text-xl font-bold text-left">
              Nirvana amazing videos list
            </div>
          </Link>
        </Header>
        <Content className="px-24 py-4">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isLoading={isLoading}
                  data={data}
                  handleAddVideo={handleAddVideo}
                  handleDeleteVideo={handleDeleteVideo}
                />
              }
            />
            <Route path="/video/:videoID" element={<VideoPage data={data} />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}
