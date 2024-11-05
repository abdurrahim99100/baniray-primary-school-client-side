import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {

    const location = useLocation()
    const noHeader = location.pathname.includes('sign-in') || location.pathname.includes('sign-up');
    return (
        <div>
            {noHeader || <NavBar />}
            <Outlet />
            {noHeader || <Footer />}
        </div>
    );
};

export default Main;