const AddHobbyButton = ({ onClick }) => {
  return (
    <button
      className="relative cursor-pointer h-[149px] w-[149px]"
      onClick={onClick}
    >
      <div className="absolute top-0 left-0 rounded-full border-yellow-500 border-solid border-[5px] size-full" />
      <div className="absolute text-4xl bg-yellow-400 rounded-full h-[calc(100%_-_10px)] left-[5px] text-white top-[5px] w-[calc(100%_-_10px)] flex items-center justify-center">
        +
      </div>
    </button>
  );
};

export default AddHobbyButton;
