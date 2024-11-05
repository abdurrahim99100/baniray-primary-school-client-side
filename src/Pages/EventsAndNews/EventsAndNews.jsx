import { Helmet } from "react-helmet-async";
import BannerCover from "../Shared/BannerCover/BannerCover";
import eventBanner from "../../assets/banner/events-banner.jpeg"

const EventsAndNews = () => {
    return (
        <>
            <Helmet>
                <title>BPS | Events</title>
            </Helmet>
            <section className="pt-[64px]">
                <BannerCover image={eventBanner} title={"Upcoming Events & Activities"} subTitle={"Stay updated on the latest events, workshops, and gatherings. Connect, learn, and celebrate with our community throughout the year"} />
                <div>
                    This is EventsAndNews component
                </div>
            </section>
        </>
    );
};

export default EventsAndNews;