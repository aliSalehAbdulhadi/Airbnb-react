import TitleSection from "../../components/singlePage/titleSection/TitleSection";
import ImageSection from "../../components/singlePage/imageSection/ImageSection";
import AboutSection from "../../components/singlePage/aboutSection/AboutSection";
import ReviewSection from "../../components/singlePage/reviewSection/ReviewSection";
import MapSection from "../../components/singlePage/mapSection/MapSection";
import HostInfo from "../../components/singlePage/hostInfo/HostInfo";
import Footer from "../../components/singlePage/footer/Footer";

const SinglePage = () => {
  return (
    <div className="mt-8">
      <div className="mx-[25rem]">
        <TitleSection />
        <ImageSection />
        <AboutSection />
        <ReviewSection />
        <MapSection />
        <HostInfo />
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
