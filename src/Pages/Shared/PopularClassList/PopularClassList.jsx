
const PopularClassList = ({ popular }) => {
    // console.log(popular);
    const { image, age, email, name, phone, class_name, subject } = popular;
    return (
        <div className="flex items-center my-5 gap-4">
            <div>
                <img style={{ borderRadius: '0 200px 200px 200px' }}
                    className="w-[210px]" src={image} alt="" />
            </div>
            <div className="text-sm">
                <p className="font-semibold">Subject: {subject}</p>
                <p className="font-semibold">Class: {class_name}</p>
                <p className="font-semibold">Teacher name: {name}</p>
                <div className="text-xs my-2">
                    <p>Email: {email}</p>
                    <p>Phone number: {phone}</p>
                    <p>Age: {age}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularClassList;