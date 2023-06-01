
import { ButtonProps, ImageWithTitleAndPeraProps, TitleWithPeraProps } from '../../../../types/softwareproddev';
import ButtonComp from '../../../common/Button/Button';
import TitleWithPeraComp from '../../../common/TitleWithPera';
import ImageWithRightTitleAndPeraComp from './../../../common/Image/ImageWithRightTitleAndPera';
const SectionSevenComp = () => {

    const propsForLaunched: ImageWithTitleAndPeraProps = {
        img: {
            src: "/img/rocket_launch_yellow.svg",
            alt: "rocket",
            width: 75,
            height: 75
        },
        title: "1500+",
        titleclasses: "font-bold text-white text-4xl",
        text: "PROJECT LAUNCHED",
        textclasses: "font-normal text-white text-lg",
    };
    const propsForExperience: ImageWithTitleAndPeraProps = {
        img: {
            src: "/img/experience_yellow.svg",
            alt: "experience",
            width: 75,
            height: 75
        },
        title: "14+",
        titleclasses: "font-bold text-white text-4xl",
        text: "YEARS EXPERIENCE",
        textclasses: "font-normal text-white text-lg",
    };
    const propsForCustomer: ImageWithTitleAndPeraProps = {
        img: {
            src: "/img/customer_yellow.svg",
            alt: "customer",
            width: 75,
            height: 75
        },
        title: "800+",
        titleclasses: "font-bold text-white text-4xl",
        text: "SATISFIED CUSTOMERS",
        textclasses: "font-normal text-white text-lg",
    };
    const propsForClient: ImageWithTitleAndPeraProps = {
        img: {
            src: "/img/client_yellow.svg",
            alt: "client",
            width: 75,
            height: 75
        },
        title: "75+",
        titleclasses: "font-bold text-white text-4xl",
        text: "CLIENT RETENTION",
        textclasses: "font-normal text-white text-lg",
    };
    const propsForHealthText: TitleWithPeraProps = {
        heading: "Ready To Get Started?",
        text: "As an experienced software product development company, we have the understanding to offer top-notch solutions to various corporations.",
        headingclasses: "font-bold text-[38px] text-white text-left mb-[15px]",
        textclasses: "font-normal text-base text-white text-left"
    };
    const propsForButton: ButtonProps = {
        text: "Contact Us",
        type: "button",
        link: "#",
        classes: "bg-[#FFBC00]  text-black h-[60px] w-[234px] text-xl mt-9 font-medium",
    };
    return (
        <section className="bg-[url('/img/deep_blue_bottom_bg.svg')] w-full h-max p-8 lg:p-0 md:py-10  lg:py-[175px]  2xl:h-auto xl:h-[621px]">
            <div className="h-auto md:mx-28 lg:mx-40  2xl:mx-80 flex flex-col lg:flex-row">
                <div className='grid grid-cols-1 gap-4 gap-y-[96px] xl:grid-cols-2 w-full lg:flex-row xl:w-4/6'>
                    <ImageWithRightTitleAndPeraComp {...propsForLaunched} />
                    <ImageWithRightTitleAndPeraComp {...propsForExperience} />
                    <ImageWithRightTitleAndPeraComp {...propsForCustomer} />
                    <ImageWithRightTitleAndPeraComp {...propsForClient} />
                </div>
                <div className='w-full text-center my-2 flex flex-col  xl:w-2/6 lg:text-left lg:my-auto'>
                    <TitleWithPeraComp {...propsForHealthText} />
                    <ButtonComp {...propsForButton} />
                </div>
            </div>
        </section>
    );
}

export default SectionSevenComp;