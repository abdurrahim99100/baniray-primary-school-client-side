import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="h-[100vh] w-full flex items-center justify-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate to={'/sign-in'} state={{ from: location }} replace />
};

export default PrivateRoute;