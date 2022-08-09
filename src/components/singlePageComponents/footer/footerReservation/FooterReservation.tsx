const FooterReservation = () => {
  return (
    <div className="flex items-center justify-between py-3 px-5 sticky bottom-0 border-t-[1px] bg-white z-[100]  semiSm:hidden">
      <div className="flex flex-col justify-center">
        <div className="flex items-center">
          <h1 className="font-cerealMedium">300$</h1>
          <span className="ml-1 font-cerealLight text-sm">night</span>
        </div>
        <h1 className="font-cerealMedium underline">Oct14-19</h1>
      </div>
      <button className="w-[30%] py-3 px-2 font-cerealMedium rounded-lg text-white btnBackground">
        Reserve
      </button>
    </div>
  );
};

export default FooterReservation;
