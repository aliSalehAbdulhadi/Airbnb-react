import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import styles from '../../../styles/swiper.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import icons from '../../../data/sliderIcons.json';
import { toUpperCase } from '../../../utilities/toUpperCase';
import useWindowSize from '../../../hooks/useWindowsSize';
import useSearchSwiper from '../../../context/searchSwiper/searchSwiper';
import useLoading from '../../../context/loading/loading';

const IconsSwiper = () => {
  useWindowSize();
  const loadingIcons = useLoading((state: any) => state.loadingIcons);
  const setLoadingIcons = useLoading((state: any) => state.setLoadingIcons);
  const setLoadingHome = useLoading((state: any) => state.setLoadingHome);
  const currSwiper = useSearchSwiper((state: any) => state.swiper);
  const clickedSwiper = useSearchSwiper((state: any) => state.clickedSwiper);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingIcons(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [setLoadingIcons]);

  const innerWidth = (size: any) => {
    if (size > 1300) {
      return 14;
    } else if (size > 992) {
      return 10;
    } else if (size > 850) {
      return 9;
    } else if (size > 768) {
      return 6;
    }
    return 4;
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
            key={uuidv4()}
            className={`flex flex-col items-center justify-center opacity-[.75]  cursor-pointer transition-all ease-in-out duration-500 hover:opacity-90 border-b-2 pb-2 border-white  ${
              icon === currSwiper
                ? 'opacity-90 border-gray-800'
                : 'hover:border-gray-200'
            }`}
          >
            {loadingIcons ? (
              <div className="flex flex-col items-center justify-center text-white">
                <div className="bg-[#e8e6e6] animate-pulse w-[2rem] h-[2rem] rounded-full">
                  .
                </div>
                <div className="bg-[#e8e6e6] animate-pulse w-[6rem] h-[.8rem] mt-2 rounded-xl">
                  .
                </div>
              </div>
            ) : (
              <div
                onClick={() => {
                  clickedSwiper(icon);
                  setLoadingHome(true);
                }}
                className="flex flex-col items-center justify-center scale-90 semiSm:scale-100 opacity-80"
              >
                <img
                  className="select-none "
                  src={`/svg/${icon}.svg`}
                  alt="icons"
                />
                <div className=" mt-1 text-xs font-cerealMedium opacity-[.80] ">
                  {toUpperCase(icon)}
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IconsSwiper;
