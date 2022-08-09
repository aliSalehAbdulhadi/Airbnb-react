import HomeCard from "../../components/homeCard/HomeCard";
import Navbar from "../../components/navbars/navbar/Navbar";
import SmallNavbar from "../../components/navbars/smalNavbar/SmallNavbar";
import IconsSwiper from "../../components/swiper/iconsSwiper/IconsSwiper";

const HomePage = () => {
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
