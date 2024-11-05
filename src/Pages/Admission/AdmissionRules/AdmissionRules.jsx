import { Link } from "react-router-dom";

const AdmissionRules = () => {
  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Admissions</h2>
          {/* Admission Process */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Admission Process</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Visit the school website and navigate to the admissions page.</li>
                <li>Read the admission guidelines carefully.</li>
                <li>Download the admission form.</li>
                <li>Fill out the application form.</li>
                <li>Submit the form either online or in person at the school office. <Link to={'/admission-form'} className="text-blue-400 font-bold underline">Go to Form</Link></li>
                <li>Await confirmation and further instructions.</li>
              </ol>
            </div>
          </div>

          {/* Downloadable Form */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Download Admission Form</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                To download the admission application form, click the link below:
              </p>
              <a
                href="/path-to-form/admission-form.pdf"
                className="text-blue-600 underline hover:text-blue-800"
                download
              >
                Download Admission Application Form
              </a>
            </div>
          </div>
          {/* Submit Form */}
          <div className="mb-8">
            <Link to={'/admission-form'} className="text-2xl font-semibold mb-4">Submit Admission Form</Link>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                To submit the completed admission form, please upload it using the link below:
              </p>
              <Link to={'/admission-form'} className="text-blue-600 underline hover:text-blue-800">Go to Submit Admission Application Form</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionRules;