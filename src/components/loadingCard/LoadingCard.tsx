const LoadingCard = () => {
  return (
    <div className="h-[30rem] w-[20rem] mr-5 mb-5 animate-pulse text-[#e8e6e6]">
      <div className="bg-[#e8e6e6] shadow-md h-[18rem] rounded-md"></div>
      <div className="mt-2">
        <div className="flex justify-between">
          <div className="bg-[#e8e6e6] w-[60%] shadow-md rounded-md" />
          <div className="w-[20%] bg-[#e8e6e6] shadow-md rounded-md flex items-center justify-center ">
            1
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <div className="opacity-60">
            <h1 className="w-[50%] bg-[#e8e6e6] shadow-md rounded-md">1</h1>
            <h1 className="w-[40%] bg-[#e8e6e6] shadow-md rounded-md mt-2">
              1
            </h1>
          </div>
          <div className="mt-2">
            <div className="w-[40%] bg-[#e8e6e6] shadow-md rounded-md mt-2">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
