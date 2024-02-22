import { Clapperboard, FileStack, Gamepad2 } from "lucide-react";

const Badge = (props) => {
  console.log(props);
  const badgeType =
    props.type === "movie"
      ? "movie"
      : props.type === "game"
      ? "game"
      : props.type === "series"
      ? "series"
      : "";
  return (
    <div
      className={`${badgeType} border-[15px] border-zinc-800 absolute top-10 right-[-50px] rounded-full w-[130px] h-[130px] bg-red-500 grid place-items-center text-white font-bold`}
    >
      {props.type === "game" && <Gamepad2 size={64} />}
      {props.type === "movie" && <Clapperboard size={64} />}
      {props.type === "series" && <FileStack size={64} />}
    </div>
  );
};
export default Badge;
