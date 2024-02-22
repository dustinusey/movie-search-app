import Card from "./Card";

const Preview = (props) => {
  return (
    <div className="w-full bg-zinc-800 rounded-t-3xl overflow-y-auto p-5">
      <div className="w-4/5 m-auto max-w-[500px] text-white p-5 h-full">
        <div className="w-full">
          {props.currentSelection.map((media, index) => {
            return (
              <Card
                title={media.Title}
                poster={media.Poster}
                type={media.Type}
                year={media.Year}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Preview;
