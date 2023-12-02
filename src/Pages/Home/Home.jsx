import UpComing from "../Shared/UpComing/UpComing";
import AllEnrollClass from "./AllEnrollClass/AllEnrollClass";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import PopularClass from "./PopularClass/PopularClass";
import SuccessStory from "./SuccessStory/SuccessStory";

const Home = () => {
    return (
        <div>
            <Banner />
            <SuccessStory />
            {/* <AllEnrollClass /> */}
            <PopularClass />
            <ContactUs />
            <UpComing />
        </div>
    );
};

export default Home;