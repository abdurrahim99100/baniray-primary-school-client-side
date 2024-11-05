import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const LeadershipAndTeam = () => {

    const [teachers, setTeachers] = useState();

    useEffect(() => {
        fetch('teacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, []);

    return (
        <>
            <section>
                <div className="p-8 mt-[100px] mb-[120px]">
                    <h3 className="text-[35px] font-bold text-center my-10">__Leadership & Team</h3>
                    {/* Principal's Message Section */}
                    <div className="flex bg-white p-6 rounded-lg shadow-lg mb-12">
                        <div className="w-1/3 flex items-center justify-center">
                            {/* SVG Icon representing a professional principal */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-40 h-40 text-gray-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 2.25c-1.243 0-2.25 1.007-2.25 2.25S10.757 6.75 12 6.75s2.25-1.007 2.25-2.25S13.243 2.25 12 2.25zM12 9a4.5 4.5 0 00-4.5 4.5v1.5c0 .414.336.75.75.75h1.5v5.25a.75.75 0 00.75.75h3a.75.75 0 00.75-.75V15.75h1.5a.75.75 0 00.75-.75v-1.5A4.5 4.5 0 0012 9z"
                                />
                            </svg>
                        </div>
                        <div className="w-2/3 p-4">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">Principal's Message</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Welcome to our school! We are committed to providing a nurturing environment where students can grow
                                academically, socially, and emotionally. I am proud of our dedicated teachers and staff, who work
                                tirelessly to ensure every student achieves their full potential. Let's continue to inspire and achieve
                                together!
                            </p>
                            <p className="mt-4 text-right font-semibold text-gray-800">- Principal's Mr.Jhilmil</p>
                        </div>
                    </div>

                    {/* Teacher & Staff Profiles Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">__Our Teachers & Staff</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Example Teacher Profile */}
                            {
                                teachers?.map(teacher =>
                                    <div key={teacher.id}
                                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                        <img src={teacher.image} alt="" className="rounded-full w-28 h-28 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-center text-gray-800">{teacher.name}</h3>
                                        <div className="flex gap-2 justify-center text-gray-600">
                                            {teacher.subject.map((sub, index) => (
                                                <li key={index} className="list-none bg-slate-100 px-1 rounded">{sub},</li>
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-700 mt-2">
                                            {teacher.about}
                                        </p>
                                    </div>)
                            }
                            {/* Repeat similar cards for other teachers and staff */}
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg my-12">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Staff Profiles</h2>
                            <div className="space-y-8">
                                <div className="bg-gray-100 p-4 rounded-lg shadow">
                                    <h3 className="text-2xl font-semibold text-gray-800">John Doe</h3>
                                    <p className="text-gray-700">Role: Administrative Officer</p>
                                    <p className="text-gray-600 text-sm">Email: johndoe@school.com</p>
                                    <p className="text-gray-700">John is responsible for maintaining all administrative tasks in the school and assisting teachers with paperwork.</p>
                                </div>

                                <div className="bg-gray-100 p-4 rounded-lg shadow">
                                    <h3 className="text-2xl font-semibold text-gray-800">Jane Smith</h3>
                                    <p className="text-gray-700">Role: Accountant</p>
                                    <p className="text-gray-600 text-sm">Email: janesmith@school.com</p>
                                    <p className="text-gray-700">Jane manages the school's finances, budgeting, and keeps track of financial records and transactions.</p>
                                </div>

                                <div className="bg-gray-100 p-4 rounded-lg shadow">
                                    <h3 className="text-2xl font-semibold text-gray-800">Michael Johnson</h3>
                                    <p className="text-gray-700">Role: Maintenance Supervisor</p>
                                    <p className="text-gray-600 text-sm">Email: michaeljohnson@school.com</p>
                                    <p className="text-gray-700">Michael oversees the maintenance of the school's facilities, ensuring a clean and safe environment for students and staff.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LeadershipAndTeam;