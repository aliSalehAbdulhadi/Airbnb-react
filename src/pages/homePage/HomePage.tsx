import { useEffect, memo } from "react";
import { v4 as uuidv4 } from "uuid";
import HomeCard from "../../components/homeCard/HomeCard";
import Navbar from "../../components/navbars/navbar/Navbar";
import SmallNavbar from "../../components/navbars/smalNavbar/SmallNavbar";
import IconsSwiper from "../../components/swiper/iconsSwiper/IconsSwiper";
import useDataBase from "../../context/dataStore/dataStore";
import { dynamicData } from "../../data/dynamicData";
import LoadingCard from "../../components/loadingCard/LoadingCard";
import useSearchSwiper from "../../context/searchSwiper/searchSwiper";
import useLoading from "../../context/loading/loading";

const HomePage = () => {
  const loadingHome = useLoading((state: any) => state.loadingHome);
  const setLoadingHome = useLoading((state: any) => state.setLoadingHome);
  const db = useDataBase((state: any) => state.db);
  const populatedb = useDataBase((state: any) => state.populatedb);
  const currSwiper = useSearchSwiper((state: any) => state.swiper);
  useEffect(() => {
    const number = [1, 2, 3, 4, 2, 3, 4, 2, 3, 4];
    number.map(() => populatedb(dynamicData()));

    const timer = setTimeout(() => {
      setLoadingHome(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [populatedb, currSwiper, setLoadingHome]);
  return (
    <>
      <div className="mx-10 sm:mx-15 md:mx-24 lg:mx-36">
        <div
          className="hidden semiSm:block"
          onClick={() => setLoadingHome(false)}
        >
          <Navbar singlePage={false} />
        </div>

        <div className="block semiSm:hidden">
          <SmallNavbar />
        </div>
      </div>
      <div className="border border-b-[0.5px] border-t-0 border-x-0 border-opacity-10" />
      <div className="flex items-center flex-col max-w-[1900px] mx-10 sm:mx-15 md:mx-24 lg:mx-36">
        <div className="mt-10 w-full">
          <IconsSwiper />
        </div>
        <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xxl:grid-cols-4 xxxl:grid-cols-5 place-items-start">
          {db.map((singleData: any) => {
            return loadingHome ? (
              <LoadingCard />
            ) : (
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

export default memo(HomePage);
