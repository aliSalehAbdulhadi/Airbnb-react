import React from "react";

const ReservationModal = ({
  setIsVisible,
  isVisible,
  setChildren,
  children,
  setAdults,
  adults,
  setInfants,
  infants,
}: {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
  children: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  adults: number;
  setInfants: React.Dispatch<React.SetStateAction<number>>;
  infants: number;
}) => {
  return (
    <div
      className={`border-[1.5px] rounded-lg p-5 ${
        isVisible ? "block" : "hidden"
      } max-w-[290px]`}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h1 className="font-cerealMedium">Adults</h1>
          <h3 className="text-sm font-cerealLight">Age 13+</h3>
        </div>
        <div>
          <button
            className={`border-[1.5px] rounded-full px-[.6rem] scale-[1.3]  ${
              adults <= 1 ? "opacity-30 cursor-not-allowed" : "opacity-80"
            }`}
            disabled={adults <= 1}
            onClick={() => setAdults(adults - 1)}
          >
            -
          </button>
          <span className="mx-3 opacity-70">{adults}</span>
          <button
            className="border-[1.5px] rounded-full px-[.4rem] scale-[1.3] opacity-80"
            onClick={() => setAdults(adults + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div>
          <h1 className="font-cerealMedium">Children</h1>
          <h3 className="text-sm font-cerealLight">Ages 2-12</h3>
        </div>
        <div>
          <button
            className={`border-[1.5px] rounded-full px-[.6rem] scale-[1.3]  ${
              children <= 0 ? "opacity-30 cursor-not-allowed" : "opacity-80"
            }`}
            disabled={children <= 0}
            onClick={() => setChildren(children - 1)}
          >
            -
          </button>
          <span className="mx-3 opacity-70">{children}</span>
          <button
            className="border-[1.5px] rounded-full px-[.4rem] scale-[1.3] opacity-80"
            onClick={() => setChildren(children + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-cerealMedium">Infants</h1>
          <h3 className="text-sm font-cerealLight">Under 2</h3>
        </div>
        <div>
          <button
            className={`border-[1.5px] rounded-full px-[.6rem] scale-[1.3]  ${
              infants <= 0 ? "opacity-30 cursor-not-allowed" : "opacity-80"
            }`}
            disabled={infants <= 0}
            onClick={() => setInfants(infants - 1)}
          >
            -
          </button>
          <span className="mx-3 opacity-70">{infants}</span>
          <button
            className="border-[1.5px] rounded-full px-[.4rem] scale-[1.3]  opacity-80"
            onClick={() => setInfants(infants + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="text-sm font-cerealLight mt-8">
          This place has a maximum of 5 guests, not including infants. If you're
          bringing more than 2 pets, please let your host know.
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="self-end mt-3 underline font-cerealMedium"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReservationModal;
