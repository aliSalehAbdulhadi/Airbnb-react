import { useEffect, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HomeCard from '../../components/homeCard/HomeCard';
import Navbar from '../../components/navbars/navbar/Navbar';
import SmallNavbar from '../../components/navbars/smalNavbar/SmallNavbar';
import IconsSwiper from '../../components/swiper/iconsSwiper/IconsSwiper';
import useDataBase from '../../context/dataStore/dataStore';
import DynamicData from '../../data/DynamicData';
import useSearchSwiper from '../../context/searchSwiper/searchSwiper';
import useLoading from '../../context/loading/loading';
import useScrollStore from '../../context/scrollStore/scrollStore';
import { useScrollY } from '../../hooks/useScrollY';

//figure out how to use onScrollY without re-rendering

const HomePage = () => {
  const setLoadingHome = useLoading((state: any) => state.setLoadingHome);
  const db = useDataBase((state: any) => state.db);
  const populatedb = useDataBase((state: any) => state.populatedb);
  const currSwiper = useSearchSwiper((state: any) => state.swiper);
  useEffect(() => {
    const number = [1, 2, 3, 4, 2, 3, 4, 2, 3, 4];
    number.map(() => populatedb(DynamicData()));
    const timer = setTimeout(() => {
      setLoadingHome(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [populatedb, currSwiper, setLoadingHome]);

  return (
    <>
      <div className="sticky top-0 bg-white z-[50] max-w-[1900px]">
        <div
          className="hidden semiSm:block mx-10 sm:mx-15 md:mx-24 lg:mx-36 "
          onClick={() => setLoadingHome(false)}
        >
          <Navbar singlePage={false} />
        </div>

        <div className="block semiSm:hidden">
          <SmallNavbar />
        </div>
        <div className="border border-b-[0.5px] border-t-0 border-x-0 border-opacity-10 sticky top-20 z-[50]" />
        <div
          className={`mt-10 mx-10 sm:mx-15 md:mx-24 lg:mx-36 bg-white z-[40] transition-all`}
        >
          <IconsSwiper />
        </div>
      </div>

      <div className="flex items-center flex-col max-w-[1900px] mx-10 sm:mx-15 md:mx-24 lg:mx-36">
        <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xxl:grid-cols-4 xxxl:grid-cols-5 place-items-start">
          {db.map((singleData: any) => {
            return (
              <HomeCard
                key={uuidv4()}
                location={singleData.location}
                host={singleData.host}
                price={singleData.price}
                date={singleData.date}
                id={singleData.id}
                rating={singleData.rating}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
