const FooterSmall = () => {
  return (
    <div className="flex items-center justify-center h-[8vh] scale-90 border-t-[1px] text-xs font-cerealMedium ">
      <div
        className="flex flex-col items-center justify-center opacity-100
"
      >
        <img
          className=" h-[1.8rem]  fill-primary  "
          src="/svg/search2.svg"
          alt="search"
        />
        <h1 className="mt-1  ">Explore</h1>
      </div>
      <div className="flex flex-col items-center justify-center mx-10 opacity-60">
        <img className=" h-[1.8rem]" src="svg/heart3.svg" alt="heart" />
        <h1 className="mt-1">Wishlist</h1>
      </div>
      <div className="flex flex-col items-center justify-center opacity-60">
        <img className=" h-[1.8rem]" src="svg/user.svg" alt="heart" />

        <h1 className="mt-1">Log in</h1>
      </div>
    </div>
  );
};

export default FooterSmall;
