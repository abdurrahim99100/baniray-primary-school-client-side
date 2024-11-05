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
        <>
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
            <section className="container mx-auto mt-[100px]">
                <div className="flex flex-col items-center">
                    <h3 className="text-[35px] uppercase font-bold">Welcome to our educational community!</h3>
                    <p className="max-w-[450px] text-center text-[16px] my-5">A promise to build a bright future for students—at our school, we support every child to explore their potential and move forward successfully.</p>
                </div>
                <div>
                    {/*  */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {/* Learning Icon */}
                        <div className="text-center bg-yellow-50 p-10 rounded shadow-lg hover:shadow-2xl transition duration-300">
                            <svg className="w-14 h-14 mx-auto mb-4 bg-yellow-200 rounded p-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5zm0 13l-10-5 10-5 10 5-10 5zm0 6l-10-5 10-5 10 5-10 5z" />
                            </svg>
                            <h3 className="text-xl font-semibold">Learning & Studying</h3>
                            <p className="text-gray-600 mt-2 text-left">We encourage every student to improve their study habits and explore new ideas in a supportive environment.</p>
                        </div>
                        <div className="text-center bg-yellow-50 p-10 rounded shadow-lg hover:shadow-2xl transition duration-300">
                            <svg className="w-14 h-14 mx-auto mb-4 bg-yellow-200 rounded p-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6l3 6h-6l3-6zm0 0L9 18h6l-3-12z" />
                            </svg>
                            <h3 className="text-xl font-semibold">Discipline & Values</h3>
                            <p className="text-gray-600 mt-2 text-left">Discipline and strong values are key pillars of our school. We teach our students to be honest and responsible in all aspects of life.</p>
                        </div>
                        <div className="text-center bg-yellow-50 p-10 rounded shadow-lg hover:shadow-2xl transition duration-300">
                            <svg className="w-14 h-14 mx-auto mb-4 bg-yellow-200 rounded p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 9.172a4 4 0 010 5.656m1.414-1.414a6 6 0 10-8.486 0m1.414-1.414a4 4 0 015.657 0z" />
                            </svg>
                            <h3 className="text-xl font-semibold">Co-curricular Activities</h3>
                            <p className="text-gray-600 mt-2 text-left">We encourage students to participate in sports, arts, and music, which help in their overall mental and physical development.</p>
                        </div>
                        <div className="text-center bg-yellow-50 p-10 rounded shadow-lg hover:shadow-2xl transition duration-300">
                            <svg className="w-14 h-14 mx-auto mb-4 bg-yellow-200 rounded p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12l2-2m0 0l4-4 6 6M9 12h.01" />
                            </svg>
                            <h3 className="text-xl font-semibold">Technology & Innovation</h3>
                            <p className="text-gray-600 mt-2 text-left">We provide students with the infrastructure to enhance their technical skills and foster innovative thinking.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-yellow-400 text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-300">
                        Learn More
                    </button>
                </div>
            </section>
        </>
    );
};

export default Banner;