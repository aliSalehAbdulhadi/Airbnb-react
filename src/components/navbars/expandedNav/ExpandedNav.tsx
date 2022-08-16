import { IoSearch } from 'react-icons/io5';

const ExpandedNav = () => {
  return (
    <div className="flex flex-col items-center justify-end  font-cerealNormal ml-10 ">
      <div className="flex items-center justify-center mb-10">
        <button className="btn-underline-hover">Stays</button>
        <button className="btn-underline-hover mx-7">Experiences</button>
        <button className="btn-underline-hover">Online Experiences</button>
      </div>

      <div className="flex items-center text-[.85rem] font-cerealMedium border-[1px] rounded-full mx-4 my-2 mb-3 cursor-pointer shadow-xl ">
        <div className="flex flex-col w-[280px] px-6 border-r-[1px] hover:border-r-[0px] hover:rounded-full py-3 hover:bg-[#dadada]">
          <h1>Where</h1>
          <input
            className="font-cerealLight outline-none bg-inherit "
            type="text"
            placeholder="Search destination"
          />
        </div>
        <div className="flex flex-col w-[150px] px-3 border-r-[1px] ml-2  hover:border-r-[0px] hover:rounded-full py-3 hover:bg-[#cfcfcf]">
          <h1>Check in</h1>
          <h2 className="font-cerealLight opacity-60">Add dates</h2>
        </div>
        <div className="flex flex-col w-[150px] px-3 border-r-[1px] ml-2 hover:border-r-[0px] hover:rounded-full py-3 hover:bg-[#cfcfcf]">
          <h1>Check out</h1>
          <h2 className="font-cerealLight opacity-60">Add dates</h2>
        </div>
        <div className="flex items-center justify-between w-[250px] px-3 ml-2 hover:border-r-[0px] hover:rounded-full py-[0.52rem] hover:bg-[#cfcfcf] ">
          <div>
            <h1>Who</h1>
            <h2 className="font-cerealLight opacity-60">Add guests</h2>
          </div>
          <button>
            <IoSearch className="ml-3 bg-primary  text-white p-[.90rem] rounded-full h-12 w-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpandedNav;
