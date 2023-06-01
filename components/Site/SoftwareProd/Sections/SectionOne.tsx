import SliderComp from "./SectionOne/Slider";
import BottomMenuComp from "./SectionOne/BottomMenu";
import TopSliderComp from "./SectionOne/TopSlider";
const SectionOneComp = () => {

    return (
        <section className="bg-[url('/img/section_bg.png')] w-full md:py-10  lg:pt-10 lg:pb-[72px] 2xl:h-auto ">
            <TopSliderComp />
            <BottomMenuComp />
        </section>
    );
}

export default SectionOneComp;