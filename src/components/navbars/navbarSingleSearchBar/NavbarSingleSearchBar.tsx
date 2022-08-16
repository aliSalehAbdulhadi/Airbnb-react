import React from 'react';
import { IoSearch } from 'react-icons/io5';

const NavbarSingleSearchBar = ({
  setExpandNav,
}: {
  setExpandNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <div onClick={() => setExpandNav(true)}>
        <div className="pl-7 pr-3 py-2 border-[1px] rounded-full shadow-2xl flex items-center justify-between cursor-pointer">
          <h1 className="font-cerealMedium text-sm mr-[7rem]">
            Start your search
          </h1>
          <IoSearch className="ml-3 bg-primary text-white p-2 rounded-full h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default NavbarSingleSearchBar;
