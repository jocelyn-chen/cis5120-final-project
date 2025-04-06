const Header = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex gap-3 mt-8 max-w-full text-5xl font-bold text-black whitespace-nowrap w-[186px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f2d72e635e24c7fa73c1fb595bc0d8e/8cad753d0127ac3014e28c011e1398b2aa72cbb2?placeholderIfAbsent=true"
          alt="Hobbit icon"
          className="object-contain overflow-hidden shrink-0 my-auto rounded-lg aspect-square w-[34px]"
        />
        <h1 className="grow shrink w-[134px]">hobbit</h1>
      </div>
      <div className="flex z-10 gap-10 items-center mt-11 mb-0 text-lg font-bold text-black whitespace-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f2d72e635e24c7fa73c1fb595bc0d8e/16f0066173eae5f037525a934c2d8f1388bcb3ca?placeholderIfAbsent=true"
          alt="Potato"
          className="object-contain overflow-hidden shrink-0 self-stretch my-auto shadow-2xl aspect-square w-[107px]"
        />
        <div className="self-stretch my-auto w-[132px]">
          <p className="overflow-hidden gap-2 self-stretch max-w-full bg-yellow-400 bg-opacity-20 min-h-11 rounded-[30px] w-[132px]">
            250
          </p>
          <button className="gap-3.5 self-stretch mt-4 max-w-full text-right bg-red-300 bg-opacity-20 min-h-11 rounded-[30px] shadow-[0px_0px_4px_rgba(255,135,157,1)] w-[132px]">
            Shop
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
