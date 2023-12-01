
const PopularClassList = ({ popular }) => {
    const { image, age, email, name, phone, price, class_name } = popular;
    return (
        <div className="flex items-center my-5 gap-4">
            <div>
                <img style={{ borderRadius: '0 200px 200px 200px' }}
                    className="w-[210px]" src={image} alt="" />
            </div>
            <div className="text-sm">
                <p className="font-semibold">Class name: {class_name}</p>
                <p className="font-semibold">Name: {name}</p>
                <p>Age: {age}</p>
                <p>Phone number: {phone}</p>
                <p>Email: {email}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default PopularClassList;