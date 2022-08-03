import React, { useState } from "react";
import moment from "moment";
import { DateRangePicker, isInclusivelyBeforeDay } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const ReservationSide = () => {
  const [startDateSide, setStartDateSide] = useState<any>(null);
  const [endDateSide, setEndDateSide] = useState<any>(null);
  const [focusedInputSide, setFocusedInputSide] = useState<any>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  return (
    <div className=" w-[30%]">
      <div className="border-[1.5px] rounded-lg shadow-xl sticky top-10 p-5 m-2">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <h1 className="text-2xl font-cerealMedium mr-1">300$</h1>
            <span className="font-light">night</span>
          </div>
          <div className="flex items-center">
            <img className="h-5 mb-[.20rem]" src="/svg/star.svg" alt="star" />
            <h1>5.0</h1>
            <h2 className="ml-2 opacity-60 underline cursor-pointer">
              8 reviews
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <DateRangePicker
            startDate={startDateSide}
            startDateId="startDate"
            endDate={endDateSide}
            endDateId="endDate"
            onDatesChange={({ startDateSide, endDate }: any) => {
              setStartDateSide(startDateSide);
              setEndDateSide(endDateSide);
            }}
            focusedInput={focusedInputSide}
            onFocusChange={setFocusedInputSide}
            isOutsideRange={(day: any) =>
              !isInclusivelyBeforeDay(day, moment())
            }
            initialVisibleMonth={() => moment().subtract(1, "month")}
            orientation={"horizontal"}
          />
          <div
            className="mb-1 cursor-pointer border-[1.5px] border-t-0 rounded-b-lg px-3 py-1 w-[89.5%]"
            onClick={() => setIsVisible(!isVisible)}
          >
            <div>Guests</div>
            <div className="font-cerealLight text-sm">
              {adults + children + infants} guests
            </div>
          </div>
          <div
            className={`border-[1.5px] rounded-lg p-5 w-[89.5%] ${
              isVisible ? "block" : "hidden"
            } `}
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
                    children <= 0
                      ? "opacity-30 cursor-not-allowed"
                      : "opacity-80"
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
                    infants <= 0
                      ? "opacity-30 cursor-not-allowed"
                      : "opacity-80"
                  }`}
                  disabled={infants <= 0}
                  onClick={() => setInfants(infants - 1)}
                >
                  -
                </button>
                <span className="mx-3 opacity-70">{infants}</span>
                <button
                  className="border-[1.5px] rounded-full px-[.4rem] scale-[1.3] opacity-80"
                  onClick={() => setInfants(infants + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-sm font-cerealLight mt-8">
                This place has a maximum of 5 guests, not including infants. If
                you're bringing more than 2 pets, please let your host know.
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="self-end mt-3 underline font-cerealMedium"
              >
                Close
              </button>
            </div>
          </div>
          <button className="self-center text-white py-3 px-[5rem] rounded-lg btnBackground mt-3">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationSide;
