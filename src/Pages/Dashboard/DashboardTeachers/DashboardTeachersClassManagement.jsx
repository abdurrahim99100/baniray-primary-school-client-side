// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useClasses from "../../../Hooks/useClasses";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

// react tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { notify } from "../../../Components/Notify/Notify";
import useAuth from "../../../Hooks/useAuth";

const DashboardTeachersClassManagement = () => {
    const [classes, refetch] = useClasses();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    // Class list
    const classOne = classes.filter(item => item.class === 'Class One');
    const classTwo = classes.filter(item => item.class === 'Class Two');
    const classThree = classes.filter(item => item.class === 'Class Three');
    const classFour = classes.filter(item => item.class === 'Class Four');
    const classFive = classes.filter(item => item.class === 'Class Five');

    const handleDeleteItem = async (item) => {
        const res = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be Delete revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!",
        });
        if (res.isConfirmed) {
            const result = await axiosSecure.delete(`/classes/${item._id}`);
            console.log(result);
            if (result.data.deletedCount > 0) {
                notify('Class Deleted Successfully', user?.photoURL, user?.displayName)
                refetch()
            }

        }
    }

    return (
        <>
            <div className="w-full overflow-x-auto px-10">
                <Tabs>
                    <div>
                        <div className="h-[15vh] flex justify-center items-center text-4xl">
                            <h3>__Our All Class</h3>
                        </div>
                        <div className="flex justify-between">
                            <TabList>
                                <Tab>ONE</Tab>
                                <Tab>TWO</Tab>
                                <Tab>THREE</Tab>
                                <Tab>FOUR</Tab>
                                <Tab>FIVE</Tab>
                            </TabList>
                            <Link to={'/dashboard/teachers-create-new-class'} className="flex items-center gap-3 p-3 bg-gray-200 mb-2 rounded">
                                <button className="font-semibold text-xl text-black">Create New Class </button>
                                <FaPlus />
                            </Link>
                        </div>
                    </div>

                    {/* Tab one */}
                    <TabPanel>
                        <table className="table px-11 w-full">
                            <thead className="font-bold text-[16px] bg-slate-100">
                                <tr>
                                    <th>NAME</th>
                                    <th>CLASS</th>
                                    <th>SCHEDULE</th>
                                    <th>UPDATE</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classOne.map(item => (
                                    <tr key={item._id} className="border-b border-dashed last:border-b-0">
                                        <td className="max-w-[220px]">
                                            <div className="flex items-center ">
                                                <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" className="w-[50px] h-[50px] rounded-2xl" alt="" />
                                                <div className="ml-3">
                                                    <span className="font-semibold text-lg text-secondary-inverse hover:text-primary">{item.subject} <span className="text-gray-400 px-5">|</span> <span>{item.teacher}</span></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.class}</td>
                                        <td>{item.schedule}</td>
                                        <td className="px-8">
                                            <Link to={`/dashboard/teachers-class-update/${item._id}`}>
                                                <button><FaEdit className="text-2xl " /></button>
                                            </Link>
                                        </td>
                                        <td className="px-8">
                                            <button onClick={() => handleDeleteItem(item)}><FaTrash className="text-xl" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPanel>
                    <TabPanel>
                        <table className="table px-11 w-full">
                            <thead className="font-bold text-[16px] bg-slate-100">
                                <tr>
                                    <th>NAME</th>
                                    <th>CLASS</th>
                                    <th>SCHEDULE</th>
                                    <th>UPDATE</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classTwo.map(item => (
                                    <tr key={item._id} className="border-b border-dashed last:border-b-0">
                                        <td className="max-w-[220px]">
                                            <div className="flex items-center ">
                                                <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" className="w-[50px] h-[50px] rounded-2xl" alt="" />
                                                <div className="ml-3">
                                                    <span className="font-semibold text-lg text-secondary-inverse hover:text-primary">{item.subject} <span className="text-gray-400 px-5">|</span> <span>{item.teacher}</span></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.class}</td>
                                        <td>{item.schedule}</td>
                                        <td className="px-8">
                                            <Link to={`/dashboard/teachers-class-update/${item._id}`}>
                                                <button><FaEdit className="text-2xl " /></button>
                                            </Link>
                                        </td>
                                        <td className="px-8">
                                            <button onClick={() => handleDeleteItem(item)}><FaTrash className="text-xl" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPanel>
                    <TabPanel>
                        <table className="table px-11 w-full">
                            <thead className="font-bold text-[16px] bg-slate-100">
                                <tr>
                                    <th>NAME</th>
                                    <th>CLASS</th>
                                    <th>SCHEDULE</th>
                                    <th>UPDATE</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classThree.map(item => (
                                    <tr key={item._id} className="border-b border-dashed last:border-b-0">
                                        <td className="max-w-[220px]">
                                            <div className="flex items-center ">
                                                <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" className="w-[50px] h-[50px] rounded-2xl" alt="" />
                                                <div className="ml-3">
                                                    <span className="font-semibold text-lg text-secondary-inverse hover:text-primary">{item.subject} <span className="text-gray-400 px-5">|</span> <span>{item.teacher}</span></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.class}</td>
                                        <td>{item.schedule}</td>
                                        <td className="px-8">
                                            <Link to={`/dashboard/teachers-class-update/${item._id}`}>
                                                <button><FaEdit className="text-2xl " /></button>
                                            </Link>
                                        </td>
                                        <td className="px-8">
                                            <button onClick={() => handleDeleteItem(item)}><FaTrash className="text-xl" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPanel>
                    <TabPanel>
                        <table className="table px-11 w-full">
                            <thead className="font-bold text-[16px] bg-slate-100">
                                <tr>
                                    <th>NAME</th>
                                    <th>CLASS</th>
                                    <th>SCHEDULE</th>
                                    <th>UPDATE</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classFour.map(item => (
                                    <tr key={item._id} className="border-b border-dashed last:border-b-0">
                                        <td className="max-w-[220px]">
                                            <div className="flex items-center ">
                                                <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" className="w-[50px] h-[50px] rounded-2xl" alt="" />
                                                <div className="ml-3">
                                                    <span className="font-semibold text-lg text-secondary-inverse hover:text-primary">{item.subject} <span className="text-gray-400 px-5">|</span> <span>{item.teacher}</span></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.class}</td>
                                        <td>{item.schedule}</td>
                                        <td className="px-8">
                                            <Link to={`/dashboard/teachers-class-update/${item._id}`}>
                                                <button><FaEdit className="text-2xl " /></button>
                                            </Link>
                                        </td>
                                        <td className="px-8">
                                            <button onClick={() => handleDeleteItem(item)}><FaTrash className="text-xl" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPanel>
                    <TabPanel>
                        <table className="table px-11 w-full">
                            <thead className="font-bold text-[16px] bg-slate-100">
                                <tr>
                                    <th>NAME</th>
                                    <th>CLASS</th>
                                    <th>SCHEDULE</th>
                                    <th>UPDATE</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classFive.map(item => (
                                    <tr key={item._id} className="border-b border-dashed last:border-b-0">
                                        <td className="max-w-[220px]">
                                            <div className="flex items-center ">
                                                <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" className="w-[50px] h-[50px] rounded-2xl" alt="" />
                                                <div className="ml-3">
                                                    <span className="font-semibold text-lg text-secondary-inverse hover:text-primary">{item.subject} <span className="text-gray-400 px-5">|</span> <span>{item.teacher}</span></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.class}</td>
                                        <td>{item.schedule}</td>
                                        <td className="px-8">
                                            <Link to={`/dashboard/teachers-class-update/${item._id}`}>
                                                <button><FaEdit className="text-2xl " /></button>
                                            </Link>
                                        </td>
                                        <td className="px-8">
                                            <button onClick={() => handleDeleteItem(item)}><FaTrash className="text-xl" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default DashboardTeachersClassManagement;
