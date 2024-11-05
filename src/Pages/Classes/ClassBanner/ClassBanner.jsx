import { FaVideo, FaRegLightbulb, FaAlignLeft } from "react-icons/fa";


const ClassBanner = () => {
    return (
        <>
            <section>
                <img className="w-[1920px] max:h-[640px] " src="https://i.ibb.co.com/LCZNq1V/58422250-9429465.jpg" alt="" />
                <div className="flex flex-col items-center my-10 p-4 border rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">ভর্তির সময়সূচী</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>ভর্তি শুরু:</strong> ১০ ডিসেম্বর, ২০২৪</li>
                        <li><strong>ভর্তি শেষ:</strong> ২৪ ডিসেম্বর, ২০২৪</li>
                        <li><strong>অরিয়েন্টেশন:</strong> ২৮ ডিসেম্বর, ২০২৪</li>
                        <li><strong>ক্লাস শুরু:</strong> ৩০ ডিসেম্বর, ২০২৪</li>
                    </ul>
                </div>
            </section>
            <section>
                <h3 className="text-center text-3xl">What you will learn_ from this course?</h3>
                <div className="container mx-auto p-6">
                    {/* Subject Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Bengali */}
                        <div className="p-6 border rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-center ">বাংলা</h3>
                            <p className="mt-4 text-lg">বাংলা ভাষা ও সাহিত্যের বিস্তারিত ধারণা এবং লেখার কৌশল শিখানো হবে।</p>
                        </div>

                        {/* English */}
                        <div className="p-6 border rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-center ">ইংরেজি</h3>
                            <p className="mt-4 text-lg ">ইংরেজি ভাষার মৌলিক কৌশল, বাক্যগঠন এবং শব্দভাণ্ডার শিখানো হবে।</p>
                        </div>

                        {/* Mathematics */}
                        <div className="p-6 border rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-center">গণিত</h3>
                            <p className="mt-4 text-lg text-gray-700">গণিতের মৌলিক ধারণা, অংক সমাধান এবং সমস্যা সমাধানের দক্ষতা শিখানো হবে।</p>
                        </div>

                        {/* Social Science */}
                        <div className="p-6 border rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-center ">সমাজবিজ্ঞান</h3>
                            <p className="mt-4 text-lg text-gray-700">সমাজের সংগঠন, ইতিহাস এবং সমাজবিজ্ঞানী তত্ত্বের বুনিয়াদি শিখানো হবে।</p>
                        </div>

                        {/* Science */}
                        <div className="p-6 border rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-center ">বিজ্ঞান</h3>
                            <p className="mt-4 text-lg text-gray-700">বিজ্ঞান এর মৌলিক ধারণা, প্রাকৃতিক পরিবেশ এবং জীববিজ্ঞান, রসায়ন, পদার্থবিজ্ঞান ইত্যাদি বিষয়ে আলোচনা করা হবে।</p>
                        </div>

                        {/* Religion */}
                        <div className="p-6 border rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-center ">ধর্ম</h3>
                            <p className="mt-4 text-lg text-gray-700">ধর্মের মৌলিক ধারণা, বিভিন্ন ধর্মের শিক্ষা, বিশ্বাস এবং ধর্মীয় মূল্যবোধ শিখানো হবে।</p>
                        </div>
                    </div>
                </div>
                {/* youtube videos */}
                <div className="container mx-auto p-6">
                    <h2 className="text-2xl font-semibold text-center">আমাদের YouTube ভিডিও</h2>

                    <div className="mt-4 flex justify-center">
                        {/* YouTube Embed */}
                        <iframe style={{ borderRadius: '5px', boxShadow: "revert-layer" }}
                            width="660"
                            height="385"
                            src="https://www.youtube.com/embed/5gFldgZgJM8" // এখানে আপনার ভিডিও URL দিন
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube video"
                        ></iframe>
                    </div>
                </div>
            </section>
            <section>
                <div className="lg:flex justify-center gap-24 my-20">
                    <div className="p-6 border rounded-lg shadow-md w-[360px]">
                        <FaVideo className="text-3xl text-[#0cc0ff] mb-2" />
                        <h4 className="text-3xl">630+ videos</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem culpa impedit esse ipsa sequi aliquid, porro quos eos tempora facere?</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-md w-[360px]">
                        <FaRegLightbulb className="text-3xl text-[#0cc0ff] mb-2" />
                        <h4 className="text-3xl">630+ Project</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem culpa impedit esse ipsa sequi aliquid, porro quos eos tempora facere?</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-md w-[360px]">
                        <FaAlignLeft className="text-3xl text-[#0cc0ff] mb-2" />
                        <h4 className="text-3xl">20+ Class</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem culpa impedit esse ipsa sequi aliquid, porro quos eos tempora facere?</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClassBanner;
