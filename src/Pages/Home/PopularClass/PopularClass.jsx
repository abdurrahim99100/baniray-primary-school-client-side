import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularClassList from "../../Shared/PopularClassList/PopularClassList";

const PopularClass = () => {
    const [popularClass, setPopularClass] = useState([]);
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                const popularClass = data.filter(popularClass => popularClass.category === "popular");
                setPopularClass(popularClass);
            });
    }, []);

    return (
        <section className="container mx-auto">
            <SectionTitle subHeading={'Hot'} heading={'popular class'} />
            <div className="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-0">
                {
                    popularClass.map((popular, index) => <PopularClassList key={index} popular={popular} />)
                }
            </div>
        </section>
    );
};

export default PopularClass;