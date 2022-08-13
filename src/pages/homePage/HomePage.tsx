import { useEffect, memo, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import HomeCard from "../../components/homeCard/HomeCard";
import Navbar from "../../components/navbars/navbar/Navbar";
import SmallNavbar from "../../components/navbars/smalNavbar/SmallNavbar";
import IconsSwiper from "../../components/swiper/iconsSwiper/IconsSwiper";
import useDataBase from "../../context/dataStore/dataStore";
import { dynamicData } from "../../data/dynamicData";
import useImageStore from "../../context/imagesStore/imagesStore";

const HomePage = () => {
  const db = useDataBase((state: any) => state.db);
  const populatedb = useDataBase((state: any) => state.populatedb);
  // const imagess = useImageStore((state: any) => state.images?.data?.hits);
  // console.log(imagess);
  // const fetch = useImageStore((state: any) => state.fetch);

  // useEffect(() => {
  //   fetch();
  // }, []);

  useEffect(() => {
    const number = [1, 2, 3, 4];
    number.map(() => populatedb(dynamicData()));
  }, [populatedb]);
  return (
    <>
      <div className="mx-10 sm:mx-15 md:mx-24 lg:mx-36">
        <div className="hidden semiSm:block">
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
            return (
              <HomeCard
                key={uuidv4()}
                title={singleData.title}
                host={singleData.host}
                price={singleData.price}
                date={singleData.date}
                id={singleData.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
