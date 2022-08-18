import { titleSection } from '../../../../data/interfaces/interfaces';

const TitleSection = ({
  title,
  rating,
  reviewLength,
  location,
}: titleSection) => {
  return (
    <div className="font-cerealNormal semiSm:mt-5 ">
      <h1 className="text-2xl font-cerealMedium ">{title}</h1>
      <div className="flex items-center justify-between mt-2 text-sm font-semibold">
        <div className="flex items-center justify-center">
          <span className=" flex items-center justify-center mr-2">
            <img
              className="h-4 mb-[.15rem] mr-1"
              src="/svg/star.svg"
              alt="start icon"
            />
            {Number(rating).toFixed(1)}
          </span>
          <span className="mr-2 cursor-pointer underline">
            {reviewLength} reviews
          </span>
          <div className="flex items-center">
            <img
              className="h-[1.1rem] mr-1"
              src="/svg/badgeFilled.svg"
              alt="badge"
            />
            <span className="mr-2 font-normal">Superhost</span>
          </div>
          <span className="mr-2 cursor-pointer underline">{location}</span>
        </div>
        <div className="flex items-center just-center">
          <span className="mr-5 flex items-center cursor-pointer underline">
            <img className="mr-1" src="/svg/share.svg" alt="share icon" />
            Share
          </span>
          <span className="flex items-center cursor-pointer underline">
            <img className="mr-1" src="/svg/heart.svg" alt="heart icon" />
            Save
          </span>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
