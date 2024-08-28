import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useNotifications } from "@/store/notifications-store";
import axios from "axios";
import { useRouter } from "next/navigation";

// Components
const Button = dynamic(() => import("@/components/ui/Button"));
const Loader = dynamic(() => import("@/components/ui/Loader"));

// Props
interface Props {
  className?: string;
  onSuccess?: () => void;
}

export interface FormData {
  videoUrl: string;
}

const UploadVideoForm = ({ onSuccess = () => {} }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    videoUrl: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const isSubmitDisabled = useMemo(
    () => !formData.videoUrl || loading,
    [formData, loading]
  );

  const router = useRouter();

  const { showNotification } = useNotifications();

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent page from refresh
    e.preventDefault();

    // Start loading
    setLoading(true);

    try {
      // Upload video
      await axios.post(`/api/upload-video`, {
        data: {
          youtubeLink: formData?.videoUrl,
        },
      });

      // If we've successfully  uploaded video, show success notification to user and clear form data
      showNotification({
        variant: "success",
        title: "Upload Video",
        message: "You've successfully uploaded Video!",
      });

      setFormData({
        videoUrl: "",
      });

      router.refresh();

      onSuccess();
    } catch (err: any) {
      // Handle errors
      showNotification({
        variant: "error",
        title: "Upload Video Error",
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

  return (
    <form onSubmit={onFormSubmit} className="w-full">
      {/** Loader */}
      {loading && <Loader className="mx-auto" size={55} />}

      {/** Fields */}
      <div className={`space-y-8 ${loading && "opacity-70"}`}>
        {/** Title */}
        <div>
          <label
            htmlFor="videoUrl"
            className="text-textColors-label block mb-1"
          >
            Youtube Video URL
          </label>
          <input
            name="videoUrl"
            onChange={onInputChange}
            value={formData?.videoUrl}
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

export default UploadVideoForm;
