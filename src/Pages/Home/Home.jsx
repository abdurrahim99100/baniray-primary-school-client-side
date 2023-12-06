import UpComing from "../Shared/UpComing/UpComing";
// import AllEnrollClass from "./AllEnrollClass/AllEnrollClass";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import PopularClass from "./PopularClass/PopularClass";
import SuccessStory from "./SuccessStory/SuccessStory";
import Teacher from "./Teacher/Teacher";

const Home = () => {
    return (
        <div>
            <Banner />
            <SuccessStory />
            {/* <AllEnrollClass /> */}
            <PopularClass />
            <ContactUs />
            <UpComing />
            <Teacher />
        </div>
    );
};

export default Home;