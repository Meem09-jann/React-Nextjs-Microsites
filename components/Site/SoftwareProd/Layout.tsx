import Footer from "./Footer";
import Header from "./Header/Header";
import SectionFiveComp from "./Sections/SectionFive";
import SectionFourComp from "./Sections/SectionFour";
import SectionOneComp from "./Sections/SectionOne";
import SectionSevenComp from "./Sections/SectionSeven";
import SectionSixComp from "./Sections/SectionSix";
import SectionThreeComp from "./Sections/SectionThree";
import SectionTwoComp from './Sections/SectionTwo';

const Layout = () => {
    return (
        <div className="w-full h-scree font-sans flex flex-col">
            <Header />
            <SectionOneComp />
            <SectionTwoComp />
            <SectionThreeComp />
            <SectionFourComp />
            <SectionFiveComp />
            <SectionSixComp />
            <SectionSevenComp />
            <Footer />
        </div>
    );
}

export default Layout;