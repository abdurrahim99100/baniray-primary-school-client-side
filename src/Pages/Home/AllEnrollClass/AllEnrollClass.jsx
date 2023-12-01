// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';
// import required modules
import { EffectCards } from 'swiper/modules';
// import image;
import swiper1 from '../../../assets/enroll-class/enroll-class01.jpg';
import swiper2 from '../../../assets/enroll-class/enroll-class02.jpg';
import swiper3 from '../../../assets/enroll-class/enroll-class03.jpg';
import swiper4 from '../../../assets/enroll-class/enroll-class04.jpg';
import swiper5 from '../../../assets/enroll-class/enroll-class05.jpg';
import swiper6 from '../../../assets/enroll-class/enroll-class06.jpg';
import swiper7 from '../../../assets/enroll-class/enroll-class07.jpg';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const AllEnrollClass = () => {
    return (
        <section className='lg:mt-36 lg:mb-[200px]'>
            <SectionTitle subHeading={'Class time 10.00 am to 05.00 pm'} heading={'enroll online'} />
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide className='relative'>
                    <img className='rounded' src={swiper1} alt="" />
                    <h3 style={{ borderRadius: '50px 10px 50px 10px' }}
                        className='absolute bottom-3 bg-orange-300 p-2 px-4'>Ict</h3>
                </SwiperSlide>

                <SwiperSlide className='relative'>
                    <img className='rounded' src={swiper2} alt="" />
                    <h3 style={{ borderRadius: '50px 10px 50px 10px' }}
                        className='absolute bottom-3 bg-orange-300 p-2 px-4'>Math</h3>
                </SwiperSlide>

                <SwiperSlide className='relative'>
                    <img className='rounded' src={swiper3} alt="" />
                    <h3
                        style={{ borderRadius: '50px 10px 50px 10px' }}
                        className='absolute bottom-3 bg-orange-300 p-2 px-4'>Agriculture</h3>
                </SwiperSlide>

                <SwiperSlide className='relative'>
                    <img className='rounded' src={swiper4} alt="" />
                    <h3
                        style={{ borderRadius: '50px 10px 50px 10px' }}
                        className='absolute bottom-3 bg-orange-300 p-2 px-4'>Science</h3>
                </SwiperSlide>

                <SwiperSlide className='relative'>
                    <img className='rounded' src={swiper5} alt="" />
                    <h3
                        style={{ borderRadius: '50px 10px 50px 10px' }}
                        className='absolute bottom-3 bg-orange-300 p-2 px-4'>Religion</h3>
                </SwiperSlide>

                <SwiperSlide className='relative'>
                    <img className='rounded' src={swiper6} alt="" />
                    <h3
                        style={{ borderRadius: '50px 10px 50px 10px' }}
                        className='absolute bottom-3 bg-orange-300 p-2 px-4'>English</h3>
                </SwiperSlide>

                <SwiperSlide className='relative'>
                    <img className='rounded' src={swiper7} alt="" />
                    <h3
                        style={{ borderRadius: '50px 10px 50px 10px' }}
                        className='absolute bottom-3 bg-orange-300 p-2 px-4'>Social science</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default AllEnrollClass;


{/* <SwiperSlide className='flex flex-col relative'>
    <img className='rounded' src={swiper1} alt="" />
    <p className='uppercase absolute bottom-6 bg-white w-10/12 rounded-xl text-3xl font-bold text-yellow-400'>ict</p>
</SwiperSlide> */}