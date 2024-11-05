/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const AdmissionFaq = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="mb-8 max-w-7xl mx-auto mt-[100px]">
            {/* Professional Heading */}
            <h1 className="text-2xl font-semibold mb-6">
                Frequently Asked Questions about Admissions
            </h1>

            {/* Quality and Method of Education */}
            <button
                className="w-full bg-white text-left px-6 py-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection('educationQuality')}
            >
                <h3 className="text-xl font-semibold">What is the quality and method of education?</h3>
                <span>{openSection === 'educationQuality' ? '-' : '+'}</span>
            </button>
            {openSection === 'educationQuality' && (
                <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                    <p className="text-gray-600">
                        Our institution maintains a very high standard of education, where experienced teachers use modern methods for instruction. A student-centered environment has been created for learners to acquire theoretical knowledge and practical skills. Through experiential learning and project-based approaches, students enhance their creativity and problem-solving abilities, which helps shape their bright future.
                    </p>
                </div>
            )}

            {/* Facilities and Environment */}
            <button
                className="w-full bg-white text-left px-6 py-4 mt-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection('facilitiesEnvironment')}
            >
                <h3 className="text-xl font-semibold">What are the facilities and environment like?</h3>
                <span>{openSection === 'facilitiesEnvironment' ? '-' : '+'}</span>
            </button>
            {openSection === 'facilitiesEnvironment' && (
                <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                    <p className="text-gray-600">
                        The classroom environment in our institution is highly conducive, equipped with modern technology and equipment. Essential labs, libraries, playgrounds, and other facilities are ensured for students.
                    </p>
                </div>
            )}

            {/* Security and Safety */}
            <button
                className="w-full bg-white text-left px-6 py-4 mt-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection('securitySafety')}
            >
                <h3 className="text-xl font-semibold">What is the security and safety like?</h3>
                <span>{openSection === 'securitySafety' ? '-' : '+'}</span>
            </button>
            {openSection === 'securitySafety' && (
                <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                    <p className="text-gray-600">
                        Our institution has a robust security system. Specific protocols are followed to ensure the safety of students, which helps keep them secure.
                    </p>
                </div>
            )}

            {/* Fees and Financial Issues */}
            <button
                className="w-full bg-white text-left px-6 py-4 mt-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection('feesFinancial')}
            >
                <h3 className="text-xl font-semibold">What are the fees and financial issues?</h3>
                <span>{openSection === 'feesFinancial' ? '-' : '+'}</span>
            </button>
            {openSection === 'feesFinancial' && (
                <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                    <p className="text-gray-600">
                        Admission and monthly fees depend on the institution's policies. We offer some financial assistance, such as scholarships or discounts, to help students.
                    </p>
                </div>
            )}

            {/* Class Size and Teacher-Student Ratio */}
            <button
                className="w-full bg-white text-left px-6 py-4 mt-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection('classSizeRatio')}
            >
                <h3 className="text-xl font-semibold">What is the class size and teacher-student ratio?</h3>
                <span>{openSection === 'classSizeRatio' ? '-' : '+'}</span>
            </button>
            {openSection === 'classSizeRatio' && (
                <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                    <p className="text-gray-600">
                        The number of students in our classes typically ranges from 20 to 25. The teacher-student ratio is 1:15, which helps teachers connect well with students.
                    </p>
                </div>
            )}

            {/* Extracurricular Activities */}
            <button
                className="w-full bg-white text-left px-6 py-4 mt-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection('extracurricular')}
            >
                <h3 className="text-xl font-semibold">What are the extracurricular activities like?</h3>
                <span>{openSection === 'extracurricular' ? '-' : '+'}</span>
            </button>
            {openSection === 'extracurricular' && (
                <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                    <p className="text-gray-600">
                        Our institution organizes various extracurricular activities such as sports, music, dance, and debate. These activities are conducted seriously, contributing to the overall development of students.
                    </p>
                </div>
            )}

            {/* Examination and Evaluation Methods */}
            <button
                className="w-full bg-white text-left px-6 py-4 mt-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection('examsEvaluation')}
            >
                <h3 className="text-xl font-semibold">What are the examination and evaluation methods?</h3>
                <span>{openSection === 'examsEvaluation' ? '-' : '+'}</span>
            </button>
            {openSection === 'examsEvaluation' && (
                <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                    <p className="text-gray-600">
                        Our institution has a precise and transparent examination system. Various assessment methods are adopted to evaluate students' skills.
                    </p>
                </div>
            )}

            {/* Transportation System */}
            <button
                className="w-full bg-white text-left px-6 py-4 mt-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection('transportation')}
            >
                <h3 className="text-xl font-semibold">What is the transportation system like?</h3>
                <span>{openSection === 'transportation' ? '-' : '+'}</span>
            </button>
            {openSection === 'transportation' && (
                <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                    <p className="text-gray-600">
                        Our institution has a well-organized transportation system. Special transportation facilities are available for students, and there are some additional costs for transport.
                    </p>
                </div>
            )}

            {/* Institution's Success and Results */}
            <button
                className="w-full bg-white text-left px-6 py-4 mt-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection('successResults')}
            >
                <h3 className="text-xl font-semibold">What are the institution's success and results like?</h3>
                <span>{openSection === 'successResults' ? '-' : '+'}</span>
            </button>
            {openSection === 'successResults' && (
                <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                    <p className="text-gray-600">
                        The previous results of our institution have been satisfactory. Our students regularly achieve success in various competitions or exams.
                    </p>
                </div>
            )}

            {/* Discipline and Code of Conduct */}
            <button
                className="w-full bg-white text-left px-6 py-4 mt-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection('discipline')}
            >
                <h3 className="text-xl font-semibold">What is the discipline and code of conduct like?</h3>
                <span>{openSection === 'discipline' ? '-' : '+'}</span>
            </button>
            {openSection === 'discipline' && (
                <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                    <p className="text-gray-600">
                        Maintaining discipline in our institution is of utmost importance. A code of conduct has been established for students, which must be adhered to by everyone.
                    </p>
                </div>
            )}

            {/* Parent-Teacher Meetings */}
            <button
                className="w-full bg-white text-left px-6 py-4 mt-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection('meetings')}
            >
                <h3 className="text-xl font-semibold">What are the parent-teacher meetings like?</h3>
                <span>{openSection === 'meetings' ? '-' : '+'}</span>
            </button>
            {openSection === 'meetings' && (
                <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                    <p className="text-gray-600">
                        Parent-teacher meetings are held regularly in our institution. These meetings provide a platform for parents to discuss their children's progress and any other relevant topics with teachers.
                    </p>
                </div>
            )}
        </div>
    );
};

export default AdmissionFaq; // Van.Com
