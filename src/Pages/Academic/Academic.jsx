import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useClasses from "../../Hooks/useClasses";
import StudentClass from "./StudentClass/StudentClass";
import BannerCover from "../Shared/BannerCover/BannerCover";

import classBannerImage from "../../assets/banner/class-banner.png"

const Academic = () => {

    const [classes] = useClasses();
    console.log(classes)

    const classOne = classes.filter(items => items.class === 'Class One');
    const classTwo = classes.filter(items => items.class === 'Class Two');
    const classThree = classes.filter(items => items.class === 'Class Three');
    const classFour = classes.filter(items => items.class === 'Class Four');
    const classFive = classes.filter(items => items.class === 'Class Five');

    return (
        <>
            <Helmet>
                <title>BPS | Academic</title>
            </Helmet>
            <section className="md:pt-[64px]">
                <BannerCover image={classBannerImage} title={'explore our all class'} subTitle={'Dive into a Journey of Learning: Explore Each Class, Unlock New Skills, and Fuel Curiosity at Every Step'} />
                <div>
                    <Tabs>
                        <TabList className="uppercase font-semibold flex justify-center">
                            <Tab>class one</Tab>
                            <Tab>class two</Tab>
                            <Tab>class three</Tab>
                            <Tab>class four</Tab>
                            <Tab>class five</Tab>
                        </TabList>
                        {/* items */}
                        <div className="container mx-auto mt-10">
                            <TabPanel>
                                <div className="grid lg:grid-cols-2 gap-10 px-5 md:px-0">
                                    {
                                        classOne.map(item => <StudentClass key={item._id} item={item} />)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="grid lg:grid-cols-2 gap-10 px-5 md:px-0">
                                    {
                                        classTwo.map(item => <StudentClass key={item._id} item={item} />)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="grid lg:grid-cols-2 gap-10 px-5 md:px-0">
                                    {
                                        classThree.map(item => <StudentClass key={item._id} item={item} />)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="grid lg:grid-cols-2 gap-10 px-5 md:px-0">
                                    {
                                        classFour.map(item => <StudentClass key={item._id} item={item} />)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="grid lg:grid-cols-2 gap-10 px-5 md:px-0">
                                    {
                                        classFive.map(item => <StudentClass key={item._id} item={item} />)
                                    }
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </section>
        </>
    );
};

export default Academic;