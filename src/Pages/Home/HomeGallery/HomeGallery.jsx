import { useEffect, useState } from "react"

const HomeGallery = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('events.json')
      .then(res => res.json())
      .then(data => setEvents(data))
  }, []);

  // console.log(events);


  return (
    <>
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Gallery
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-700 text-center mb-8">
            Discover the vibrant life of our school through these memorable moments captured from various events, celebrations, and daily activities. Each picture tells a unique story of learning, joy, and growth.
          </p>

          {/* Gallery Slider */}
          <div className="flex overflow-x-auto space-x-4">
            {
              events.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-60 bg-white shadow-lg rounded-lg overflow-hidden">
                  <img className="w-full h-40 object-cover" src={item.image} alt={item.alt} />
                  <p className="relative">{item.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

    </>
  );
}

export default HomeGallery;
