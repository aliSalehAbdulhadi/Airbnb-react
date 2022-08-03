import { IoSearch, IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border border-b-[0.5px] border-t-0 border-x-0 border-opacity-10 border-black h-[9vh] px-[8rem] outline-none">
      <Link to="/" className="flex items-center h-full">
        <img
          className="h-[7rem] cursor-pointer"
          src="/svg/airbnb.svg"
          alt="airbnb logo"
        />
      </Link>

      <div className="flex border py-[.40rem] pl-6 pr-2 rounded-full font-cerealMedium text-[.9rem] shadow hover:shadow-md transition-all ease-in-out duration-200 cursor-pointer outline-none">
        <button className="pr-3 py-[.10rem] border border-y-0 border-l-0 border-r-1 ">
          Anywhere
        </button>
        <button className="mx-4">Any week</button>
        <button className="flex items-center justify-center pl-3 border border-y-0 border-r-0 border-l-1 font-cerealLight">
          <h1 className="opacity-70">Add guests</h1>
          <IoSearch className="ml-3 bg-primary text-white p-2 rounded-full h-8 w-8" />
        </button>
      </div>

      <div className="flex">
        <button className="text-sm font-cerealMedium hover:bg-gray-100 px-3 py-2 rounded-full">
          Become a Host
        </button>
        <button className="mr-3">
          <img
            className=" rounded-full p-2 h-9 w-9 hover:bg-gray-100"
            src="/svg/globe.svg"
            alt="globe icon"
          />
        </button>
        <div className="flex border rounded-full py-1 pl-2 pr-1 transition-all ease-in-out duration-200 cursor-pointer hover:shadow-lg ">
          <button>
            <img className="h-5 mr-2" src="/svg/burger.svg" alt="burger icon" />
          </button>
          <button>
            <IoPersonCircleSharp size={35} color="#696969" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
