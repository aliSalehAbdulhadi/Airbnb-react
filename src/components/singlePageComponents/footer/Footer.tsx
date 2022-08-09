import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 border-t-[1px] pt-10 bg-gray-50">
      <div className="mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
        <div>
          <h1 className="font-cerealMedium text-xl">
            Explore other options in and around
          </h1>
          <div className="grid semiSm:grid-cols-4 mt-10 opacity-60">
            <span className="mb-4 cursor-pointer">Lorem, ipsum.</span>
            <span className="mb-4 cursor-pointer">Lorem, ipsum.</span>
            <span className="mb-4 cursor-pointer">Lorem, ipsum.</span>
            <span className="mb-4 cursor-pointer">Lorem, ipsum.</span>
            <span className="mb-4 cursor-pointer">Lorem, ipsum.</span>
            <span className="mb-4 cursor-pointer">Lorem, ipsum.</span>
            <span className="mb-4 cursor-pointer">Lorem, ipsum.</span>
            <span className="mb-4 cursor-pointer">Lorem, ipsum.</span>
            <span className="mb-4 cursor-pointer">Lorem, ipsum.</span>
            <span className="mb-4 cursor-pointer">Lorem, ipsum.</span>
            <span className="mb-4 cursor-pointer">Lorem, ipsum.</span>
            <span className="mb-4 cursor-pointer">Lorem, ipsum.</span>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t-[1px] pt-10">
        <div className="grid semiSm:grid-cols-4 mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <div className="flex flex-col mb-2 semiSm:mb-0">
            <h1 className="mb-3 text-sm font-cerealMedium">Supper</h1>
            <div className="opacity-80 flex flex-col text-sm">
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem ipsum dolor sit amet.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem, ipsum dolor.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem, ipsum.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem ipsum dolor sit.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-2 semiSm:mb-0">
            <h1 className="mb-3 text-sm font-cerealMedium">Community</h1>
            <div className="opacity-80 flex flex-col text-sm">
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem ipsum dolor sit.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem, ipsum.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem, ipsum dolor.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem, ipsum dolor.
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-2 semiSm:mb-0">
            <h1 className="mb-3 text-sm font-cerealMedium">Hosting</h1>
            <div className="opacity-80 flex flex-col text-sm">
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem, ipsum.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem ipsum dolor sit amet.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem, ipsum dolor.
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-2 semiSm:mb-0">
            <h1 className="mb-3 text-sm font-cerealMedium">Airbnb</h1>
            <div className="opacity-80 flex flex-col text-sm">
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem ipsum dolor sit.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem ipsum dolor sit amet consectetur.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem ipsum dolor sit amet.
              </span>
              <span className="mb-4 cursor-pointer hover:underline">
                Lorem, ipsum dolor.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t-[1px] py-5 mx-10 semiSm:mx-20 md:mx-28 xl:mx-48 flex flex-col-reverse semiSm:flex-row semiSm:items-center semiSm:justify-between ">
        <div className="font-cerealLight text-sm flex flex-col mt-3 semiSm:flex-row semiSm:items-center semiSm:mt-0">
          <div className="flex flex-center mr-3">
            <img src="/svg/copyRight.svg" alt="copy right" />
            <span>2022 Airbnb, Inc.</span>
          </div>
          <div className="flex items-center">
            <button className="hover:underline ">Privacy</button>
            <button className="hover:underline mx-3">Terms</button>
            <button className="hover:underline ">Sitemap</button>
          </div>
        </div>

        <div className="flex flex-col semiSm:flex-row semiSm:items-center font-cerealMedium text-[.9rem]">
          <div className="flex  mb-3  semiSm:mb-0">
            <div className="flex items-center cursor-pointer">
              <img className="h-5 mr-1" src="/svg/globe.svg" alt="globe" />
              <h1 className="hover:underline">English (US)</h1>
            </div>
            <h1 className="mx-4 semiSm:mx-7 cursor-pointer hover:underline">
              $ USD
            </h1>
          </div>
          <div className="flex items-center">
            <img
              className="cursor-pointer"
              src="/svg/facebook.svg"
              alt="facebook"
            />

            <img
              className="mx-5 cursor-pointer"
              src="/svg/twitter.svg"
              alt="twitter"
            />
            <img
              className="cursor-pointer"
              src="/svg/instagram.svg"
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
