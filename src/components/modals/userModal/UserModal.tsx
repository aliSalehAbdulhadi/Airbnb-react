const UserModal = () => {
  return (
    <div className="flex flex-col items-start justify-start py-1 w-[250px]  shadow-inner rounded-xl bg-white z-10 font-cerealNormal text-sm">
      <button className="w-full text-start my-1 py-2 px-4 hover:bg-gray-50 mt-2 font-cerealMedium">
        Sign up
      </button>
      <button className="w-full text-start my-1 pt-2 px-4 pb-5 hover:bg-gray-50 border-b-[1.7px] mb-3">
        Log in
      </button>
      <button className="w-full text-start my-1 py-2 px-4 hover:bg-gray-50">
        Host your home
      </button>
      <button className="w-full text-start my-1 py-2 px-4 hover:bg-gray-50">
        Host an experience
      </button>
      <button className="w-full text-start my-1 py-2 px-4 hover:bg-gray-50 mb-2">
        Help
      </button>
    </div>
  );
};

export default UserModal;
