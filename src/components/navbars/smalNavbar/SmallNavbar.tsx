const SmallNavbar = () => {
  return (
    <div className="flex items-center justify-between py-2 px-5 mx-2 border-[1px] rounded-full shadow-lg my-5 cursor-pointer ">
      <div className="flex items-center">
        <img className="opacity-70" src="/svg/search.svg" alt="search icon" />
        <div className="ml-5">
          <h1 className="font-cerealMedium text-sm">Where to?</h1>
          <div className="font-cerealLight text-[.8rem] opacity-80">
            <span>Anywhere</span>
            <span className="mx-3">Any week</span>
            <span>Add guests</span>
          </div>
        </div>
      </div>
      <img src="/svg/twoArrows.svg" alt="two arrows" />
    </div>
  );
};

export default SmallNavbar;
