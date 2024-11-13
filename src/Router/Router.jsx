import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Academic from "../Pages/Academic/Academic";
import Contact from "../Pages/Contact/Contact";
import Parent from "../Pages/Parent/Parent";
import StudentResource from "../Pages/StudentResource/StudentResource";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/Admission/AdmissionForm/AdmissionForm";
import EventsAndNews from "../Pages/EventsAndNews/EventsAndNews";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import DashboardStudentHome from "../Pages/Dashboard/DashboardStudent/DashboardStudentHome";
import DashboardTeachersClassManagement from "../Pages/Dashboard/DashboardTeachers/DashboardTeachersClassManagement";
import DashboardTeachersHome from "../Pages/Dashboard/DashboardTeachers/DashboardTeachersHome";
import DashboardTeachersAllUsers from "../Pages/Dashboard/DashboardTeachers/DashboardTeachersAllUsers";
import DashboardTeachersClassUpdate from "../Pages/Dashboard/DashboardTeachers/DashboardTeachersClassUpdate";
import DashboardTeachersCreateClass from "../Pages/Dashboard/DashboardTeachers/DashboardTeachersCreateClass";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: "about-us",
                element: <AboutUs />
            },
            {
                path: 'academic',
                element: <Academic />
            },
            {
                path: 'admission',
                element: <Admission />,
            },
            // admission
            {
                path: 'admission-form',
                element: <AdmissionForm />
            },
            {
                path: 'events',
                element: <EventsAndNews />
            },
            {
                path: 'student-resource',
                element: <StudentResource />
            },
            {
                path: 'parent',
                element: <Parent />
            },
            {
                path: 'contact',
                element: <Contact />
            },

            // social login;
            {
                path: 'sign-in',
                element: <SignIn />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            }
        ],
    },
    // dashboard routes
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            // admin routs

            // teachers routs
            {
                path: 'teachers-home',
                element: <DashboardTeachersHome />
            },
            {
                path: 'teachers-class-management',
                element: <DashboardTeachersClassManagement />
            },
            {
                path: 'teachers-create-new-class',
                element: <DashboardTeachersCreateClass />
            },
            {
                path: 'teachers-class-update/:id',
                element: <DashboardTeachersClassUpdate />,
                loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)
            },
            {
                path: 'teachers-all-users',
                element: <DashboardTeachersAllUsers />
            },
            // student routs
            {
                path: 'student-home',
                element: <PrivateRoute><DashboardStudentHome /></PrivateRoute>
            },
        ]
    }
]);