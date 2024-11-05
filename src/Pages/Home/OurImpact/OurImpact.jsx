import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const OurImpact = () => {
    return (
        <>
            <SectionTitle subHeading={'Hot'} heading={'our impact'} />
            <div className="max-w-[920px] mx-auto bg-[#E7D384] flex justify-around rounded py-10 text-3xl font-mono mt-[100px] mb-[280px]">
                <div className="">
                    <span>4000+</span>
                    <p>job placement <br /> worldwide</p>
                </div>
                <hr className="bg-[#B6BBCE]" />
                <div>
                    <span>12Hr+</span>
                    <p>live support <br /> 10+ instructor</p>
                </div>
                <div>
                    <span>720+</span>
                    <p>Videos lecture <br /> 24 hour</p>
                </div>
            </div>
        </>
    );
};

export default OurImpact;