import { v4 as uuidv4 } from 'uuid';
import { reviewSection } from '../../../data/interfaces/interfaces';
import ReviewCard from './reviewCard/ReviewCard';

const ReviewSection = ({ reviews, rating, images }: reviewSection) => {
  return (
    <div className="mt-10 pt-10 border-t-[1px]">
      <div className="mb-5 font-cerealMedium text-xl flex items-center">
        <div className="flex items-center mr-2">
          <img
            className="h-5 mb-[0.20rem] mr-1"
            src="/svg/star.svg"
            alt="star"
          />
          <span>{rating}</span>,
        </div>
        <h1>{reviews?.length} reviews</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
        {reviews?.map((review, i) => (
          <ReviewCard
            key={uuidv4()}
            image={images[i]?.webformatURL}
            review={review}
          />
        ))}
      </div>
      <button className="border-[1px] border-black py-3 px-4 rounded-lg mt-5 hover:bg-gray-50">
        Show all {reviews?.length} reviews
      </button>
    </div>
  );
};

export default ReviewSection;
