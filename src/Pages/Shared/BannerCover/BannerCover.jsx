const BannerCover = ({ image, title, subTitle }) => {
    return (
        <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
            <img src={image} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

            <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white">
                <h2 className="uppercase sm:text-4xl text-2xl font-bold mb-4">{title}</h2>
                <p className="sm:text-lg text-base text-center text-gray-200 max-w-2xl">{subTitle}!</p>

                <button
                    type="button"
                    className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default BannerCover;