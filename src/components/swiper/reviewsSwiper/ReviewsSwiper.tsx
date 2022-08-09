import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import ReviewCard from "../../singlePageComponents/reviewSection/reviewCard/ReviewCard";

const ReviewsSwiper = () => {
  return (
    <div>
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
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.2}
          slidesPerGroup={1}
          className={styles.swiperIcons}
          watchOverflow={true}
          setWrapperSize={true}
          centeredSlides={true}
        >
          <SwiperSlide>
            <div className="border-[1px] rounded-xl mr-2">
              <ReviewCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[1px] rounded-xl mx-2">
              <ReviewCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[1px] rounded-xl mx-2">
              <ReviewCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-[1px] rounded-xl mx-2">
              <ReviewCard />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsSwiper;
