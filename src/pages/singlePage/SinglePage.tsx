import TitleSection from "../../components/singlePageComponents/titleSections/titleSection/TitleSection";
import ImageSection from "../../components/singlePageComponents/imageSection/ImageSection";
import AboutSection from "../../components/singlePageComponents/aboutSection/AboutSection";
import ReviewSection from "../../components/singlePageComponents/reviewSection/ReviewSection";
import MapSection from "../../components/singlePageComponents/mapSection/MapSection";
import HostInfo from "../../components/singlePageComponents/hostInfo/HostInfo";
import Footer from "../../components/singlePageComponents/footer/Footer";
import Navbar from "../../components/navbars/navbar/Navbar";
import SmallNavbar from "../../components/navbars/smalNavbar/SmallNavbar";
import SinglePageImageSwiper from "../../components/swiper/singlePageImageSwiper/SinglePageImageSwiper";
import TitleSmallSection from "../../components/singlePageComponents/titleSections/titleSmallSection/TitleSmallSection";
import ReviewsSwiper from "../../components/swiper/reviewsSwiper/ReviewsSwiper";
import FooterReservation from "../../components/singlePageComponents/footer/footerReservation/FooterReservation";

const SinglePage = () => {
  return (
    <>
      <div className="max-w-[1500px] mx-auto  hidden semiSm:block ">
        <div className="mx-5 semiSm:mx-20 md:mx-28 xl:mx-48">
          <div className="hidden semiSm:block">
            <Navbar singlePage={true} />
          </div>
          <div className="block semiSm:hidden">
            <SmallNavbar />
          </div>
        </div>
      </div>
      <div className="border border-b-[0.5px] border-t-0 border-x-0 border-opacity-10" />
      <div className="flex  flex-col mx-auto  max-w-[1500px]">
        <div className="hidden semiSm:block mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <TitleSection />
        </div>

        <div className="hidden semiSm:block mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <ImageSection />
        </div>

        <div className="block semiSm:hidden">
          <SinglePageImageSwiper />
        </div>

        <div className="block semiSm:hidden mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <TitleSmallSection />
        </div>

        <div className="mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <AboutSection />
        </div>

        <div className="hidden sm:block mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <ReviewSection />
        </div>
        <div className="block sm:hidden mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <ReviewsSwiper />
        </div>
        <div className="mx-10 semiSm:mx-20 md:mx-28 xl:mx-48 ">
          <MapSection />
        </div>

        <div className="mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <HostInfo />
        </div>
      </div>
      <Footer />
      <FooterReservation />
    </>
  );
};

export default SinglePage;
