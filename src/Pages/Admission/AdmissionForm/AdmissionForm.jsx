/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const AdmissionForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form all data', data);

    };

    return (
        <>
            <Helmet>
                <title>BPS | Admission Form</title>
            </Helmet>
            <section className="pt-[64px]">
                <div className="text-black mb-8 text-center bg-gray-100 py-[100px] leading-8">
                    <h2 className="text-[35px] font-bold">Admission Form</h2>
                    <p className="font-light">Enroll Your Child for a Bright Future, Admission Application</p>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg mx-auto space-y-10">

                        {/* Section 1: Personal Information */}
                        <fieldset className="border border-gray-300 p-6 rounded-lg">
                            <legend className="text-xl font-semibold mb-4">Personal Information</legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="studentName">
                                        Student's Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="studentName"
                                        {...register("studentName", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.studentName && <p className="text-red-600">Student's full name is required.</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
                                        Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        id="dob"
                                        {...register("dob", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.dob && <p className="text-red-600">Date of birth is required.</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
                                        Gender
                                    </label>
                                    <select
                                        id="gender"
                                        {...register("gender", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.gender && <p className="text-red-600">Gender is required.</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="nationality">
                                        Nationality
                                    </label>
                                    <input
                                        type="text"
                                        id="nationality"
                                        {...register("nationality", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.nationality && <p className="text-red-600">Nationality is required.</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="religion">
                                        Religion
                                    </label>
                                    <input
                                        type="text"
                                        id="religion"
                                        {...register("religion", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.religion && <p className="text-red-600">Religion is required.</p>}
                                </div>
                            </div>
                        </fieldset>

                        {/* Section 2: Parent/Guardian Information */}
                        <fieldset className="border border-gray-300 p-6 rounded-lg">
                            <legend className="text-xl font-semibold mb-4">Parent/Guardian Information</legend>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="fatherName">
                                        Father's Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fatherName"
                                        {...register("fatherName", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.fatherName && <p className="text-red-600">Father's name is required.</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="motherName">
                                        Mother's Name
                                    </label>
                                    <input
                                        type="text"
                                        id="motherName"
                                        {...register("motherName", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.motherName && <p className="text-red-600">Mother's name is required.</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="parentPhone">
                                        Parent's Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="parentPhone"
                                        {...register("parentPhone", { required: true, pattern: /^[0-9]{11}$/ })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.parentPhone && <p className="text-red-600">Phone number is required.</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="parentEmail">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="parentEmail"
                                        {...register("parentEmail", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.parentEmail && <p className="text-red-600">Email address is required.</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="currentAddress">
                                        Current Address
                                    </label>
                                    <input
                                        type="text"
                                        id="currentAddress"
                                        {...register("currentAddress", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.currentAddress && <p className="text-red-600">Current address is required.</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="permanentAddress">
                                        Permanent Address
                                    </label>
                                    <input
                                        type="text"
                                        id="permanentAddress"
                                        {...register("permanentAddress", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.permanentAddress && <p className="text-red-600">Permanent address is required.</p>}
                                </div>
                            </div>
                        </fieldset>

                        {/* Section 3: Educational Information */}
                        <fieldset className="border border-gray-300 p-6 rounded-lg">
                            <legend className="text-xl font-semibold mb-4">Educational Information</legend>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="previousSchool">
                                        Previous School Name
                                    </label>
                                    <input
                                        type="text"
                                        id="previousSchool"
                                        {...register("previousSchool", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.previousSchool && <p className="text-red-600">Previous school name is required.</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="previousResult">
                                        Previous Class Result
                                    </label>
                                    <input
                                        type="text"
                                        id="previousResult"
                                        {...register("previousResult", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.previousResult && <p className="text-red-600">Previous result is required.</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="admissionClassName">
                                        Admission Class Name
                                    </label>
                                    <input
                                        type="text"
                                        id="admissionClassName"
                                        {...register("admissionClassName", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.admissionClassName && <p className="text-red-600">Previous result is required.</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="educationalCertificate">
                                        Educational Certificate (If Needed)
                                    </label>
                                    <input
                                        type="file"
                                        id="educationalCertificate"
                                        {...register("educationalCertificate")}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>
                        </fieldset>

                        {/* Section 4: Health Information */}
                        <fieldset className="border border-gray-300 p-6 rounded-lg">
                            <legend className="text-xl font-semibold mb-4">Health Information</legend>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="healthCondition">
                                        Health Condition (e.g., any long-term illness, allergy)
                                    </label>
                                    <input
                                        type="text"
                                        id="healthCondition"
                                        {...register("healthCondition")}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="bloodGroup">
                                        Blood Group
                                    </label>
                                    <input
                                        type="text"
                                        id="bloodGroup"
                                        {...register("bloodGroup", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.bloodGroup && <p className="text-red-600">Blood group is required.</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="medicalInstruction">
                                        Any Special Medical Instructions (If Needed)
                                    </label>
                                    <input
                                        type="text"
                                        id="medicalInstruction"
                                        {...register("medicalInstruction")}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>
                        </fieldset>

                        {/* Section 5: Identity Documents */}
                        <fieldset className="border border-gray-300 p-6 rounded-lg">
                            <legend className="text-xl font-semibold mb-4">Identity Documents</legend>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="birthCertificate">
                                        Birth Certificate
                                    </label>
                                    <input
                                        type="file"
                                        id="birthCertificate"
                                        {...register("birthCertificate", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.birthCertificate && <p className="text-red-600">Birth certificate is required.</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="nid">
                                        National ID (If Applicable)
                                    </label>
                                    <input
                                        type="file"
                                        id="nid"
                                        {...register("nid")}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="passportPhoto">
                                        Passport Size Photo
                                    </label>
                                    <input
                                        type="file"
                                        id="passportPhoto"
                                        {...register("passportPhoto", { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.passportPhoto && <p className="text-red-600">Passport size photo is required.</p>}
                                </div>
                            </div>
                        </fieldset>

                        {/* Section 6: Special Needs */}
                        <fieldset className="border border-gray-300 p-6 rounded-lg">
                            <legend className="text-xl font-semibold mb-4">Special Needs</legend>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="specialNeeds">
                                        Special Needs (If Any)
                                    </label>
                                    <input
                                        type="text"
                                        id="specialNeeds"
                                        {...register("specialNeeds")}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="additionalInfo">
                                        Additional Information
                                    </label>
                                    <textarea
                                        id="additionalInfo"
                                        {...register("additionalInfo")}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        rows="4"
                                    />
                                </div>
                            </div>
                        </fieldset>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default AdmissionForm;
