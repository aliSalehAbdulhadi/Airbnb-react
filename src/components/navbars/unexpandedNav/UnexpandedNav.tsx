import { IoSearch } from "react-icons/io5";

const UnexpandedNav = ({
  setExpandNav,
  expandedNav,
}: {
  setExpandNav: React.Dispatch<React.SetStateAction<boolean>>;
  expandedNav: boolean;
}) => {
  return (
    <div
      className={`flex border ${
        expandedNav ? "py-[.40rem] " : "py-[.40rem] "
      } pl-6 pr-2 rounded-full font-cerealMedium text-[.9rem] shadow hover:shadow-md transition-all ease-in-out duration-200 cursor-pointer outline-none`}
      onClick={() => setExpandNav(true)}
    >
      <button className="pr-3 py-[.10rem] border border-y-0 border-l-0 border-r-1 ">
        Anywhere
      </button>
      <button className="mx-4">Any week</button>
      <button className="flex items-center justify-center pl-3 border border-y-0 border-r-0 border-l-1 font-cerealLight">
        <h1 className="opacity-70">Add guests</h1>
        <IoSearch className="ml-3 bg-primary text-white p-2 rounded-full h-8 w-8" />
      </button>
    </div>
  );
};

export default UnexpandedNav;
