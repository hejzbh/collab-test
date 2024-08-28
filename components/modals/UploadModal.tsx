import { useModal } from "@/store/modal-store";
import dynamic from "next/dynamic";
import Tabs from "@/components/ui/Tabs";
// Components
const UploadClipForm = dynamic(
  () => import("@/components/forms/UploadClipForm")
);
const UploadVideoForm = dynamic(
  () => import("@/components/forms/UploadVideoForm")
);

// Props
interface UploadModalProps {}

const UploadModal = ({}: UploadModalProps) => {
  const { closeModal } = useModal();

  return (
    <div className="w-full h-full">
      {/** Title */}
      <h2 className="text-black dark:text-white drop-shadow-md text-3xl font-semibold">
        Lets <span className="text-textColors-blue">Upload</span>
      </h2>
      {/*  Tabs*/}
      <Tabs tabs={["Clip", "Video"]} className="mt-6 space-y-6 h-full">
        {/** Form */}
        <div data-tab="Clip">
          <UploadClipForm onSuccess={closeModal} />
        </div>
        <div data-tab="Video">
          <UploadVideoForm onSuccess={closeModal} />
        </div>
      </Tabs>
    </div>
  );
};

export default UploadModal;
