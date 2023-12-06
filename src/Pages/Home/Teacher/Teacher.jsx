import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import './styles.css';

const Teacher = () => {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('teacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, []);

    return (
        <section className="lg:my-28 container mx-auto">
            <SectionTitle subHeading={"Teachers List"} heading={'We are teachers'} />
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 lg:mx-0">
                {
                    teachers?.map((teacher, index) =>
                        <div key={index} className="teacherBox">
                            <img src={teacher.image} alt="" className="teacherImg rounded-full mb-12" />
                            <div className="text-left">
                                <h3>Name: {teacher.name}</h3>
                                <p>Subject: <span className="text-xs">
                                    {teacher.subject[0].bangla},
                                    {teacher.subject[0].english},
                                    {teacher.subject[0].math},
                                    {teacher.subject[0].science}
                                </span></p>
                                <p>Age: {teacher.age}</p>
                                <p>Phone number: {teacher.phone}</p>
                                <p>Email: {teacher.email}</p>
                                <p className="">Address: <span className="text-xs">{teacher.address}</span></p>
                                <p>About: <span className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, incidunt.</span></p>
                            </div>
                        </div>)
                }
            </section>
        </section>
    );
};

export default Teacher;