import { Helmet } from "react-helmet-async";
import { useState } from 'react';
import BannerCover from "../Shared/BannerCover/BannerCover";
import resourcesBanner from "../../assets/banner/resources-banner.jpeg"

const StudentResource = () => {

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <>
            <Helmet>
                <title>BPS | Student Resources</title>
            </Helmet>
            <section className="pt-[64px]">
                <BannerCover image={resourcesBanner} title={'Student Resources Hub'} subTitle={'Your go-to place for essential tools, tips, and support to help you succeed academically and beyond'} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-black mb-8 text-center">Student Resources</h2>

                    {/* Homework and Assignments */}
                    <div className="mb-8">
                        <button
                            className="w-full bg-white text-left px-6 py-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                            onClick={() => toggleSection('homework')}
                        >
                            <h3 className="text-xl font-semibold">Homework & Assignments</h3>
                            <span>{openSection === 'homework' ? '-' : '+'}</span>
                        </button>
                        {openSection === 'homework' && (
                            <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Class 1 - Homework List (Download)</li>
                                    <li>Class 2 - Homework List (Download)</li>
                                    <li>Class 3 - Homework List (Download)</li>
                                    <li>Class 4 - Homework List (Download)</li>
                                    <li>Class 5 - Homework List (Download)</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Library Resources */}
                    <div className="mb-8">
                        <button
                            className="w-full bg-white text-left px-6 py-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                            onClick={() => toggleSection('library')}
                        >
                            <h3 className="text-xl font-semibold">Library Resources</h3>
                            <span>{openSection === 'library' ? '-' : '+'}</span>
                        </button>
                        {openSection === 'library' && (
                            <div className="bg-white mt-4 p-6 rounded-lg shadow-inner">
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Available Books List (Download)</li>
                                    <li>E-books & Articles (Download)</li>
                                    <li>Online Journals</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Clubs & Extra-Curricular Activities */}
                    <div>
                        <button
                            className="w-full bg-white text-left px-6 py-4 rounded-lg shadow-lg flex justify-between items-center focus:outline-none"
                            onClick={() => toggleSection('clubs')}
                        >
                            <h3 className="text-xl font-semibold">Clubs & Extra-Curricular Activities</h3>
                            <span>{openSection === 'clubs' ? '-' : '+'}</span>
                        </button>
                        {openSection === 'clubs' && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                                {/* Card for each club */}
                                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                    <h4 className="text-lg font-semibold mb-2">Science Club</h4>
                                    <p className="text-gray-600">Activities: Science Projects, Experiments</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                    <h4 className="text-lg font-semibold mb-2">Sports Club</h4>
                                    <p className="text-gray-600">Activities: Football, Cricket, Badminton</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                    <h4 className="text-lg font-semibold mb-2">Art & Culture Club</h4>
                                    <p className="text-gray-600">Activities: Painting, Cultural Events</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default StudentResource;
