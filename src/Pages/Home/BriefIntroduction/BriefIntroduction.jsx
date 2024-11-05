import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const BriefIntroduction = () => {
    return (
        < >
            <SectionTitle subHeading={'Hot'} heading={'brief introduction'} />
            <section>
                <div className="max-w-6xl mx-auto px-6">
                    {/* Title */}
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
                        Brief Introduction of Our School
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-700 text-center mb-12">
                        4 no west Baniray Government Primary School is a highly respected institution. We provide high-quality education and discipline with the goal of building a bright future for our students.
                    </p>

                    {/* Features Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-yellow-50 shadow-lg rounded-lg p-6 text-center">
                            <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                                {/* SVG Icon for High-Quality Education */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l7 7-7 7-7-7 7-7zm0 6v12m0 0H8m4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">High-Quality Education</h3>
                            <p className="text-gray-600 mt-2">We provide each student with the highest quality education.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-yellow-50 shadow-lg rounded-lg p-6 text-center">
                            <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                                {/* SVG Icon for Technology */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-green-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h.01M15 12h.01M12 15.5v.01M12 6v6m-3 6h6m3 2H6a1 1 0 01-1-1V5a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Technology & Innovation</h3>
                            <p className="text-gray-600 mt-2">Our students learn through modern technology.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-yellow-50 shadow-lg rounded-lg p-6 text-center">
                            <div className="bg-yellow-100 p-4 rounded-full inline-block mb-4">
                                {/* SVG Icon for Co-curricular Activities */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l6 6m0 0l6-6m-6 6V4m4 6h5a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-4m-2 0v4a2 2 0 002 2h6m0 0a2 2 0 002-2v-6m0 0a2 2 0 00-2-2h-5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Co-curricular Activities</h3>
                            <p className="text-gray-600 mt-2">Students get the opportunity to participate in various co-curricular activities.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-yellow-50 shadow-lg rounded-lg p-6 text-center">
                            <div className="bg-red-100 p-4 rounded-full inline-block mb-4">
                                {/* SVG Icon for Discipline & Values */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-red-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-3-3l-3-3m6 0V6a6 6 0 00-6 6m0 0a6 6 0 00-6 6m12 0h.01M6 12h.01m6-3V4m6 14v-2m-2-6h2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Discipline & Values</h3>
                            <p className="text-gray-600 mt-2">Our students are taught discipline and ethics.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BriefIntroduction;