import Badge from "./Badge";

const Card = (props) => {
  return (
    <div className="relative mb-20">
      <Badge type={props.type} />
      <div className="group">
        <p className="text-xl  font-bold">{props.title}</p>
        <p className="mb-5">{props.year}</p>
      </div>
      <img
        className="rounded-xl border-2 border-gray-300 w-full"
        src={props.poster}
        alt={`an image of ${props.title}`}
      />
    </div>
  );
};
export default Card;
