import { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SiAirbnb } from "react-icons/si";
import useClickOutside from "../../../hooks/useClickOutside";
import ExpandedNav from "../expandedNav/ExpandedNav";
import UnexpandedNav from "../unexpandedNav/UnexpandedNav";
import NavbarSingleSearchBar from "../navbarSingleSearchBar/NavbarSingleSearchBar";

const Navbar = ({ singlePage }: { singlePage: boolean }) => {
  const [expandNav, setExpandNav] = useState<boolean>(false);
  const domNode = useClickOutside(() => {
    setExpandNav(false);
  });
  return (
    <nav
      ref={domNode}
      className={`flex items-start pt-5 border-black  outline-none transition-all duration-300 bg-white relative ${
        expandNav ? "h-[25vh] md:h-[20vh]" : "h-[9vh]"
      }`}
    >
      <div className={`flex items-center justify-between w-full `}>
        <Link to="/" className="hidden md:block">
          <img
            className="h-8 cursor-pointer self-center mt-1 "
            src="/svg/airbnb.svg"
            alt="airbnb logo"
          />
        </Link>

        <div className="flex items-center xl:ml-36">
          <Link to="/">
            <SiAirbnb className="h-8 w-8 fill-primary cursor-pointer  block md:hidden mr-5" />
          </Link>

          {expandNav ? (
            <div className="self-end absolute top-16 left-0 right-14 mt-5 scale-90 md:fixed md:scale-100 md:top-3 md:right-0 ">
              <ExpandedNav />
            </div>
          ) : singlePage ? (
            <NavbarSingleSearchBar setExpandNav={setExpandNav} />
          ) : (
            <UnexpandedNav
              setExpandNav={setExpandNav}
              expandedNav={expandNav}
            />
          )}
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

export default Navbar;
