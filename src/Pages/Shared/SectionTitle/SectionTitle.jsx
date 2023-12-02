
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="text-yellow-500 mx-auto my-10 text-center">
            <p className="text-xs lg:text-xl">----{subHeading}----</p>
            <h1 className="text-xl lg:text-4xl font-semibold w-4/6 lg:w-2/6 mx-auto uppercase border-y-4 my-1 lg:my-3 py-1">{heading}</h1>
        </div>
    );
};

export default SectionTitle;