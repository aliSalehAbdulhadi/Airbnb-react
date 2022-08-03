import TitleSection from "../../components/singlePage/titleSection/TitleSection";
import ImageSection from "../../components/singlePage/imageSection/ImageSection";
import AboutSection from "../../components/singlePage/aboutSection/AboutSection";

const SinglePage = () => {
  return (
    <div className="mx-[20rem] mt-8 ">
      <TitleSection />
      <ImageSection />
      <AboutSection />
    </div>
  );
};

export default SinglePage;
