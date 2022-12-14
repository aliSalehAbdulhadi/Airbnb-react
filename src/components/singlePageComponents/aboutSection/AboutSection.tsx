import { useEffect, useState } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker, isInclusivelyBeforeDay } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import ReservationSide from './reservationSide/ReservationSide';
import { aboutSection } from '../../../data/interfaces/interfaces';

const AboutSection = ({
  roomInfo,
  host,
  price,
  rating,
  reviews,
  hostImage,
  images,
}: aboutSection) => {
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [focusedInput, setFocusedInput] = useState<any>(null);

  useEffect(() => {
    hostImage(images);
  }, [images, hostImage]);

  return (
    <div className="flex mt-10">
      <div className=" semiSm:w-[70%] ">
        <div className="semiSm:w-[90%] border-b-[1px] pb-4">
          <div className="flex flex-col">
            <div className="flex ">
              <h1 className="font-cerealMedium text-xl semiSm:text-2xl semiSm:w-full mr-2 ">
                Entire rental unit hosted by {host}
              </h1>

              <div className="h-14 w-14 rounded-[50%] cursor-pointer overflow-hidden ">
                <img
                  className="h-[100%] w-[100%] object-cover"
                  src={images[2]?.webformatURL}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-2">
              <span className="semiSm:ml-1">{roomInfo?.guests} guests</span>
              <span className="ml-1">{roomInfo?.bedrooms} bedrooms</span>
              <span className="ml-1">{roomInfo?.beds} beds</span>
              <span className="ml-1">{roomInfo?.bathrooms} bath</span>
            </div>
          </div>
        </div>

        <div className="border-b-[1px] pb-10 mb-10 semiSm:w-[90%] mt-10">
          <div className="flex">
            <div>
              <img className="mr-2 h-8" src="/svg/badge2.svg" alt="" />
            </div>
            <div className="ml-3 semiSm:ml-0">
              <h2 className="font-cerealMedium">{host} is a Superhost</h2>
              <h4 className="opacity-60 text-sm">
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </h4>
            </div>
          </div>
          <div className="flex my-5">
            <div>
              <img className="mr-3 h-7" src="/svg/pin.svg" alt="" />
            </div>
            <div>
              <h2 className="font-cerealMedium">Great location</h2>
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

        <div className="pb-10 border-b-[1px] semiSm:w-[90%] mb-10">
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

        <div className="pb-10 border-b-[1px] semiSm:w-[90%] mb-10">
          <h1>
            Vakthus??yen is an island, about 150 meters from Henningsv??r, where
            you use a small motorboat for access. Vakthus??ya is an island, about
            150 meters from Henningsv??r! We provide a small boat with engine for
            access...
          </h1>
          <button className="mt-3 underline font-semibold">Learn more</button>
        </div>

        <div className="pb-10 border-b-[1px] semiSm:w-[90%] mb-10">
          <h1 className="mb-5 font-cerealMedium text-xl">
            Where you will sleep
          </h1>

          <div id="amenities" className="flex">
            <div className="border-[1.5px] min-h-[130px] min-w-[200px] rounded-lg p-3">
              <h1 className=" ml-[.60rem] font-semibold">Bedroom 2</h1>
              <div className="flex items-center">
                <img src="/svg/singleBed.svg" alt="single bed" />
                <img src="/svg/singleBed.svg" alt="single bed" />
                <img src="/svg/singleBed.svg" alt="single bed" />
              </div>

              <h4 className="ml-[.60rem] font-light">3 single bed</h4>
            </div>
          </div>
        </div>

        <div className="pb-10 border-b-[1px] semiSm:w-[90%] mb-10">
          <div id="amenities">
            <h1 className="mb-5 font-cerealMedium text-xl">
              What this place offers
            </h1>
            <div className="grid grid-cols-1 semiSm:grid-cols-2 opacity-80">
              <div className="flex items-center mb-3">
                <img className="h-8 mr-2" src="/svg/camera.svg" alt="camera" />
                <h1 className="">Security camera</h1>
              </div>
              <div className="flex items-center mb-3">
                <img
                  className="h-8 mr-2"
                  src="/svg/kitchen.svg"
                  alt="kitchen"
                />
                <h1>Kitchen</h1>
              </div>
              <div className="flex items-center mb-3">
                <img className="h-8 mr-2" src="/svg/pet.svg" alt="pet" />
                <h1>Pet allowed</h1>
              </div>
              <div className=" items-center mb-3 hidden semiSm:flex">
                <img className="h-8 mr-2" src="/svg/yard.svg" alt="yard" />
                <h1>Yard</h1>
              </div>
              <div className=" items-center mb-3 hidden semiSm:flex">
                <img className="h-8 mr-2" src="/svg/city.svg" alt="city" />
                <h1>City view</h1>
              </div>
              <div className=" items-center mb-3 hidden semiSm:flex">
                <img className="h-8 mr-2" src="/svg/washer.svg" alt="washer" />
                <h1>Washer</h1>
              </div>
              <button className="w-full py-3 px-2 border-[1px] border-black rounded-xl mt-5 font-cerealMedium block semiSm:hidden">
                Show all amenities
              </button>
            </div>
          </div>
        </div>

        <div>
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
              z-index="40"
              onDatesChange={({ startDate, endDate }: any) => {
                setStartDate(startDate);
                setEndDate(endDate);
              }}
              focusedInput={focusedInput}
              onFocusChange={setFocusedInput}
              isOutsideRange={(day: any) =>
                !isInclusivelyBeforeDay(day, moment())
              }
              initialVisibleMonth={() => moment().subtract(1, 'month')}
              orientation={'horizontal'}
            />
          </div>
        </div>
      </div>
      <ReservationSide reviews={reviews} rating={rating} price={price} />
    </div>
  );
};

export default AboutSection;
