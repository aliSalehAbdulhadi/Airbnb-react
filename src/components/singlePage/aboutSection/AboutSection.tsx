import React, { useState } from "react";
import "react-dates/initialize";
import moment from "moment";
import { DateRangePicker, isInclusivelyBeforeDay } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import ReservationSide from "./reservationSide/ReservationSide";

const AboutSection = () => {
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [focusedInput, setFocusedInput] = useState<any>(null);
  return (
    <div className="flex mt-10">
      <div className="w-[70%] ">
        <div className="w-[90%] border-b-[1px] pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-cerealMedium text-2xl">
                Entire rental unit hosted by Wilhelm
              </h1>
              <div>
                <span className="ml-1">5 guests</span>
                <span className="ml-1">2 bedrooms</span>
                <span className="ml-1">5 beds</span>
                <span className="ml-1">1 bath</span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-[50%] overflow-hidden">
              <img
                className="h-[100%] w-[100%] object-cover"
                src="/images/image.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="border-b-[1px] pb-10 mb-10 w-[90%] mt-10">
          <div className="flex mb-5">
            <div>
              <img className="mr-2 h-8" src="/svg/badge2.svg" alt="" />
            </div>
            <div>
              <h2 className="f font-cerealMedium">Wilhelm is a Superhost</h2>
              <h4 className="opacity-60 text-sm">
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </h4>
            </div>
          </div>
          <div className="flex">
            <div>
              <img className="mr-3 h-7" src="/svg/pin.svg" alt="" />
            </div>
            <div>
              <h2 className="f font-cerealMedium">Great location</h2>
              <h4 className="opacity-60 text-sm">
                100% of recent guests gave the location a 5-star rating.
              </h4>
            </div>
          </div>
          <div className="flex">
            <div>
              <img className="mr-3 h-7" src="/svg/calendar.svg" alt="" />
            </div>
            <div>
              <h2 className="font-cerealMedium">
                Free cancellation before May 1.
              </h2>
            </div>
          </div>
        </div>

        <div className="pb-10 border-b-[1px] w-[90%] mb-10">
          <div>
            <img className="h-6 mb-5" src="/svg/aircover.svg" alt="" />
          </div>
          <div>
            <h1>
              Every booking includes free protection from Host cancellations,
              listing inaccuracies, and other issues like trouble checking in.
            </h1>
            <button className="mt-3 underline font-semibold">Learn more</button>
          </div>
        </div>

        <div className="pb-10 border-b-[1px] w-[90%] mb-10">
          <h1>
            Vakthusøyen is an island, about 150 meters from Henningsvær, where
            you use a small motorboat for access. Vakthusøya is an island, about
            150 meters from Henningsvær! We provide a small boat with engine for
            access...
          </h1>
          <button className="mt-3 underline font-semibold">Learn more</button>
        </div>

        <div className="pb-10 border-b-[1px] w-[90%] mb-10">
          <h1 className="mb-5 font-cerealMedium text-xl">
            Where you will sleep
          </h1>

          <div className="flex">
            <div className="border-[1.5px] min-h-[130px] min-w-[200px] rounded-lg p-3">
              <h1 className=" ml-[.60rem] font-semibold">Bedroom 2</h1>
              <div className="flex items-center">
                <img src="svg/singleBed.svg" alt="single bed" />
                <img src="svg/singleBed.svg" alt="single bed" />
                <img src="svg/singleBed.svg" alt="single bed" />
              </div>

              <h4 className="ml-[.60rem] font-light">3 single bed</h4>
            </div>
          </div>
        </div>

        <div className="pb-10 border-b-[1px] w-[90%] mb-10">
          <div>
            <h1 className="mb-5 font-cerealMedium text-xl">
              What this place offers
            </h1>
            <div className="grid grid-cols-2 opacity-80">
              <div className="flex items-center mb-3">
                <img className="h-8 mr-2" src="svg/camera.svg" alt="camera" />
                <h1 className="">Security camera</h1>
              </div>
              <div className="flex items-center mb-3">
                <img className="h-8 mr-2" src="svg/kitchen.svg" alt="kitchen" />
                <h1>Kitchen</h1>
              </div>
              <div className="flex items-center mb-3">
                <img className="h-8 mr-2" src="svg/pet.svg" alt="pet" />
                <h1>Pet allowed</h1>
              </div>
              <div className="flex items-center mb-3">
                <img className="h-8 mr-2" src="svg/yard.svg" alt="yard" />
                <h1>Yard</h1>
              </div>
              <div className="flex items-center mb-3">
                <img className="h-8 mr-2" src="svg/city.svg" alt="city" />
                <h1>City view</h1>
              </div>
              <div className="flex items-center mb-3">
                <img className="h-8 mr-2" src="svg/washer.svg" alt="washer" />
                <h1>Washer</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div>
            <h1 className="mb-2 font-cerealMedium text-xl">
              Select check-in date
            </h1>
            <h4 className="mb-5 opacity-60 text-sm">
              Add your travel dates for exact pricing
            </h4>
          </div>
          <div>
            <DateRangePicker
              startDate={startDate}
              startDateId="startDate"
              endDate={endDate}
              endDateId="endDate"
              onDatesChange={({ startDate, endDate }: any) => {
                setStartDate(startDate);
                setEndDate(endDate);
              }}
              focusedInput={focusedInput}
              onFocusChange={setFocusedInput}
              isOutsideRange={(day: any) =>
                !isInclusivelyBeforeDay(day, moment())
              }
              initialVisibleMonth={() => moment().subtract(1, "month")}
              orientation={"horizontal"}
            />
          </div>
        </div>
      </div>
      <ReservationSide />
    </div>
  );
};

export default AboutSection;