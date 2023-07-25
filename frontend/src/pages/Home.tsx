// Vendor
import { Button } from "antd";
import { useState } from "react";

// Components
import AddVideoModal from "../components/AddVideoModal/AddVideoModal";
import VideoList from "../components/VideoList/VideoList";

// Types
import { IVideoData, IVideoInput } from "../types";

type HomeProps = {
  isLoading: boolean;
  data: IVideoData[];
  handleAddVideo: (data: IVideoInput) => void;
  handleDeleteVideo: (videoID: number) => void;
};

export default function Home({
  isLoading,
  data,
  handleAddVideo,
  handleDeleteVideo,
}: HomeProps): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-end">
        <Button
          type="primary"
          size="large"
          className="bg-blue-600"
          onClick={() => setIsModalVisible(true)}
        >
          Create
        </Button>
      </div>
      <h2 className="text-xl font-bold mb-4 text-white">
        Videos in collection
      </h2>
      <VideoList data={data} loading={isLoading} onDelete={handleDeleteVideo} />
      <AddVideoModal
        isModalVisible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onAddVideo={handleAddVideo}
      />
    </>
  );
}
