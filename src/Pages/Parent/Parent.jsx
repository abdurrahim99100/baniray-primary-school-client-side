/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import BannerCover from "../Shared/BannerCover/BannerCover";
import parentBanner from "../../assets/banner/parent-banner.jpeg";

const Parent = () => {
    return (
        <>
            <Helmet>
                <title>BPS | Parent</title>
            </Helmet>
            <section className="pt-[64px]">
                <BannerCover image={parentBanner } title={"Resources for Parents"} subTitle={"Empowering you with guidance, tools, and support to nurture your child's learning journey and growth"} />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-black mb-8 text-center">Parent</h2>

                    {/* Parent Portal */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h3 className="text-2xl font-semibold text-black mb-4">Parent Portal</h3>
                        <p className="text-gray-600 mb-4">
                            A secure login system for viewing students' performance, attendance, and exam results.
                        </p>
                        <button className="bg-black text-white py-2 px-6 rounded-full shadow-md transition duration-300 hover:bg-gray-800">
                            Login Now
                        </button>
                    </div>

                    {/* Parent-Teacher Meeting */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h3 className="text-2xl font-semibold text-black mb-4">Parent-Teacher Meeting</h3>
                        <p className="text-gray-600 mb-4">
                            View the meeting schedule and important guidelines by clicking below.
                        </p>
                        <button className="bg-black text-white py-2 px-6 rounded-full shadow-md transition duration-300 hover:bg-gray-800">
                            View Schedule
                        </button>
                    </div>

                    {/* School Rules & Guidelines */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-semibold text-black mb-4">School Rules & Guidelines</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Following the school dress code is mandatory.</li>
                            <li>All safety rules and regulations, inside and outside the school, must be followed.</li>
                            <li>Any violation of discipline will result in corrective action.</li>
                            <li>Adhere to the school schedule, and inform the school properly in case of absence.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Parent;