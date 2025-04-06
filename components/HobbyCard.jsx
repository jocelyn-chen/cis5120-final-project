import ProgressCircle from "./ProgressCircle";

const HobbyCard = ({ hobby, onClick }) => {
  return (
    <article className="flex flex-col gap-2.5 items-center">
      <button className="cursor-pointer" onClick={() => onClick(hobby)}>
        <ProgressCircle progress={hobby.progress} color={hobby.progressColor}>
          <img
            className="object-cover overflow-hidden absolute rounded-full aspect-square h-[calc(100%_-_10px)] left-[5px] top-[5px] w-[calc(100%_-_10px)]"
            src={hobby.image}
            alt={hobby.name}
          />
        </ProgressCircle>
      </button>
      <h3 className="text-base font-semibold text-center text-black">
        {hobby.name}
      </h3>
      <p
        className="text-sm text-center"
        style={{
          color: hobby.progressColor,
        }}
      >
        <span>{hobby.progress}</span>
        <span>%</span>
      </p>
    </article>
  );
};

export default HobbyCard;
