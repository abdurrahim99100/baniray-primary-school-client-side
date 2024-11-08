import { useContext } from "react";
import { authContext } from "../Providers/AuthContext";

const useAuth = () => {
    const auth = useContext(authContext);
    return auth;
};

export default useAuth;