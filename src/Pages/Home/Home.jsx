import AllEnrollClass from "./AllEnrollClass/AllEnrollClass";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import PopularClass from "./PopularClass/PopularClass";

const Home = () => {
    return (
        <div>
            <Banner />
            <AllEnrollClass />
            <PopularClass />
            <ContactUs />
        </div>
    );
};

export default Home;