import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import { authContext } from './AuthContext';
import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign in user with Google
    const googleProvider = new GoogleAuthProvider();
    const signInUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Sign out user
    const signOutUser = async () => {
        setLoading(true);
        return signOut(auth)
    };


    const axiosPublic = useAxiosPublic();
    // Manage users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data) {
                            localStorage.setItem('access-token', res.data);
                            setLoading(false);
                        }
                    })
            } else {
                // TODO: remove token, if token store in the client side local store caching in memory
                localStorage.removeItem('access-token');
            }
            console.log(currentUser)
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic]);


    // Prepare auth info for context
    const authInfo = {
        user,
        createUser,
        signInUser,
        signInUserWithGoogle,
        signOutUser,
        loading,
    };

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProviders;
