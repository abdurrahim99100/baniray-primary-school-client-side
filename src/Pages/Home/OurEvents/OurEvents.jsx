/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const OurEvents = () => {
    const [events, setEvents] = useState()

    useEffect(() => {
        fetch('events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);

    // console.log(events);

    return (
        <>
            <SectionTitle subHeading={"Exciting Activities and Opportunities Await!"} heading={"events"} />
            <section>
                <div className="max-w-6xl mx-auto px-6">
                    {/* Title */}
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
                        Upcoming Events
                    </h2>

                    {/* Events List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Event 1 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Annual Sports Day</h3>
                            <p className="text-gray-600">Join us on December 5, 2024, for an exciting day of sports and games!</p>
                            <div className="mt-4">
                                <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full">December 5, 2024</span>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cultural Festival</h3>
                            <p className="text-gray-600">Celebrate with music, dance, and drama on January 10, 2025!</p>
                            <div className="mt-4">
                                <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full">January 10, 2025</span>
                            </div>
                        </div>

                        {/* Event 3 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Science Fair</h3>
                            <p className="text-gray-600">Explore creative student projects on February 15, 2025.</p>
                            <div className="mt-4">
                                <span className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-full">February 15, 2025</span>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Books Fair</h3>
                            <p className="text-gray-600">Explore creative student projects on February 18, 2025.</p>
                            <div className="mt-4">
                                <span className="inline-block bg-purple-400 text-white px-4 py-2 rounded-full">February 18, 2025</span>
                            </div>
                        </div>

                        {/* Add more events as needed */}

                    </div>
                </div>
                <div className="text-center mt-12">
                    <button className="bg-yellow-400 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full">
                        View All Events
                    </button>
                    <p className="text-lg text-gray-700 mb-6">
                        Don't miss out on any upcoming events! Stay updated and join us in celebrating these exciting activities.
                    </p>
                </div>
            </section>
            {/* react marquee */}
            <section>
                <Marquee className="my-20">
                    {
                        events?.map(event =>
                            <div key={event.id}
                                className="">
                                {/* <img src={event.image} alt="" />
                                <p>{event.event}</p> */}
                                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden ml-20">
                                    {/* Winner Image */}
                                    <img className="w-full h-[220px] object-cover" src={event.image} alt="Winner" />

                                    <div className="p-1 bg-[#f6f9fa]">
                                        {/* Winner Name */}
                                        <h2 className="text-2xl font-bold text-gray-900 mb-1">{event.award}</h2>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-green-600">{event.name}</p>
                                                <p className="">{event.date}</p>
                                            </div>
                                            {/* Winner Sticker */}
                                            <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-blue-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l7 7-7 7-7-7 7-7zm0 6v12m0 0H8m4 0h4" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Event Details */}
                                        <p className="text-gray-600 mb-4">বার্ষিক ক্রীড়া দিবসে প্রথম স্থান অধিকারী।</p>

                                        {/* Event Date */}
                                        <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full">
                                            {event.event}
                                        </span>
                                    </div>
                                </div>

                            </div>)
                    }
                </Marquee>

            </section>
        </>
    );
};

export default OurEvents;