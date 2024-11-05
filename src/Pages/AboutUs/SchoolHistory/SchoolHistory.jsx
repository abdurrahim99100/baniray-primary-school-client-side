/* eslint-disable react/no-unescaped-entities */
const SchoolHistory = () => {
    return (
        <>
            <section>
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 uppercase">School History</h2>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 uppercase">
                            No. 4 West Char Banirayi Government Primary School
                        </h3>
                        <p className="text-lg text-gray-700 mb-2">
                            <strong>Established:</strong> 1947
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            The journey of the ৪ নং পশ্চিমচর বানিরায়ি Government Primary School started in a simple yet challenging environment. When the school was founded, the surrounding conditions were poor. The classrooms were dilapidated huts where water would often leak through the roof. Many people in the village were financially struggling, which made the school's beginning difficult and full of hardships.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            In the early days, ensuring the quality of education faced several challenges. However, through hard work, dedication from the teachers, and support from the local community, the school gradually transformed its standing. Today, the school has made significant progress in improving the quality of education and is now recognized as a prominent educational institution for the local students.
                        </p>
                        <p className="text-lg text-gray-700">
                            From the difficult early days of its establishment to the present era of improved and modern facilities, the school's journey is truly glorious.
                        </p>
                    </div>
                </div>
                {/* mission and vision */}
                <h3 className='uppercase text-center text-[35px] font-bold mt-10'>mission and vision</h3>
                <div className="flex flex-col md:flex-row gap-10  justify-between items-start p-8">
                    <div className="bg-white min-h-[300px] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Mission</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our mission is to provide a nurturing and inclusive environment where every child can achieve their full potential. We aim to foster a love for learning, critical thinking, and creativity through a well-rounded curriculum that promotes academic excellence, personal growth, and social responsibility.
                        </p>
                    </div>

                    <div className="bg-white min-h-[300px] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Vision</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We envision a future where our school stands as a beacon of educational excellence, empowering students to become lifelong learners and responsible citizens. We strive to adapt to the evolving educational landscape, incorporating innovative teaching methods and technology to prepare our students for the challenges of tomorrow.
                        </p>
                    </div>
                </div>

            </section >
        </>
    );
};

export default SchoolHistory;