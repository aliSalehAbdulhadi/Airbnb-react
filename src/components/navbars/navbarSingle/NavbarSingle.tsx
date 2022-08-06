import { useState } from "react";
import { IoPersonCircleSharp, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import useClickOutside from "../../../hooks/useClickOutside";
import ExpandedNav from "../expandedNav/ExpandedNav";

const NavbarSingle = () => {
  const [expandNav, setExpandNav] = useState<boolean>(false);
  const domNode = useClickOutside(() => {
    setExpandNav(false);
  });
  return (
    <nav
      className={`border border-b-[0.5px] border-t-0 border-x-0 border-opacity-10 border-black  transition-all duration-300 ${
        expandNav ? "h-[12rem]" : "h-[7vh]"
      }`}
    >
      <div className="mx-[25rem] flex items-start justify-between outline-none relative">
        <Link to="/">
          <img
            className="h-8 cursor-pointer mt-2 self-center mr-[7rem]"
            src="/svg/airbnb.svg"
            alt="airbnb logo"
          />
        </Link>

        {expandNav ? (
          <div ref={domNode} className="self-end absolute top-3">
            <ExpandedNav />
          </div>
        ) : (
          <div onClick={() => setExpandNav(true)}>
            <div className="pl-7 pr-3 py-2 border-[1px] rounded-full shadow-2xl flex items-center justify-between cursor-pointer">
              <h1 className="font-cerealMedium text-sm mr-[7rem]">
                Start your search
              </h1>
              <IoSearch className="ml-3 bg-primary text-white p-2 rounded-full h-8 w-8" />
            </div>
          </div>
        )}

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
              <img
                className="h-5 mr-2"
                src="/svg/burger.svg"
                alt="burger icon"
              />
            </button>
            <button>
              <IoPersonCircleSharp size={35} color="#696969" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSingle;
