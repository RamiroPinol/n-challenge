// Vendor
import { List, Button } from "antd";
import { Link } from "react-router-dom";

// Types
import { IVideoData } from "../../types";

type VideoListProps = {
  data: IVideoData[];
  loading: boolean;
  onDelete: (videoID: number) => void;
};

export default function VideoList({
  data,
  loading,
  onDelete,
}: VideoListProps): JSX.Element {
  return (
    <List
      size="large"
      bordered
      loading={loading}
      dataSource={data}
      renderItem={(videoData) => (
        <List.Item className="block px-4 py-2 hover:bg-blue-600 transition border-t border-gray-300 last:border-b">
          <Link to={`/video/${videoData.id}`} key={videoData.id}>
            <div className="flex flex-auto items-center justify-between">
              <span className="text-lg text-white font-semibold">
                {videoData.name}
              </span>
            </div>
          </Link>
          <Button
            type="primary"
            size="large"
            ghost
            danger
            onClick={() => onDelete(videoData.id)}
            className="hover:bg-red-600"
          >
            🗑️
          </Button>
        </List.Item>
      )}
    />
  );
}
