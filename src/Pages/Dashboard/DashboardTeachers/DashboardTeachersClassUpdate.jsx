import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

// react hot tost
import { Toaster } from 'react-hot-toast';
import { notify } from "../../../Components/Notify/Notify";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";



const DashboardTeachersClassUpdate = () => {
    const classData = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const { additionalResources, _id, class: className, details, learningObjectives, materialsNeeded, schedule, subject, teacher, whatLearned } = classData;

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        if (res.data.success) {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be Update revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, update it!",
            });
            // image url
            const imageUrl = res.data.data.display_url;

            // Function to convert comma-separated string into array
            const convertToArray = (string) => {
                return string.split(",").map(item => item.trim());
            }

            if (result.isConfirmed) {
                const classInfo = {
                    class: data?.class,
                    subject: data?.subject,
                    teacher: data?.teacher,
                    details: data?.details,
                    schedule: convertToArray(data?.schedule),
                    learningObjectives: convertToArray(data?.learningObjectives),
                    whatLearned: convertToArray(data?.whatLearned),
                    materialsNeeded: convertToArray(data?.materialsNeeded),
                    additionalResources: convertToArray(data?.additionalResources),
                    image: imageUrl
                }
                try {

                    const res = await axiosSecure.patch(`/classes/${_id}`, classInfo);
                    console.log("update response", res);

                    if (res.data.modifiedCount > 0) {
                        navigate('/dashboard/teachers-class-management');
                        notify('Class Update Successfully', user?.photoURL, user?.displayName);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your work has been Update",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };


    return (
        <div className="container mx-auto p-8">
            <div className="text-center py-16 mb-12">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">Update a Class</h2>
                <p className="text-lg text-gray-600 mx-auto max-w-2xl">
                    Design and organize the new class by entering all the relevant details. Specify learning objectives, class schedules, materials needed, and additional resources to enhance the teaching experience.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 shadow-lg rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mb-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="block text-sm font-semibold text-gray-700">Class Name</span>
                            </div>
                            <select className="select select-bordered"
                                defaultValue={className}
                                {...register("class", { required: "Class is required" })}
                            >
                                <option value='' disabled>Select Class Name</option>
                                <option value={'Class One'}>Class One</option>
                                <option value={'Class Two'}>Class Two</option>
                                <option value={'Class Three'}>Class Three</option>
                                <option value={'Class Four'}>Class Four</option>
                                <option value={"Class Five"}>Class Five</option>
                            </select>
                        </label>
                        {errors.class && <span className="text-red-600">{errors?.class.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="block text-sm font-semibold text-gray-700">Subject</span>
                            </div>
                            <select className="select select-bordered"
                                defaultValue={subject}
                                {...register("subject", { required: "Subject is required" })}
                            >
                                <option value="" disabled>Select Subject</option>
                                <option value={'Bangla'}>Bangla</option>
                                <option value={'English'}>English</option>
                                <option value={'Math'}>Math</option>
                                <option value={"Social Science"}>Social Science</option>
                                <option value={'General Science'}>General Science</option>
                                <option value={'Islamic Education'}>Islamic Education</option>
                                <option value={'Hindu Education'}>Hindu Education</option>
                            </select>
                        </label>
                        {errors.subject && <span className="text-red-600">{errors?.subject.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="teacher" className="block text-sm font-semibold text-gray-700">Teacher</label>
                        <input
                            defaultValue={teacher}
                            type="text"
                            id="teacher"
                            {...register("teacher", { required: { value: true, message: "Teacher is required" } })}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.teacher && <p className="text-red-500 text-sm mt-2">{errors.teacher.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="form-control">Schedule</label>
                        <select className="select select-bordered w-full"
                            defaultValue={schedule}
                            {...register("schedule", { required: "schedule is required" })}
                        >
                            <option value="" disabled>Select Schedule</option>
                            <option value={'Sunday, Monday'}>Sunday, Monday</option>
                            <option value={'Monday, Tuesday'}>Monday, Tuesday</option>
                            <option value={'Tuesday, Wednesday'}>Tuesday, Wednesday</option>
                            <option value={'Wednesday, Thursday'}>Wednesday, Thursday</option>
                            <option value={'MaThursday, Sunday'}>Thursday, Sunday</option>
                        </select>
                        {errors.schedule && <span className="text-red-600">{errors?.schedule.message}</span>}
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="details" className="block text-sm font-semibold text-gray-700">Details</label>
                    <textarea
                        defaultValue={details}
                        id="details"
                        {...register("details", { required: { value: true, message: 'Details is required' } })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    ></textarea>
                    {errors.details && <span className="text-red-600">{errors?.details.message}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mb-6">
                        <label htmlFor="learningObjectives" className="block text-sm font-semibold text-gray-700">Learning Objectives</label>
                        <textarea
                            defaultValue={learningObjectives}
                            id="learningObjectives"
                            {...register("learningObjectives", { required: { value: true, message: "Learning object is required" } })}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Separate by commas"
                        ></textarea>
                        {errors.learningObjectives && <span className="text-red-600">{errors?.learningObjectives.message}</span>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="whatLearned" className="block text-sm font-semibold text-gray-700">What Students Will Learn</label>
                        <textarea
                            defaultValue={whatLearned}
                            id="whatLearned"
                            {...register("whatLearned", { required: { value: true, message: 'What Learned is required' } })}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Separate by commas"
                        ></textarea>
                        {errors.whatLearned && <span className="text-red-600">{errors?.whatLearned.message}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mb-6">
                        <label htmlFor="materialsNeeded" className="block text-sm font-semibold text-gray-700">Materials Needed</label>
                        <textarea
                            defaultValue={materialsNeeded}
                            id="materialsNeeded"
                            {...register("materialsNeeded", { required: { value: true, message: "Materials is required" } })}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Separate by commas"
                        ></textarea>
                        {errors.materialsNeeded && <span className="text-red-600">{errors?.materialsNeeded.message}</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="additionalResources" className="block text-sm font-semibold text-gray-700">Additional Resources</label>
                        <textarea
                            defaultValue={additionalResources}
                            id="additionalResources"
                            {...register("additionalResources", { required: { value: true, message: 'Additional Resource is required' } })}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Separate by commas"
                        ></textarea>
                        {errors.additionalResources && <span className="text-red-600">{errors?.additionalResources.message}</span>}
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="image" className="block text-sm font-semibold text-gray-700">Class Image</label>
                    <input
                        type="file"
                        id="image"
                        {...register("image", { required: { value: true, message: 'Image is required' } })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.image && <span className="text-red-600">{errors?.image.message}</span>}
                </div>

                <div className="mb-6 flex justify-center">
                    <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Update Class
                    </button>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default DashboardTeachersClassUpdate;
