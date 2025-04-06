const StatusBar = () => {
  return (
    <header className="flex gap-10 self-stretch w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8f2d72e635e24c7fa73c1fb595bc0d8e/ddba3409a083f323be572631e5c2b7ba621237ba?placeholderIfAbsent=true"
        alt="Profile"
        className="object-contain overflow-hidden shrink-0 rounded-3xl aspect-square w-[58px]"
      />
      <nav className="flex flex-1 gap-1 items-center my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f2d72e635e24c7fa73c1fb595bc0d8e/053fd1ce40ef922a18e6e13ed647c0c4ba13878b?placeholderIfAbsent=true"
          alt="Status Icon 1"
          className="object-contain overflow-hidden shrink-0 self-stretch my-auto aspect-square w-[21px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f2d72e635e24c7fa73c1fb595bc0d8e/da8cc747d6319f2128c757a357bd4265c9e894ef?placeholderIfAbsent=true"
          alt="Status Icon 2"
          className="object-contain overflow-hidden shrink-0 self-stretch my-auto aspect-square w-[17px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f2d72e635e24c7fa73c1fb595bc0d8e/554759d64cf84a2ea1ed4dbf414ed123075a6348?placeholderIfAbsent=true"
          alt="Status Icon 3"
          className="object-contain overflow-hidden shrink-0 self-stretch my-auto aspect-square w-[27px]"
        />
      </nav>
    </header>
  );
};

export default StatusBar;
