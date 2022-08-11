import { useState, useRef } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../../styles/swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useFetchImages } from "../../../utilities/fetchImages";

const ImageSwiper = ({ url }: { url: string[] }) => {
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const swiperImagePrevRef = useRef<HTMLDivElement>(null);
  const swiperImageNextRef = useRef<HTMLDivElement>(null);
  const error = useFetchImages().error;

  return (
    <Swiper
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
      modules={[Navigation, Pagination]}
      loop={true}
      slidesPerView={1}
      allowTouchMove={true}
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
      {useFetchImages().data.map(
        (imageUrl: any) => (
          console.log(imageUrl),
          (
            <>
              <SwiperSlide
                key={uuidv4()}
                onMouseEnter={() => setShowArrows(true)}
                onMouseLeave={() => setShowArrows(false)}
              >
                <div
                  className="h-[300px] w-[350px]  border rounded-xl overflow-hidden"
                  onMouseEnter={() => setShowArrows(true)}
                  onMouseLeave={() => setShowArrows(false)}
                >
                  <img
                    className="select-none min-h-[100%] min-w-[100%] object-cover"
                    src={
                      error?.name === "AxiosError" || !imageUrl.webformatURL
                        ? "/images/image.webp"
                        : imageUrl.webformatURL
                    }
                    alt="place"
                  />
                </div>
              </SwiperSlide>
            </>
          )
        ),
      )}
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
