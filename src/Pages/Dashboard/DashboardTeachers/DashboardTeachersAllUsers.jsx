import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa6";

const DashboardTeachersAllUsers = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user');
            return res.data;
        }
    })
    console.log("user is comming", users)

    return (
        <>
            <Helmet>
                <title>BPS | All users</title>
            </Helmet>
            <div>
                <h3 className="text-3xl font-bold uppercase">__All Users</h3>
            </div>
            <div className="w-full overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            users.map(user => <tr key={user._id} >
                                <th>1</th>
                                <td className="flex items-center gap-1">
                                    <img className="w-[32px] bg-gray-500 h-[32px] rounded"
                                        src={user.photoURL} alt="" />
                                    <p>{user.name}</p>
                                </td>
                                <td>{user.email}</td>
                                {user.role === 'teacher' && <td><span className="text-white bg-green-700 p-1 rounded capitalize">{user.role}</span></td>}
                                {user.role === 'user' && <td>{user.role}</td>}
                                <td>
                                    <button><span className="text-black text-[22px]"><FaTrash /></span></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default DashboardTeachersAllUsers;