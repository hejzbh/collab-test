type Props = {
  className?: string;
};

const MatchingBadge = ({ className = "" }: Props) => {
  return (
    <span
      className={`bg-bgColors-blue shadow-xl z-10  min-w-[80px] p-1 px-2 rounded-lg  text-center text-white ${className}`}
    >
      MATCHING
    </span>
  );
};

export default MatchingBadge;
