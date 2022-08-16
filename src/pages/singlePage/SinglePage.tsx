import { useState } from 'react';
import TitleSection from '../../components/singlePageComponents/titleSections/titleSection/TitleSection';
import ImageSection from '../../components/singlePageComponents/imageSection/ImageSection';
import AboutSection from '../../components/singlePageComponents/aboutSection/AboutSection';
import ReviewSection from '../../components/singlePageComponents/reviewSection/ReviewSection';
import MapSection from '../../components/singlePageComponents/mapSection/MapSection';
import HostInfo from '../../components/singlePageComponents/hostInfo/HostInfo';
import Footer from '../../components/singlePageComponents/footer/Footer';
import Navbar from '../../components/navbars/navbar/Navbar';
import SmallNavbar from '../../components/navbars/smalNavbar/SmallNavbar';
import SinglePageImageSwiper from '../../components/swiper/singlePageImageSwiper/SinglePageImageSwiper';
import TitleSmallSection from '../../components/singlePageComponents/titleSections/titleSmallSection/TitleSmallSection';
import ReviewsSwiper from '../../components/swiper/reviewsSwiper/ReviewsSwiper';
import FooterReservation from '../../components/singlePageComponents/footer/footerReservation/FooterReservation';
import NavbarOnScroll from '../../components/navbars/navbarOnscroll/NavbarOnScroll';
import useDataBase from '../../context/dataStore/dataStore';
import { useParams } from 'react-router-dom';
import { useScrollY } from '../../hooks/useScrollY';

const SinglePage = () => {
  const [hostImage, setHostImage] = useState<string>('');
  const db = useDataBase((state: any) => state.db);
  const { id } = useParams();
  const singleData = db.find((singleData: any) => singleData.id === id);
  const scroll = 100;
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
      <div className="md:block hidden sticky top-0 z-[50]  ">
        <div className={`${scroll > 750 ? 'block' : 'hidden'}`}>
          <NavbarOnScroll scrollY={scroll} />
          <div className="border border-b-[0.5px] border-t-0 border-x-0 border-opacity-10" />
        </div>
      </div>
      <div className="border border-b-[0.5px] border-t-0 border-x-0 border-opacity-10" />
      <div className="flex  flex-col mx-auto  max-w-[1500px]">
        <div
          id="photos"
          className="hidden semiSm:block mx-10 semiSm:mx-20 md:mx-28 xl:mx-48"
        >
          <TitleSection
            title={singleData?.title}
            rating={singleData?.rating}
            reviewLength={singleData?.reviews?.length}
            location={singleData?.location}
          />
        </div>

        <div className="hidden semiSm:block mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <ImageSection />
        </div>

        <div className="block semiSm:hidden">
          <SinglePageImageSwiper />
        </div>

        <div className="block semiSm:hidden mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <TitleSmallSection
            title={singleData?.title}
            rating={singleData?.rating}
            reviewLength={singleData?.reviews?.length}
            location={singleData?.location}
          />
        </div>

        <div className="mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <AboutSection
            roomInfo={singleData?.roomInfo}
            host={singleData?.host}
            price={singleData?.price}
            reviews={singleData?.reviews}
            rating={singleData?.rating}
            hostImage={(e: string[]) => setHostImage(e[2])}
          />
        </div>

        <div
          id="reviews"
          className="hidden sm:block mx-10 semiSm:mx-20 md:mx-28 xl:mx-48"
        >
          <ReviewSection
            reviews={singleData?.reviews}
            rating={singleData?.rating}
          />
        </div>
        <div className="block sm:hidden mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <ReviewsSwiper
            reviews={singleData?.reviews}
            rating={singleData?.rating}
          />
        </div>
        <div id="map" className="mx-10 semiSm:mx-20 md:mx-28 xl:mx-48 ">
          <MapSection location={singleData?.location} />
        </div>

        <div className="mx-10 semiSm:mx-20 md:mx-28 xl:mx-48">
          <HostInfo
            host={singleData?.host}
            totalReviews={singleData?.totalReview}
            coHosts={singleData?.coHosts}
            joined={singleData?.joined}
            hostImage={hostImage}
          />
        </div>
      </div>
      <Footer />
      <FooterReservation />
    </>
  );
};

export default SinglePage;
