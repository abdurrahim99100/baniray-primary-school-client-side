import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useClasses = () => {
    const axiosPublic = useAxiosPublic();
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            try {
                const response = await axiosPublic.get('classes');
                return response.data;
            } catch (error) {
                console.log(error)
            }
        },
    })
    return [classes, refetch];
};
export default useClasses;
