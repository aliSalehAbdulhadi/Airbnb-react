import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import icons from "../../../data/sliderIcons.json";
import { toUpperCase } from "../../../utilities/toUpperCase";

const IconsSwiper = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={13}
        slidesPerGroup={5}
        navigation
        className={styles.swiperIcons}
        watchOverflow={true}
      >
        {icons.icons.map((icon) => (
          <SwiperSlide
            key={icon}
            className="flex flex-col items-center justify-center opacity-60 scale-90 cursor-pointer transition-all ease-in-out duration-500 hover:opacity-90 border-b-2 pb-2 border-white hover:border-gray-200"
          >
            <img
              className="select-none "
              src={`/svg/${icon}.svg`}
              alt="icons"
            />
            <div className=" mt-1 text-sm font-cerealMedium">
              {toUpperCase(icon)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IconsSwiper;
