import { titleSection } from '../../../../data/interfaces/interfaces';

const TitleSmallSection = ({
  title,
  rating,
  reviewLength,
  location,
}: titleSection) => {
  return (
    <div>
      <div className="font-cerealNormal mt-5 ">
        <h1 className="text-2xl font-cerealMedium">{title}</h1>
        <div className="flex items-center justify-between mt-2 text-sm font-semibold">
          <div className="flex items-center justify-center">
            <div className="flex flex-col mr-10 xs:mr-0 items-start xs:flex-row xs:items-center">
              <span className="flex items-center justify-center mr-2">
                <img
                  className="h-4 mb-[.15rem] mr-1"
                  src="/svg/star.svg"
                  alt="start icon"
                />
                {Number(rating).toFixed(1)}
              </span>
              <span className="mr-2 cursor-pointer underline whitespace-nowrap">
                {reviewLength} reviews
              </span>
            </div>
            <div className="flex flex-col items-start xs:flex-row xs:items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSmallSection;
