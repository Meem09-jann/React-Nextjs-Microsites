import SliderComp from "./SectionOne/Slider";
import BottomMenuComp from "./SectionOne/BottomMenu";
import TopSliderComp from "./SectionOne/TopSlider";
import ImageList from './../../../common/List/ImageList';
import { ButtonProps } from "../../../../types/softwareproddev";
import ButtonComp from "../../../common/Button/Button";
import VideoComp from "./SectionTwo/Video";
const SectionTwoComp = () => {
    const propsForButton: ButtonProps = {
        text: "Contact Us",
        type: "button",
        link: "#",
        classes: "bg-sky-500 text-white h-[57px] w-[221px] text-lg font-bold",
    };
    return (
        <section className="m-auto w-auto mx-2 md:mx-28 lg:mx-40 2xl:mx-80 mb-[105px] ">
            <div className="w-auto flex flex-col text-center 2xl:h-[626px] 2xl:flex-row 2xl:text-left">
                <div className="w-full flex flex-col lg:h-auto 2xl:h-[626px] 2xl:w-4/6">
                    <p className="mb-3 text-xl font-normal text-[#828282]">Bangladesh’s Top Custom</p>
                    <h1 className="text-[#19224A] font-bold text-[42px] mb-6">Software Product Development Company</h1>
                    <p className="text-[#18A6E1] text-xl font-normal mb-[22px]">On-Demand Teams, Secure & Risk Free Software Development</p>
                    <p className="text-[#828282] text-[16px] font-light ">
                        We transform your ideas into market-ready software products from the ground up, taking scalability, robustness,
                        and customizability into account.
                        <br></br>
                        <br></br>
                        Our software product development teams have 17+ years of experience in delivering challenging solutions.
                        Additionally, we have delivered over 4200 software to global businesses, including startups, agencies, and
                        enterprises.
                        <br></br>
                        <br></br>
                        Planning to outsource software product development services? Or would you like to hire an offshore software
                        product development team? Get in touch for a free quote.
                        <br></br>
                        <br></br>So what are you waiting for?
                    </p>
                    <br /><br />
                    <div>
                        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <ImageList img="/img/tic_blue.svg" text="Top 1% Software Experts"></ImageList>
                            <ImageList img="/img/tic_blue.svg" text="Strict Non-Disclosure Agreement"></ImageList>
                            <ImageList img="/img/tic_blue.svg" text="Flexible Engagement Models"></ImageList>
                            <ImageList img="/img/tic_blue.svg" text="Zero Billing Guarantee"></ImageList>
                            <ImageList img="/img/tic_blue.svg" text="Agile & Adaptive Development"></ImageList>
                            <ImageList img="/img/tic_blue.svg" text="No Contract Lock-ins"></ImageList>
                        </ul>
                    </div>
                    <div className="my-9 2xl:mb-0">
                        <ButtonComp {...propsForButton}></ButtonComp>
                    </div>

                </div>
                <div className="w-full 2xl:w-2/6 flex ">
                    <VideoComp />
                </div>
            </div>
        </section>
    );
}

export default SectionTwoComp;