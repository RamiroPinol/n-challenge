// Vendor
import { Modal, Form, Input, Button } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

// Types
import { IVideoInput } from "../../types";

type AddVideoModalProps = {
  isModalVisible: boolean;
  onCancel: () => void;
  onAddVideo: (data: IVideoInput) => void;
};

export default function AddVideoModal({
  isModalVisible,
  onCancel,
  onAddVideo,
}: AddVideoModalProps): JSX.Element {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IVideoInput>();

  const onSubmit: SubmitHandler<IVideoInput> = (data) => {
    onAddVideo(data);
    // Reusing this function because it only closes the modal
    onCancel();
  };

  const handleCancel = () => {
    reset(); // Reset form fields
    onCancel();
  };

  return (
    <Modal
      title="Add video"
      open={isModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label="Name"
          name="name"
          validateStatus={errors.name ? "error" : ""}
          help={errors.name && errors.name.message}
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item
          label="Youtube URL"
          name="url"
          validateStatus={errors.url ? "error" : ""}
          help={errors.url && errors.url.message}
        >
          <Controller
            name="url"
            control={control}
            rules={{ required: "Youtube URL is required" }}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <div className="flex justify-end">
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="bg-blue-600"
          >
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
