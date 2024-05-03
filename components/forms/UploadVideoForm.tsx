import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
// Components
const Button = dynamic(() => import("@/components/ui/Button"));
const Dropzone = dynamic(() => import("@/components/ui/Dropzone"));

// Props
interface UploadVideoFormProps {
  className?: string;
}

interface FormData {
  videoUrl: string;
  title: string;
  description?: string;
}

const UploadVideoForm = ({}: UploadVideoFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    videoUrl: "",
    title: "",
    description: "",
  });
  //const [loading, setLoading] = useState<boolean>(false);
  const isSubmitDisabled = useMemo(
    () => !formData.videoUrl || !formData.title,
    [formData]
  );

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
    } catch {}
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));

  return (
    <form onSubmit={onFormSubmit} className="space-y-8 w-full">
      {/** Upload Video */}
      <div>
        <label htmlFor="upload" className="text-textColors-label block mb-1">
          Video
        </label>
        <Dropzone />
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
          className="w-full outline-none rounded-xl p-3 bg-bgColors-input text-sm text-textColors-primary border-[1px] border-[#D8D7D5] dark:border-none "
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
          className="w-full outline-none rounded-xl p-3 bg-bgColors-input text-sm text-textColors-primary border-[1px] border-[#D8D7D5] dark:border-none "
        />
      </div>

      <Button
        title={"Submit"}
        type="submit"
        disabled={isSubmitDisabled}
        className={`float-right disabled:opacity-60`}
      />
    </form>
  );
};

export default UploadVideoForm;
