// Utils
import { clsx } from "@/utils/clsx";

// Props
interface FlexGroupProps {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "col";
}

const FlexGroup = ({
  className = "",
  children = <></>,
  direction = "row",
}: FlexGroupProps) => {
  return (
    <section
      className={clsx(
        "flex items-center space-x-4",
        { "flex-row": direction === "row" },
        { "flex-col": direction === "col" },
        className
      )}
    >
      {children}
    </section>
  );
};

export default FlexGroup;
