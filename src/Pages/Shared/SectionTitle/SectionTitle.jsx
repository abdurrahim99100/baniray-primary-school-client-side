
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="text-yellow-500 lg:w-3/12 mx-auto my-10 text-center">
            <p className="text-xl">----{subHeading}----</p>
            <h1 className="text-4xl font-semibold uppercase border-y-4 my-3 py-1">{heading}</h1>
        </div>
    );
};

export default SectionTitle;