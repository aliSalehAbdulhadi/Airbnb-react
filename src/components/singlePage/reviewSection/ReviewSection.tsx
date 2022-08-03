import ReviewCard from "./reviewCard/ReviewCard";

const ReviewSection = () => {
  return (
    <div className="mt-10 pt-10 border-t-[1px]">
      <div className="mb-5 font-cerealMedium text-xl flex items-center">
        <div className="flex items-center mr-2">
          <img
            className="h-5 mb-[0.20rem] mr-1"
            src="/svg/star.svg"
            alt="star"
          />
          <span>5.0</span>,
        </div>
        <h1>8 reviews</h1>
      </div>
      <div className="grid grid-cols-2 mt-8">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <button className="border-[1px] border-black py-3 px-4 rounded-lg mt-5 hover:bg-gray-50">
        Show all 8 reviews
      </button>
    </div>
  );
};

export default ReviewSection;
