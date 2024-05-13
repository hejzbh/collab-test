import dynamic from "next/dynamic";
// Components
const UploadVideoForm = dynamic(
  () => import("@/components/forms/UploadClipForm")
);

// Props
interface UploadModalProps {}

const UploadModal = ({}: UploadModalProps) => {
  return (
    <div className="w-full">
      {/** Title */}
      <h2 className="text-black dark:text-white drop-shadow-md text-3xl font-semibold mb-10">
        Lets <span className="text-textColors-blue">Upload</span> Video
      </h2>
      {/** Form */}
      <UploadVideoForm />
    </div>
  );
};

export default UploadModal;
