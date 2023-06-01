import TitleWithPeraComp from "../../../common/TitleWithPera";
import { ButtonProps, TitleWithPeraProps } from "../../../../types/softwareproddev";
import ImagePeraListComp from "./SectionThree/ImagePeraList";
import { ImagePeraListProps } from "../../../../types/softwareproddev";
import ButtonComp from "../../../common/Button/Button";
const SectionThreeComp = () => {
    const propsForHeadingText: TitleWithPeraProps = {
        heading: "Our Software Product Development Services",
        text: "Our experienced product development teams guide you through technical and functional feasibility to elaborate and validate product development. As a software product development company, we offer a wide range of digital transformation services to make remarkable changes in the internet world.",
        headingclasses: "font-bold text-[42px] text-[#19224A] text-center mb-[15px]",
        textclasses: "font-normal text-xl text-[#828282] text-center"
    };

    const propsForCustSoftDev: ImagePeraListProps = {
        heading: "Custom Software Product Development",
        text: "We help our clients to convert their idea into a market-ready  software solution from the ground up, taking robustness,  scalability, and customization scope into account.",
        headingclasses: "font-medium text-xl mt-[29px]",
        textclasses: "font-light text-[15px] text-[#828282] mt-[14px]",
        img: "/img/cust_soft_prod.svg",
        list: [
            { listText: 'Industry-specific solutions', imgUrl: "/img/tic_blue.svg" },
            { listText: 'Line of business & add-on solutions', imgUrl: "/img/tic_blue.svg" },
            { listText: 'Customer & consumer apps', imgUrl: "/img/tic_blue.svg" }]
    };
    const propsForDigitalProd: ImagePeraListProps = {
        heading: "Digital Product Solutions",
        text: "As a leading product engineering company, we develop stable, high performance and robust digital products and services for your customers.",
        headingclasses: "font-medium text-xl mt-[29px]",
        textclasses: "font-light text-[15px] text-[#828282] mt-[14px]",
        img: "/img/digital_prod_sol.svg",
        list: [
            { listText: 'Online CRM & ERP tools', imgUrl: "/img/tic_blue.svg" },
            { listText: 'Line of business & add-on solutions', imgUrl: "/img/tic_blue.svg" },
            { listText: 'Project management tools', imgUrl: "/img/tic_blue.svg" }]
    };
    const propsForSoftProdEng: ImagePeraListProps = {
        heading: "Software Product Engineering        ",
        text: "As one of the best software engineering companies, we are adept at building product solutions for software integrations, performance improvisation, and app versions management.",
        headingclasses: "font-medium text-xl mt-[29px]",
        textclasses: "font-light text-[15px] text-[#828282] mt-[14px]",
        img: "/img/soft_prod_eng.svg",
        list: [
            { listText: 'Enterprise portal development', imgUrl: "/img/tic_blue.svg" },
            { listText: 'Middleware development', imgUrl: "/img/tic_blue.svg" },
            { listText: 'App Maintenance', imgUrl: "/img/tic_blue.svg" },]
    };
    const propsForAiBasedSoftProd: ImagePeraListProps = {
        heading: "AI Based Software Products",
        text: "We help our clients to convert their idea into a market-ready software solution from the ground up, taking robustness, scalability, and customization scope into account.",
        headingclasses: "font-medium text-xl mt-[29px]",
        textclasses: "font-light text-[15px] text-[#828282] mt-[14px]",
        img: "/img/ai_based_soft.svg",
        list: [
            { listText: 'Supply chain management tools', imgUrl: "/img/tic_blue.svg" },
            { listText: 'Personalized entertainment solutions', imgUrl: "/img/tic_blue.svg" },
            { listText: 'Data management software', imgUrl: "/img/tic_blue.svg" },]
    };
    const propsForMvpDev: ImagePeraListProps = {
        heading: "MVP Development",
        text: "As a leading product engineering company, we develop stable, high performance and robust digital products and services for your customers.",
        headingclasses: "font-medium text-xl mt-[29px]",
        textclasses: "font-light text-[15px] text-[#828282] mt-[14px]",
        img: "/img/mvp_development.svg",
        list: [
            { listText: 'Custom software solution', imgUrl: "/img/tic_blue.svg" },
            { listText: 'DevOps integration', imgUrl: "/img/tic_blue.svg" },
            { listText: 'Pilot MVP Development', imgUrl: "/img/tic_blue.svg" },]
    };
    const propsForItStaff: ImagePeraListProps = {
        heading: "IT Staff Augmentation Services",
        text: "As one of the best software engineering companies, we are adept at building product solutions for software integrations, performance improvisation, and app versions management.",
        headingclasses: "font-medium text-xl mt-[29px]",
        textclasses: "font-light text-[15px] text-[#828282] mt-[14px]",
        img: "/img/it_staff_augment_service.svg",
        list: [
            { listText: 'Onshore staffing', imgUrl: "/img/tic_blue.svg" },
            { listText: 'Offshore staffing', imgUrl: "/img/tic_blue.svg" },
            { listText: 'Nearshore staffing', imgUrl: "/img/tic_blue.svg" },]
    };

    const propsForButton: ButtonProps = {
        text: "Contact Us",
        type: "button",
        link: "#",
        classes: "bg-sky-500 text-white h-[57px] w-[221px] text-lg font-bold",
    };
    return (
        <section className="bg-[url('/img/section_bg.png')] w-full h-auto md:py-10  lg:pt-10  2xl:h-auto ">
            <div className="md:mx-28 lg:mx-40 2xl:mx-80">
                <div className="mb-[9px]  lg:h-auto  2xl:flex-row  2xl:mx-7">
                    <TitleWithPeraComp {...propsForHeadingText} />
                </div>
                <div className=" mx-14 mt-[66px] mb-[9px]  lg:h-auto   grid grid-cols-1 gap-y-16 gap-x-11 md:grid-cols-2 lg:grid-cols-3 lg:mx-0">
                    <ImagePeraListComp {...propsForCustSoftDev} />
                    <ImagePeraListComp {...propsForDigitalProd} />
                    <ImagePeraListComp {...propsForSoftProdEng} />
                    <ImagePeraListComp {...propsForAiBasedSoftProd} />
                    <ImagePeraListComp {...propsForMvpDev} />
                    <ImagePeraListComp {...propsForItStaff} />
                </div>
                <div className="mt-[34px] mb-[18px] text-center">
                    <ButtonComp {...propsForButton}></ButtonComp>
                </div>
            </div>



        </section>
    );
}

export default SectionThreeComp;