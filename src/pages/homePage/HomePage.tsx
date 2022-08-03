import HomeCard from "../../components/homeCard/HomeCard";
import IconsSwiper from "../../components/swiper/iconsSwiper/IconsSwiper";

const HomePage = () => {
  return (
    <div className="flex flex-col px-[9rem]">
      <div className="mt-10">
        <IconsSwiper />
      </div>
      <div className="mt-10 flex justify-around">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};

export default HomePage;
