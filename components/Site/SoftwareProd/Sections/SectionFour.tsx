import { ButtonProps, TitleWithPeraProps, imageType, SliderMenuProps } from '../../../../types/softwareproddev';
import ButtonComp from '../../../common/Button/Button';
import TitleWithPeraComp from '../../../common/TitleWithPera';
import MenuSliderComp from '../../../common/Slider/MenuSlider';
import ImageComp from '../../../common/Image/Image';
import ButtonWithImgComp from '../../../common/Button/ButtonWithImageRight';
import NumberWithTextAndLeftBorder from '../../../common/NumberWithTextAndLeftBorder';
const SectionFourComp = () => {
    const propsForImage: imageType = {
        src: "/img/decor_line_blue.svg",
        alt: "lines",
        width: 20,
        height: 20,
        classes: "w-[130px] h-auto m-auto",
        link: "#"
    }
    const propsForHeadingText: TitleWithPeraProps = {
        heading: "Heroes of the Intelligence Revolution",
        text: "Meet the customers transforming their industries with Augmented Intelligence",
        headingclasses: "font-bold text-[42px] text-[#19224A] text-center mb-[15px]",
        textclasses: "font-normal text-xl text-[#828282] text-center"
    };
    const propsForMenuSlider: SliderMenuProps = {
        menus: [
            { text: 'Business', link: "#tabs-business" },
            { text: 'Analytics', link: "#tabs-analytics" },
            { text: 'Operations', link: "#tabs-operations" }
        ],
        ulclasses: "nav nav-tabs list-none justify-start overflow-x-auto w-full flex lg:justify-center",
        liclasses: "nav-item w-52  py-3.5",
        linkclasses: "nav-link w-full flex  border-b-2 border-gray-200 justify-center text-[#384450] text-base font-bold leading-tight px-6 py-3 my-2  hover:border-[#18A6E1] hover:border-b-2 hover:text-[#18A6E1] hover:bg-gray-100 focus:border-transparent active:text-[#18A6E1] "
    };


    const propsForMoreStoriesButton: ButtonProps = {
        text: "Read More Stories",
        type: "button",
        link: "#",
        classes: "border-sky-500 rounded-lg border-2 text-sky-500 h-[42px] w-48",
    };

    return (
        <section className="m-auto w-auto mx-2 md:mx-28 mb-[105px] mt-[54px] lg:mx-40 2xl:mx-80 ">
            <div className='mb-9'>
                <ImageComp {...propsForImage} />
            </div>
            <div className='mb-9'>
                <TitleWithPeraComp {...propsForHeadingText} />
            </div>

            <MenuSliderComp {...propsForMenuSlider} />



            <div className='text-center mt-[35px]'>
                <ButtonComp {...propsForMoreStoriesButton} />
            </div>
        </section>
    );
}

export default SectionFourComp;