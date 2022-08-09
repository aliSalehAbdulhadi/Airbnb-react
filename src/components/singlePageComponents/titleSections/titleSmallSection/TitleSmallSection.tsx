import React from "react";

const TitleSmallSection = () => {
  return (
    <div>
      <div className="font-cerealNormal mt-5">
        <h1 className="text-2xl font-cerealMedium">
          Vakthusøyen - Nybryggen - on a small island
        </h1>
        <div className="flex items-center justify-between mt-2 text-sm font-semibold">
          <div className="flex items-center justify-center">
            <span className=" flex items-center justify-center mr-2">
              <img
                className="h-4 mb-[.15rem] mr-1"
                src="/svg/star.svg"
                alt="start icon"
              />
              5.0
            </span>
            <span className="mr-2 cursor-pointer underline">8 reviews</span>
            <div className="flex items-center">
              <img
                className="h-[1.1rem] mr-1"
                src="/svg/badgeFilled.svg"
                alt="badge"
              />
              <span className="mr-2 font-normal">Superhost</span>
            </div>
            <span className="mr-2 cursor-pointer underline">
              Nordland,Norway
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSmallSection;
