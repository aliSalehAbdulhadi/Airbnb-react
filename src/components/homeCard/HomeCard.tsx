import { Link } from 'react-router-dom';
import ImageSwiper from '../swiper/imageSwiper/ImageSwiper';
import { FetchImages } from '../../utilities/fetchImages';
import { homeCard } from '../../data/interfaces/interfaces';
import { memo, useEffect } from 'react';
import useLoading from '../../context/loading/loading';

const HomeCard = ({ location, host, date, price, id, rating }: homeCard) => {
  const { images, error } = FetchImages();
  const loadingHome = useLoading((state: any) => state.loadingHome);
  const setLoadingHome = useLoading((state: any) => state.setLoadingHome);
  console.log(images);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingHome(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [setLoadingHome]);
  return (
    <Link
      to={`rooms/${id}`}
      className="max-w-[100%] max-h-[100%] cursor-pointer mr-5 mb-5 transition-all ease-in-out "
    >
      <div className="h-[73%] rounded-xl overflow-hidden relative ">
        {loadingHome ? (
          <div className="h-[290px] min-w-[300px] bg-[#e8e6e6] text-[#e8e6e6] animate-pulse ">
            1
          </div>
        ) : (
          <ImageSwiper images={images} error={error} />
        )}
        <img
          className={`h-5 absolute top-5 right-5 z-40 ${
            loadingHome ? 'hidden' : 'block'
          }`}
          src="svg/heart2.svg"
          alt="heart"
        />
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <h1 className="font-cerealMedium w-full">
            {loadingHome ? (
              <div className="w-[60%] h-5 rounded-md bg-[#e8e6e6] text-[#e8e6e6] animate-pulse">
                1
              </div>
            ) : (
              location
            )}
          </h1>
          <h2 className="font-cerealLight flex items-center justify-center">
            {loadingHome ? (
              <div className="w-[3rem] h-5 rounded-md bg-[#e8e6e6] text-[#e8e6e6] animate-pulse">
                1
              </div>
            ) : (
              <div className="flex items-center">
                <img
                  className="h-4 mr-1 mb-[.15rem]"
                  src="/svg/star.svg"
                  alt="star"
                />
                {rating}
              </div>
            )}
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="opacity-60 w-full">
            <h1>
              {loadingHome ? (
                <div className="w-[40%] h-5 mt-2 rounded-md bg-[#e8e6e6] text-[#e8e6e6] animate-pulse">
                  1
                </div>
              ) : (
                host
              )}
            </h1>
            <span>
              {loadingHome ? (
                <div className="w-[30%] h-5 mt-2 rounded-md bg-[#e8e6e6] text-[#e8e6e6] animate-pulse">
                  1
                </div>
              ) : (
                date
              )}
            </span>
          </div>
          <div className="mt-2 font">
            {loadingHome ? (
              <div className="w-[30%] h-5 mt-1 rounded-md bg-[#e8e6e6] text-[#e8e6e6] animate-pulse">
                1
              </div>
            ) : (
              <div>
                <span className="font-cerealMedium">{price}</span>
                <span className="font-cerealLight ml-1">night</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(HomeCard);
