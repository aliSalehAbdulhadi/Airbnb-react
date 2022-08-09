import React, { useState } from "react";
import moment from "moment";
import { DateRangePicker, isInclusivelyBeforeDay } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import useClickOutside from "../../../../hooks/useClickOutside";
import ReservationModal from "./reservationModal/ReservationModal";

const ReservationSide = () => {
  const [startDateSide, setStartDateSide] = useState<any>(null);
  const [endDateSide, setEndDateSide] = useState<any>(null);
  const [focusedInputSide, setFocusedInputSide] = useState<any>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);

  const nodeDom = useClickOutside(() => {
    setIsVisible(false);
  });

  return (
    <div className=" w-[35%] hidden semiSm:block">
      <div className="border-[1.5px] rounded-lg shadow-xl sticky top-10 p-5 m-2">
        <div className="flex items-center justify-between mb-5">
          <div className="flex flex-col md:flex-row items-center">
            <h1 className="text-2xl font-cerealMedium mr-1">300$</h1>
            <span className="font-light">night</span>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center">
              <img className="h-5 mb-[.20rem]" src="/svg/star.svg" alt="star" />
              <h1>5.0</h1>
            </div>
            <h2 className="ml-2 opacity-60 underline cursor-pointer">
              8 reviews
            </h2>
          </div>
        </div>
        <div ref={nodeDom} className="flex flex-col items-center  ">
          <div
            className="mb-1 cursor-pointer border-[1.5px] border-t-0 rounded-b-lg pb-2"
            onClick={() => setIsVisible(true)}
          >
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
            <div className="mt-5 mx-2">
              <div>Guests</div>
              <div className="font-cerealLight text-sm">
                {adults + children + infants} guests
              </div>
            </div>
          </div>

          <ReservationModal
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            setChildren={setChildren}
            children={children}
            setAdults={setAdults}
            adults={adults}
            setInfants={setInfants}
            infants={infants}
          />

          <button className="self-center text-white py-3 min-w-[95%] lg:min-w-[90%] xl:min-w-[85%] xxl:min-w-[75%] rounded-lg btnBackground mt-3 whitespace-nowrap">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationSide;
