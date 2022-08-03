import { useState, useRef } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/swiper.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSwiper = ({ url }: { url: string[] }) => {
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const swiperImagePrevRef = useRef<HTMLDivElement>(null);
  const swiperImageNextRef = useRef<HTMLDivElement>(null);

  return (
    <Swiper
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
      modules={[Navigation, Pagination]}
      loop={true}
      slidesPerView={1}
      allowTouchMove={false}
      pagination={{ clickable: false, dynamicBullets: true }}
      className={styles.swiperImages}
      watchOverflow={true}
      navigation={{
        prevEl: swiperImagePrevRef.current,
        nextEl: swiperImageNextRef.current,
      }}
      onInit={(swiper) => {
        // @ts-ignore
        swiper.params.navigation.prevEl = swiperImagePrevRef.current;
        // @ts-ignore
        swiper.params.navigation.nextEl = swiperImageNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      {url.map((url) => (
        <>
          <SwiperSlide
            key={url}
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
          >
            <div
              className="h-[290px] border rounded-xl overflow-hidden"
              onMouseEnter={() => setShowArrows(true)}
              onMouseLeave={() => setShowArrows(false)}
            >
              <img
                className="select-none h-[100%] w-[100%] object-cover"
                src={url}
                alt="place"
              />
            </div>
          </SwiperSlide>
        </>
      ))}
      <div
        ref={swiperImagePrevRef}
        className={showArrows ? styles.customPrevArrow : "hidden"}
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        <img
          className="rotate-180 hover:scale-105 hover:opacity-100 opacity-[.85] transition-all"
          src="/svg/arrow2.svg"
          alt=""
        />
      </div>
      <div
        ref={swiperImageNextRef}
        className={showArrows ? styles.customNextArrow : "hidden"}
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        <img
          className="hover:scale-105 hover:opacity-100 opacity-[.85] transition-all"
          src="/svg/arrow2.svg"
          alt=""
        />
      </div>
    </Swiper>
  );
};

export default ImageSwiper;
