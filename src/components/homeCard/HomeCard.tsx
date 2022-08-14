import { Link } from 'react-router-dom';
import ImageSwiper from '../swiper/imageSwiper/ImageSwiper';
import { FetchImages } from '../../utilities/fetchImages';
import { homeCard } from '../../data/interfaces/interfaces';
import { useEffect } from 'react';
import useLoading from '../../context/loading/loading';

const HomeCard = ({ location, host, date, price, id, rating }: homeCard) => {
  const { images, error } = FetchImages(3, '');
  const loadingHome = useLoading((state: any) => state.loadingHome);
  const setLoadingHome = useLoading((state: any) => state.setLoadingHome);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingHome(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [setLoadingHome]);
  return (
    <Link
      to={`rooms/${id}`}
      className="max-w-[100%] max-h-[100%] cursor-pointer mr-5 mb-5 transition-all ease-in-out"
    >
      <div className="h-[73%] rounded-xl overflow-hidden ">
        {loadingHome ? (
          <div className="h-[300px] min-w-[350px] bg-[#e8e6e6] text-[#e8e6e6] animate-pulse ">
            1
          </div>
        ) : (
          <ImageSwiper images={images} error={error} />
        )}
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <h1 className="font-cerealMedium w-full">
            {loadingHome ? (
              <div className="w-[60%] rounded-md bg-[#e8e6e6] text-[#e8e6e6] animate-pulse">
                1
              </div>
            ) : (
              location
            )}
          </h1>
          <h2 className="font-cerealLight flex items-center justify-center">
            {loadingHome ? (
              <div className="w-[3rem] rounded-md bg-[#e8e6e6] text-[#e8e6e6] animate-pulse">
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
                <div className="w-[40%] mt-2 rounded-md bg-[#e8e6e6] text-[#e8e6e6] animate-pulse">
                  1
                </div>
              ) : (
                host
              )}
            </h1>
            <span>
              {loadingHome ? (
                <div className="w-[35%] mt-2 rounded-md bg-[#e8e6e6] text-[#e8e6e6] animate-pulse">
                  1
                </div>
              ) : (
                date
              )}
            </span>
          </div>
          <div className="mt-2 font">
            {loadingHome ? (
              <div className="w-[45%] mt-2 rounded-md bg-[#e8e6e6] text-[#e8e6e6] animate-pulse">
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

export default HomeCard;
