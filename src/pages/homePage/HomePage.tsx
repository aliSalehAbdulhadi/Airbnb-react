import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HomeCard from '../../components/homeCard/HomeCard';
import Navbar from '../../components/navbars/navbar/Navbar';
import SmallNavbar from '../../components/navbars/smalNavbar/SmallNavbar';
import IconsSwiper from '../../components/swiper/iconsSwiper/IconsSwiper';
import useDataBase from '../../context/dataStore/dataStore';
import DynamicData from '../../data/DynamicData';
import useSearchSwiper from '../../context/searchSwiper/searchSwiper';
import useLoading from '../../context/loading/loading';
import useImageStore from '../../context/imagesStore/imagesStore';
import Footer from '../../components/footer/Footer';
import FooterSmall from '../../components/footer/footerSmall/FooterSmall';
import { useScrollY } from '../../hooks/useScrollY';


const HomePage = () => {
  const setLoadingHome = useLoading((state: any) => state.setLoadingHome);
  const db = useDataBase((state: any) => state.db);
  const populatedb = useDataBase((state: any) => state.populatedb);
  const currSwiper = useSearchSwiper((state: any) => state.swiper);
  const fetch = useImageStore((state: any) => state.fetch);
  useEffect(() => {
    [...Array(10)].map(() => populatedb(DynamicData()));
    const timer = setTimeout(() => {
      setLoadingHome(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [populatedb, currSwiper, setLoadingHome, fetch]);

  useEffect(() => {
    fetch();
    window.history.scrollRestoration = 'manual';
  }, [fetch]);

  return (
    <>
      <div className="sticky top-0 bg-white z-[100] max-w-[1900px]">
        <div
          className="hidden semiSm:block mx-10 sm:mx-15 md:mx-24 lg:mx-36 "
          onClick={() => setLoadingHome(false)}
        >
          <Navbar singlePage={false} />
        </div>

        <div className="block semiSm:hidden pt-1">
          <SmallNavbar />
        </div>
        <div className="border border-b-[0.5px] border-t-0 border-x-0 border-opacity-10 sticky top-20 " />
        <div
          className={`mt-8 sm:mx-15 md:mx-24 lg:mx-36 bg-white z-[40] transition-all`}
        >
          <div className="cursor-pointer font-cerealMedium  flex items-center justify-center h-fit">
            <div className="w-[100%] semiSm:w-[90%] md:w-[92%] xxl:w-[94%]">
              <IconsSwiper />
            </div>
            <div className="hidden semiSm:flex   border-[1px] mb-3  rounded-xl py-[.8rem] px-3 items-center justify-center text-xs">
              <img className="h-5 mr-2" src="/svg/twoArrows.svg" alt="" />
              <h1>Filters</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col max-w-[1900px] mx-10 sm:mx-15 md:mx-24 lg:mx-36">
        <div className="mt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xxl:grid-cols-4 xxxl:grid-cols-5 place-items-start">
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
      {/* <FooterSmall /> */}

      <Footer isHome />
    </>
  );
};

export default HomePage;
