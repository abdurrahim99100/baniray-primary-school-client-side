import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../../assets/home-banner-photo/banner-01.jpg';
import image2 from '../../../assets/home-banner-photo/banner-02.jpg';
import image3 from '../../../assets/home-banner-photo/banner-03.jpg';
import image4 from '../../../assets/home-banner-photo/banner-04.jpg';
import image5 from '../../../assets/home-banner-photo/banner-05.jpg';
import image6 from '../../../assets/home-banner-photo/banner-06.jpg';


const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={image1} />
            </div>
            <div>
                <img src={image2} />
            </div>
            <div>
                <img src={image3} />
            </div>
            <div>
                <img src={image4} />
            </div>
            <div>
                <img src={image5} />
            </div>
            <div>
                <img src={image6} />
            </div>
        </Carousel>
    );
};

export default Banner;