import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const NoticeBoard = () => {
    return (
        <>
            <SectionTitle subHeading={'News'} heading={"Out notice"} />
            <section>
                <div className="max-w-6xl mx-auto px-6">
                    {/* Title */}
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
                        Notice Board
                    </h2>

                    {/* Notice Board Section */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <ul className="divide-y divide-gray-200">
                            {/* Notice 1 */}
                            <li className="py-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Exam Date: October 25, 2024
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    The final exam date for grade 5 has been announced. The exam will be held on October 25, 2024.
                                </p>
                            </li>

                            {/* Notice 2 */}
                            <li className="py-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Holiday: Durga Puja (October 15-18)
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    The school will remain closed from October 15-18 for Holy Eid-ul-Fitr.
                                </p>
                            </li>

                            {/* Notice 3 */}
                            <li className="py-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Admissions: 2025 Academic Year
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Admissions for the 2025 academic year will begin on December 1. More details will be shared soon.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NoticeBoard;