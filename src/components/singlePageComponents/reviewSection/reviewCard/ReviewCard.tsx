import { reviewCard } from '../../../../data/interfaces/interfaces';


const ReviewCard = ({ review, image }: reviewCard) => {
  return (
    <div className="flex flex-col items-start justify-center max-h-[450px] max-w-[600px] p-2 ">
      <div className="flex">
        <div className="h-10 w-10 rounded-[50%] overflow-hidden mr-3">
          <img
            className="h-[100%] w-[100%] object-cover"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h1>{review.name}</h1>
          <h2 className="text-sm opacity-60">{review.date}</h2>
        </div>
      </div>
      <div className=" mt-5 font-cerealNormal md:w-[75%] sm:w-[100%]">
        {review.comment}
      </div>
      <button className="mt-3 underline font-cerealMedium">Show more</button>
    </div>
  );
};

export default ReviewCard;
