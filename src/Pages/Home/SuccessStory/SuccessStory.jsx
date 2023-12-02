import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const SuccessStory = () => {

    const [successImages, setSuccessImages] = useState([]);

    useEffect(() => {
        fetch('success.json')
            .then(res => res.json())
            .then(data => setSuccessImages(data));
    }, [])

    // console.log(successImage);
    // swiper javascript;
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section className='container mx-auto lg:my-20'>
            <SectionTitle subHeading={"A Tale of Triumph and Perseverance"} heading={"success story"} />
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper lg:mt-20"
            >
                {
                    successImages.map((image, index) =>
                        <SwiperSlide key={index}>
                            <img className='rounded' src={image.image} alt="" />
                        </SwiperSlide>)
                }
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </section>
    );
};

export default SuccessStory;



