/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Links = () => {
    return (
        <>
            <SectionTitle subHeading={'Our Important Link'} heading={'quick links'} />
            <section className="mb-[320px]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Link 1: Academics */}
                        <a
                            href="#"
                            className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-blue-100 transition-all duration-300"
                        >
                            <div className="text-3xl text-blue-500 mb-2">
                                {/* SVG Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-10 h-10 mx-auto"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v12m0 0H8m4 0h4m-4-12l4 4m-4-4l-4 4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Academics</h3>
                        </a>

                        {/* Link 2: Admissions */}
                        <a
                            href="#"
                            className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-green-100 transition-all duration-300"
                        >
                            <div className="text-3xl text-green-500 mb-2">
                                {/* SVG Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-10 h-10 mx-auto"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 10l4.72-4.72a2 2 0 00-2.83-2.83L12 7.17 7.1 2.28a2 2 0 00-2.83 2.83L9 10H4v10a2 2 0 002 2h12a2 2 0 002-2V10h-5z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Admissions</h3>
                        </a>

                        {/* Link 3: Contact */}
                        <a
                            href="#"
                            className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-yellow-100 transition-all duration-300"
                        >
                            <div className="text-3xl text-yellow-500 mb-2">
                                {/* SVG Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-10 h-10 mx-auto"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5h18M3 10h18m-7 5h7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Contact</h3>
                        </a>

                        {/* Link 4: Portal */}
                        <a
                            href="#"
                            className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-red-100 transition-all duration-300"
                        >
                            <div className="text-3xl text-red-500 mb-2">
                                {/* SVG Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-10 h-10 mx-auto"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Portal</h3>
                        </a>
                    </div>

                    {/* Link details */}
                    <div className="p-6 mt-6">
                        <p className="text-lg text-gray-700 mb-4">
                            <strong>Academics:</strong> Learn about our school's academic programs, syllabus, and all information related to education. Here, you can get detailed insights about course curriculum and the quality of education, enhancing your learning experience.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            <strong>Admissions:</strong> Visit our admissions link for information regarding the admission process, application deadlines, and other essential details. We strive to make your admission process as simple and convenient as possible.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            <strong>Contact:</strong> If you want to reach out to us, use this link to contact us directly. This link is available for any questions or information related to the school.
                        </p>
                        <p className="text-lg text-gray-700">
                            <strong>Portal:</strong> Use this link to access our student and teacher portal, where you can find assignments, results, and other necessary information.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Links;