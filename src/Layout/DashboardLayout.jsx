import { Link, Outlet } from "react-router-dom";
import { FaAlipay, FaCog, FaHome, FaIndent, FaPersonBooth, FaRulerHorizontal, FaUserFriends } from "react-icons/fa";
import useTeachers from "../Hooks/useTeacher";

const DashboardLayout = () => {

    const [isTeachers] = useTeachers();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <div className="w-full flex items-center justify-between px-5 lg:hidden">
                    <Link to={'/'}>BPS</Link>
                    <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-6 w-6 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu min-h-full w-80 p-4 uppercase bg-[#ece9e986] text-black">
                    {/* Sidebar content here */}
                    {
                        isTeachers ? (<>
                            <li>
                                <Link to={'teachers-home'} style={{ borderBottom: 'gray solid 1px' }} className="rounded-md mb-4"><FaHome className="text-xl" /> teacher home</Link>
                            </li>
                            <li>
                                <Link to={'teachers-class-management'} style={{ borderBottom: 'gray solid 1px' }} className="rounded-md mb-4"><FaCog className="text-xl" />class management</Link>
                            </li>
                            <li>
                                <Link style={{ borderBottom: 'gray solid 1px' }} className="rounded-md mb-4"><FaIndent className="text-xl" />assignment management</Link>
                            </li>
                            <li>
                                <Link style={{ borderBottom: 'gray solid 1px' }} className="rounded-md mb-4"> <FaAlipay className="text-xl" /> result management</Link>
                            </li>
                            <li>
                                <Link style={{ borderBottom: 'gray solid 1px' }} className="rounded-md mb-4"><FaPersonBooth className="text-xl" /> parent management</Link>
                            </li>
                            <li>
                                <Link style={{ borderBottom: 'gray solid 1px' }} className="rounded-md mb-4"> <FaRulerHorizontal className="text-xl" /> event & notice management</Link>
                            </li>
                            <li>
                                <Link to={'teachers-all-users'} style={{ borderBottom: 'gray solid 1px' }} className="rounded-md mb-4"><FaUserFriends className="text-xl" />all users</Link>
                            </li>
                        </>) : (<>
                            <li>
                                <Link
                                    to={'student-home'}
                                    style={{ borderBottom: 'gray solid 1px' }} className="rounded-md mb-4">student home</Link>
                            </li>
                            <li>
                                <Link
                                    style={{ borderBottom: 'gray solid 1px' }} className="rounded-md mb-4">class routines</Link></li>
                            <li>
                                <Link
                                    style={{ borderBottom: 'gray solid 1px' }} className="rounded-md mb-4">home work & assignment</Link></li>
                            <li>
                                <Link
                                    style={{ borderBottom: 'gray solid 1px' }} className="rounded-md mb-4">result</Link>
                            </li>
                        </>)
                    }
                    <div className="divider">OR</div>
                    <li><Link
                        to={'/'} style={{ borderBottom: 'gray solid 1px' }} className="rounded-md"><FaHome className="text-xl" /> home</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;