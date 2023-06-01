import Link from "next/link";
import { ButtonProps, imageType, SliderMenuProps, TitleWithPeraProps } from "../../../types/softwareproddev";
import ButtonWithImgComp from "../Button/ButtonWithImageRight";
import ImageComp from "../Image/Image";
import NumberWithTextAndLeftBorder from "../NumberWithTextAndLeftBorder";
import TitleWithPeraComp from "../TitleWithPera";

const MenuSliderComp = (props: SliderMenuProps) => {
    const propsForHerosImage: imageType = {
        src: "/img/rogerio-pedral.svg",
        alt: "lines",
        width: 20,
        height: 20,
        classes: "w-full h-auto m-auto",
        link: "#"
    };
    const propsForHerosText: TitleWithPeraProps = {
        heading: "System and Automation Manager, Manufacturing",
        text: "Rogerio has over twenty years experience in technology, starting with Motorola’s Mobile Device practice and currently with Lenovo’s Brazil operations. He has led several innovative and transformative initiatives for Lenovo, one of the world’s largest technology companies with $45 billion revenue.",
        headingclasses: "font-black text-sm text-[#19224A] mb-[23px] ",
        textclasses: "font-normal text-base text-[#828282]"
    };
    const propsForButton: ButtonProps = {
        text: "Read More",
        type: "button",
        link: "#",
        classes: "ml-0 text-[#18A6E1] h-10 text-left text-base  hover:text-lg hover:text-sky-600",
        img: "/img/right_arrow_blue.svg"
    };
    const propsFor90Text: TitleWithPeraProps = {
        heading: "90%",
        text: "Reduction in model creation time",
        headingclasses: "font-bold text-[48px] text-[#19224A] text-center",
        textclasses: "font-normal text-[13px] text-[#828282] ml-8"
    };
    const propsFor75Text: TitleWithPeraProps = {
        heading: "7.5%",
        text: "Improved accuracy",
        headingclasses: "font-bold text-[48px] text-[#19224A] text-center",
        textclasses: "font-normal text-[13px] text-[#828282]  ml-8"
    };
    const propsFor5Text: TitleWithPeraProps = {
        heading: "5%",
        text: "Improved label validation rate",
        headingclasses: "font-bold text-[48px] text-[#19224A] text-center",
        textclasses: "font-normal text-[13px] text-[#828282] ml-8"
    };
    const propsFor998Text: TitleWithPeraProps = {
        heading: "99.8%",
        text: "Reduced time to productionalize models",
        headingclasses: "font-bold text-[48px] text-[#19224A] text-center",
        textclasses: "font-normal text-[13px] text-[#828282] ml-8"
    };
    return (

        <>
            <div className="w-full">
                <ul className={props.ulclasses} id="tabs-tab"
                    role="tablist">
                    {
                        props.menus?.map(({ text, link }) => (

                            <li key={text} className={props.liclasses} role="presentation">
                                <Link href={link} className={props.linkclasses} data-bs-toggle="pill" data-bs-target={link} role="tab" aria-controls="tabs-home"
                                    aria-selected="true" >
                                    {text}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="tab-content" id="tabs-tabContent">
                <div className="tab-pane fade show active" id="tabs-business" role="tabpanel" >
                    <div className='mt-[65px]  mx-0 flex flex-col xl:flex-row lg:mx-[110px]'>
                        <div className='flex items-center flex-col w-full lg:flex-row xl:w-3/5 lg:items-start'>
                            <div className='w-1/2  lg:mr-10 md:w-[140px]'>
                                <ImageComp {...propsForHerosImage} />
                            </div>
                            <div className='text-center w-full xl:w-2/3 xl:text-left'>
                                <h1 className='font-bold text-[34px] text-[#19224A]'>Rogerio Pedral</h1>
                                <div className='text-center mt-[13px] mb-[17px] lg:text-left'>
                                    <TitleWithPeraComp {...propsForHerosText} />
                                </div>
                                <ButtonWithImgComp {...propsForButton} />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:w-2/5 '>
                            <NumberWithTextAndLeftBorder {...propsFor90Text} />
                            <NumberWithTextAndLeftBorder {...propsFor75Text} />
                            <NumberWithTextAndLeftBorder {...propsFor5Text} />
                            <NumberWithTextAndLeftBorder {...propsFor998Text} />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tabs-analytics" role="tabpanel">
                    <div className='mt-[65px]  mx-0 flex flex-col xl:flex-row lg:mx-[110px]'>

                        <div className='flex items-center flex-col w-full lg:flex-row  lg:items-start'>
                            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:w-2/5 '>
                                <NumberWithTextAndLeftBorder {...propsFor90Text} />
                                <NumberWithTextAndLeftBorder {...propsFor75Text} />
                                <NumberWithTextAndLeftBorder {...propsFor5Text} />
                                <NumberWithTextAndLeftBorder {...propsFor998Text} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tabs-operations" role="tabpanel">
                    <div className='mt-[65px]  mx-0 flex flex-col xl:flex-row lg:mx-[110px]'>
                        <div className='w-1/2  lg:mr-10 md:w-[140px]'>
                            <ImageComp {...propsForHerosImage} />
                        </div>
                        <div className='text-center w-full xl:w-2/3 xl:text-left'>
                            <h1 className='font-bold text-[34px] text-[#19224A]'>Rogerio Pedral</h1>
                            <div className='text-center mt-[13px] mb-[17px] lg:text-left'>
                                <TitleWithPeraComp {...propsForHerosText} />
                            </div>
                            <ButtonWithImgComp {...propsForButton} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuSliderComp;