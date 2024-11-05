import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const NavBar = () => {

    const { user, signOutUser } = useAuth();

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                console.log("User logged out successfully");
            })
            .catch(error => {
                console.log("Logout error:", error);
            });
    };


    const navOption = <>
        <li>
            <Link to="/">home</Link>
        </li>
        <li>
            <Link to="/blog">blog</Link>
        </li>
        <li>
            <Link to="/about-us">about Us</Link>
        </li>
        <li>
            <Link to="/academic">academic</Link>
        </li>
        <li>
            <Link to="/admission">admission</Link>
        </li>
        <li>
            <Link to="/events">events & news</Link>
        </li>
        <li>
            <Link to="/student-resource">student resource</Link>
        </li>
        <li>
            <Link to="/parent">parent section</Link>
        </li>
        <li>
            <Link to="/contact">contact</Link>
        </li>
        {/* conditional user */}
        {
            user ?
                <>
                    <li>
                        <Link onClick={handleLogOut}>logout</Link>
                    </li>
                </>
                :
                <>
                    <li>
                        <Link to="/sign-in">login</Link>
                    </li>
                </>
        }
    </>
    return (
        <div className="bg-black fixed z-10 bg-opacity-80 text-white w-full">
            <div className="navbar container justify-between mx-auto">
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content ml-[-8px] shadow bg-black z-10 w-[300px] uppercase mt-[8px]" style={{ borderRadius: '0 0 10px 0' }}>
                            {navOption}
                        </ul>
                    </div>
                    <Link to="/" className="flex gap-2 items-center text-xs lg:text-xl uppercase font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35">
                            <rect x="4" y="10" width="16" height="10" fill="#FFFF00" />
                            <polygon points="12,2 2,10 22,10" fill="#FFFF00" />
                            <rect x="6" y="12" width="3" height="4" fill="#FFFF00" />
                            <rect x="15" y="12" width="3" height="4" fill="#FFFF00" />
                            <rect x="11" y="14" width="2" height="2" fill="#FFFF00" />
                            <path fill="#FFFF00" d="M6 21h12v-1H6v1z" />
                        </svg>
                        <span className="text-yellow-600">B</span>
                        <span className="text-yellow-400">P</span>
                        <span className="text-yellow-200">S</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 uppercase font-semibold items-center">
                        {navOption}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;