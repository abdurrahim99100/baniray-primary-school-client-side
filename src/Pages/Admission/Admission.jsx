import { Helmet } from "react-helmet-async";
import AdmissionRules from "./AdmissionRules/AdmissionRules";
import FeeStructure from "./FeeStructure/FeeStructure";
import AdmissionFaq from "./AdmissionFaq/AdmissionFaq";
import BannerCover from "../Shared/BannerCover/BannerCover";
import admissionBanner from "../../assets/banner/admissions-banner.jpeg"

const Admission = () => {
    return (
        <>
            <Helmet>
                <title>BPS | Admission</title>
            </Helmet>
            <section className="pt-[64px]">
                <BannerCover image={admissionBanner} title={'Join Our Learning Community'} subTitle={'Discover how to become a part of our vibrant student body—explore admissions requirements, application steps, and key dates to start your journey with us.'} />
                <AdmissionRules />
                <FeeStructure />
                <AdmissionFaq />
            </section>
        </>
    );
};

export default Admission;