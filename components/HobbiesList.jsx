import HobbyCard from "./HobbyCard";
import AddHobbyButton from "./AddHobbyButton";

const HobbiesList = ({ hobbies, onHobbyClick, onAddClick }) => {
  return (
    <section className="self-center mt-11 w-full max-w-[334px]">
      <h2 className="text-2xl font-bold text-center text-black mb-11">
        My Hobbies
      </h2>
      <div className="grid gap-10 p-5 w-full grid-cols-[repeat(2,1fr)]">
        {hobbies?.map((hobby) => (
          <HobbyCard key={hobby.id} hobby={hobby} onClick={onHobbyClick} />
        ))}
        <AddHobbyButton onClick={onAddClick} />
      </div>
    </section>
  );
};

export default HobbiesList;
