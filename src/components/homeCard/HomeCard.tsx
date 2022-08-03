import ImageSwiper from "../swiper/imageSwiper/ImageSwiper";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const images = [
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
    "/images/image.webp",
  ];
  return (
    <Link to="home/single" className="h-[400px] w-[300px] cursor-pointer ">
      <div className="h-[73%] rounded-xl overflow-hidden">
        <ImageSwiper url={images} />
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="font-cerealMedium">Kini, Greece</h1>
          <h2 className="font-cerealLight flex items-center justify-center">
            <img className="h-4 mr-1 mb-[.15rem]" src="/svg/star.svg" alt="" />{" "}
            4.5
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="opacity-60">
            <h1>Hosted by Ali</h1>
            <span>Sep 21 - 28</span>
          </div>
          <div className="mt-2 font">
            <span className="font-cerealMedium">215,99 $</span>
            <span className="font-cerealLight ml-1">night</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
