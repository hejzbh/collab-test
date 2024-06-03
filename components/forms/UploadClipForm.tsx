import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useNotifications } from "@/store/notifications-store";
import axios from "axios";
// Components
const Button = dynamic(() => import("@/components/ui/Button"));
const Dropzone = dynamic(() => import("@/components/ui/Dropzone"));
const Loader = dynamic(() => import("@/components/ui/Loader"));

// Props
interface UploadClipFormProps {
  className?: string;
  onSuccess?: () => void;
}

export interface UploadClipFormData {
  file: File | undefined;
  title: string;
  description?: string;
}

const UploadClipForm = ({ onSuccess = () => {} }: UploadClipFormProps) => {
  const [formData, setFormData] = useState<UploadClipFormData>({
    title: "",
    description: "",
    file: undefined,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const isSubmitDisabled = useMemo(
    () => !formData.file || !formData.title || loading,
    [formData, loading]
  );

  const { showNotification } = useNotifications();

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent page from refresh
    e.preventDefault();

    // Start loading
    setLoading(true);

    try {
      // Import upload file function
      const uploadFile = await import("@/lib/(upload)/upload-file").then(
        ({ uploadFile }) => uploadFile
      );

      // Upload file
      const uploadedFileKey = await uploadFile(formData.file as File);

      // Upload clip
      await axios.post(`/api/upload-clip`, {
        data: {
          title: formData.title,
          description: formData.description,
          awsClipKey: uploadedFileKey,
        },
      });

      // If we've successfully  uploaded clip, show success notification to user and clear form data
      showNotification({
        variant: "success",
        title: "Upload Clip",
        message: "You've successfully uploaded clip!",
      });

      setFormData({
        title: "",
        description: "",
        file: undefined,
      });

      onSuccess();
    } catch (err: any) {
      // Handle errors
      showNotification({
        variant: "error",
        title: "Upload Clip",
        message: err.message,
      });
    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));

  const onVideoFileChange = (file: File | undefined) =>
    setFormData((formData) => ({
      ...formData,
      file,
    }));

  return (
    <form onSubmit={onFormSubmit} className=" w-full">
      {/** Loader */}
      {loading && <Loader className="mx-auto" size={55} />}

      {/** Fields */}
      <div className={`space-y-8 ${loading && "opacity-70"}`}>
        {/** Upload Video */}
        <div>
          <label htmlFor="upload" className="text-textColors-label block mb-1">
            Video
          </label>
          <Dropzone
            onChange={onVideoFileChange}
            allowedFileExtenstions={["mp4"]}
          />
        </div>

        {/** Title */}
        <div>
          <label htmlFor="title" className="text-textColors-label block mb-1">
            Title
          </label>
          <input
            name="title"
            onChange={onInputChange}
            value={formData?.title}
            className="w-full outline-none rounded-xl p-3 bg-bgColors-input text-sm md:text-[16px] text-textColors-primary border-[1px] border-[#D8D7D5] dark:border-none "
          />
        </div>

        {/** Description */}
        <div>
          <label
            htmlFor="description"
            className="text-textColors-label block mb-1"
          >
            Description <span className="text-[13px] ml-1">{"(optional)"}</span>
          </label>
          <input
            name="description"
            onChange={onInputChange}
            value={formData?.description}
            className="w-full outline-none rounded-xl p-3 bg-bgColors-input text-sm md:text-[16px] text-textColors-primary border-[1px] border-[#D8D7D5] dark:border-none "
          />
        </div>

        {/** Submit */}
        <Button
          title={"Submit"}
          type="submit"
          disabled={isSubmitDisabled}
          className={`float-right disabled:opacity-60 bg-textColors-blue border-textColors-blue hover:text-textColors-blue`}
        />
      </div>
    </form>
  );
};

export default UploadClipForm;
