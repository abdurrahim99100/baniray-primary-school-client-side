import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTeachers = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: isTeachers = [], refetch } = useQuery({
        queryKey: [user?.email, 'isTeacher'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/teacher/${user.email}`);
            return res.data.teacher;
        }
    })
    return [isTeachers, refetch]
};

export default useTeachers;