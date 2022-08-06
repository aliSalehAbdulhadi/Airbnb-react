import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import icons from "../../../data/sliderIcons.json";
import { toUpperCase } from "../../../utilities/toUpperCase";
import { useLayoutEffect, useState } from "react";
import { off } from "process";

const IconsSwiper = () => {
  function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const innerWidth = (size: any) => {
    if (size > 1300) {
      return 13;
    } else if (size > 992) {
      return 10;
    } else if (size > 850) {
      return 9;
    } else if (size > 768) {
      return 6;
    }
    return 5;
  };

  return (
    <div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={innerWidth(useWindowSize())}
        slidesPerGroup={useWindowSize() > 768 ? 5 : 3}
        navigation={useWindowSize() > 768 ? true : false}
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
