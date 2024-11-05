import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
// import UpComing from "../Shared/UpComing/UpComing";
// import OurImpact from "./OurImpact/OurImpact";
// import Teacher from "./Teacher/Teacher";
import BriefIntroduction from "./BriefIntroduction/BriefIntroduction";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
import OurEvents from "./OurEvents/OurEvents";
import HomeGallery from "./HomeGallery/HomeGallery";
import Links from "./Links/Links";
import OurImpact from "./OurImpact/OurImpact";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>BPS | Home</title>
            </Helmet>
            <section className="pt-[64px]">
                <Banner />
                <BriefIntroduction />
                <NoticeBoard />
                <OurImpact />
                <OurEvents />
                <HomeGallery />
                <Links />
            </section>
        </>
    );
};

export default Home;