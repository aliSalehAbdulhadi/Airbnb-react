const NavbarOnScroll = ({ scrollY }: { scrollY: number }) => {
  return (
    <div className="max-w-[1500px] mx-auto font-cerealMedium bg-white">
      <div className="flex items-center justify-between mx-10 semiSm:mx-20 md:mx-28 xl:mx-48 text-sm h-[5rem]">
        <div className="flex h-full">
          <div className="mr-5 mb-1 cursor-pointer  h-[90%] flex items-center border-b-4 mt-2 transition-all border-white hover:border-black">
            <a className="h-full flex items-center" href="#photos">
              Photos
            </a>
          </div>
          <div className="mr-5 mb-1 cursor-pointer  h-[90%] flex items-center border-b-4 mt-2 transition-all border-white hover:border-black">
            <a className="h-full flex items-center" href="#amenities">
              Amenities
            </a>
          </div>
          <div className="mr-5 mb-1 cursor-pointer  h-[90%] flex items-center border-b-4 mt-2 transition-all border-white hover:border-black">
            <a className="h-full flex items-center" href="#reviews">
              Reviews
            </a>
          </div>
          <div className="mr-5 mb-1 cursor-pointer  h-[90%] flex items-center border-b-4 mt-2 transition-all border-white hover:border-black">
            <a className="h-full flex items-center" href="#map">
              Location
            </a>
          </div>
        </div>
        <div
          className={`flex items-center ${scrollY > 2000 ? "block" : "hidden"}`}
        >
          <div className="flex flex-col mr-4">
            <div className="flex items-center">
              <h1 className="mr-1 font-cerealMedium text-lg">300$</h1>
              <span className="font-cerealLight">night</span>
            </div>
            <span className="font-cerealMedium text-xs underline opacity-60 cursor-pointer">
              8 reviews
            </span>
          </div>
          <button className="py-[.95rem] px-6 btnBackground text-white text-[1rem] rounded-lg">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarOnScroll;
