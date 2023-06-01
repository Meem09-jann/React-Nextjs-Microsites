import { ButtonProps, imageType, SliderImageProps, TitleWithPeraProps } from "../../../../types/softwareproddev";
import TitleWithPeraComp from "../../../common/TitleWithPera";
import ImageComp from "../../../common/Image/Image";
import ImageSliderComp from "../../../common/Slider/ImageSlider";
import ButtonWithImgComp from "../../../common/Button/ButtonWithImageRight";

const SectionFiveComp = () => {
    const propsForImageSlider: SliderImageProps = {
        img: [
            { src: '/img/CVS-Health.svg', alt: "cvs_health", width: 120, height: 84, classes: "", link: "#tabs-cvs" },
            { src: '/img/oyak_cement_logo.svg', alt: "oyak_cement", width: 120, height: 84, classes: "", link: "#tabs-oyak" },
            { src: '/img/flexiti-logo.svg', alt: "flexiti", width: 120, height: 84, classes: "", link: "#tabs-flexiti" },
            { src: '/img/NIM-logo.svg', alt: "nmi_logo", width: 120, height: 84, classes: "", link: "#tabs-nim" },
            { src: '/img/Valley_Logo.svg', alt: "valley", width: 120, height: 84, classes: "", link: "#tabs-valley" },
            { src: '/img/8451-logo.svg', alt: "8451-logo", width: 120, height: 84, classes: "", link: "#tabs-8451" },
            { src: '/img/turo-logo.svg', alt: "turo-logo", width: 120, height: 84, classes: "", link: "#tabs-turo" },

            { src: '/img/CVS-Health.svg', alt: "cvs_health", width: 120, height: 84, classes: "", link: "#tabs-cvs" },
            { src: '/img/oyak_cement_logo.svg', alt: "oyak_cement", width: 120, height: 84, classes: "", link: "#tabs-oyak" },
            { src: '/img/flexiti-logo.svg', alt: "flexiti", width: 120, height: 84, classes: "", link: "#tabs-flexiti" },
            // { src: '/img/NIM-logo.svg', alt: "nmi_logo", width: 120, height: 84, classes: "", link: "#tabs-nim" },
            // { src: '/img/Valley_Logo.svg', alt: "valley", width: 120, height: 84, classes: "", link: "#tabs-valley" },
            // { src: '/img/8451-logo.svg', alt: "8451-logo", width: 120, height: 84, classes: "", link: "#tabs-8451" },
            // { src: '/img/turo-logo.svg', alt: "turo-logo", width: 120, height: 84, classes: "", link: "#tabs-turo" },
        ],
        ulclasses: "w-full flex justify-center overflow-x-hidden",
        liclasses: "w-[full] m-auto text-center text-[#384450] text-base font-bold py-3.5 hover:border-[#18A6E1] hover:border-b-2 hover:text-[#18A6E1]"
    };

    return (
        <section className="bg-[url('/img/section_bg.png')] w-full h-auto md:py-10  lg:p-0 lg:pt-10 lg:pb-[118px] 2xl:h-auto ">
            <ImageSliderComp {...propsForImageSlider} />

        </section>
    );
}

export default SectionFiveComp;