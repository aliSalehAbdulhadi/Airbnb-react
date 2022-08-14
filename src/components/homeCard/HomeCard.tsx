import { Link } from "react-router-dom";
import ImageSwiper from "../swiper/imageSwiper/ImageSwiper";
import { useFetchImages } from "../../utilities/fetchImages";
import { homeCard } from "../../data/interfaces/interfaces";

const HomeCard = ({ location, host, date, price, id, rating }: homeCard) => {
  const { images, error } = useFetchImages();

  return (
    <Link
      to={`rooms/${id}`}
      className="max-w-[100%] max-h-[100%] cursor-pointer mr-5 mb-5"
    >
      <div className="h-[73%] rounded-xl overflow-hidden">
        <ImageSwiper images={images} error={error} />
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <h1 className="font-cerealMedium">{location}</h1>
          <h2 className="font-cerealLight flex items-center justify-center">
            <img className="h-4 mr-1 mb-[.15rem]" src="/svg/star.svg" alt="" />
            {rating}
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="opacity-60">
            <h1>{host}</h1>
            <span>{date}</span>
          </div>
          <div className="mt-2 font">
            <span className="font-cerealMedium">{price}</span>
            <span className="font-cerealLight ml-1">night</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
