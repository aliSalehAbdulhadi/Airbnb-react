import React from "react";

const TitleSection = () => {
  return (
    <div>
      <h1 className="text-3xl font-cerealMedium">
        Vakthusøyen - Nybryggen - on a small island
      </h1>
      <div className="flex items-center justify-between mt-2 text-sm font-semibold">
        <div className="flex items-center justify-center">
          <span className="flex items-center justify-center mr-2">
            <img
              className="h-4 mb-[.15rem] mr-1"
              src="/svg/star.svg"
              alt="start icon"
            />
            5.0
          </span>
          <span className="mr-2 underline">8 reviews</span>
          <span className="mr-2 font-normal">Superhost</span>
          <span className="mr-2 underline">Nordland,Norway</span>
        </div>
        <div className="flex items-center just-center">
          <span className="mr-5 flex items-center underline">
            <img className="mr-1" src="/svg/share.svg" alt="share icon" />
            Share
          </span>
          <span className="flex items-center underline">
            <img className="mr-1" src="/svg/heart.svg" alt="heart icon" />
            Save
          </span>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
