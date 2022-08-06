import HomeCard from "../../components/homeCard/HomeCard";
import Navbar from "../../components/navbars/navbar/Navbar";
import SmallNavbar from "../../components/navbars/smalNavbar/SmallNavbar";
import IconsSwiper from "../../components/swiper/iconsSwiper/IconsSwiper";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="hidden semiSm:block">
          <Navbar />
        </div>
        <div className="block semiSm:hidden">
          <SmallNavbar />
        </div>
      </div>
      <div className="flex items-center flex-col mx-auto md:px-[9rem] w-auto sm:w-[800px] md:w-[1200px] lg:w-[1000px] xl:w-[1200px] xxl:w-[1600px] xxxl:w-[1900px]">
        <div className="mt-10 w-full">
          <IconsSwiper />
        </div>
        <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xxl:grid-cols-4 xxxl:grid-cols-5 place-items-start mx-10">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </div>
    </>
  );
};

export default HomePage;
