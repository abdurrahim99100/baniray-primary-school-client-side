import { Helmet } from "react-helmet-async";
import SchoolHistory from "./SchoolHistory/SchoolHistory";
import LeadershipAndTeam from "./LeadershipAndTeam/LeadershipAndTeam";
import BannerCover from "../Shared/BannerCover/BannerCover";
import aboutBanner from "../../assets/banner/about-banner.jpeg";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>BPS | About</title>
            </Helmet>
            <section className="pt-[64px]">
                <BannerCover image={aboutBanner} title={'about'} subTitle={'Dive Deep into Our Story: Discover the Inspiration, Purpose, and Values that Shape Our Journey and Fuel Our Passion to Make an Impact Every Day'} />
                <SchoolHistory />
                <LeadershipAndTeam />
            </section>
        </>
    );
};

export default AboutUs;