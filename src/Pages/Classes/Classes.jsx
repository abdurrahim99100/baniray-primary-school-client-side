import { Helmet } from "react-helmet-async";
import ClassBanner from "./ClassBanner/ClassBanner";

const Classes = () => {
    return (
        <>
            <Helmet >
                <title>BPS | Classes</title>
            </Helmet>
            <ClassBanner />
        </>
    );
};

export default Classes;