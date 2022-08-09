import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const SinglePageImageSwiper = () => {
  return (
    <div className="relative">
      <Link to="/" className="absolute top-5 left-5 z-50">
        <img
          className="rotate-[90deg] h-8 p-1 shadow-xl rounded-full cursor-pointer bg-white"
          src="/svg/arrow.svg"
          alt="arrow"
        />
      </Link>

      <div className="flex items-center just-center absolute z-50 right-5 top-5 ">
        <img
          className="mr-5 p-1 shadow-xl rounded-full cursor-pointer bg-white"
          src="/svg/share.svg"
          alt="share icon"
        />
        <img
          className="p-1 shadow-xl rounded-full cursor-pointer bg-white"
          src="/svg/heart.svg"
          alt="heart icon"
        />
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        slidesPerGroup={1}
        className={styles.swiperIcons}
        watchOverflow={true}
        setWrapperSize={true}
      >
        <SwiperSlide className="flex flex-col items-center justify-center  ">
          <div className="h-[50vh] w-[100vw]">
            <img
              className="w-[100%] h-[100%] object-cover cursor-pointer"
              src="/images/image2.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center ">
          <div className="h-[50vh] w-[100vw]">
            <img
              className="w-[100%] h-[100%] object-cover cursor-pointer"
              src="/images/image.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SinglePageImageSwiper;
