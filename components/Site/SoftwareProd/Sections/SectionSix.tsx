import { ImageMenuProps, TitleWithPeraProps } from "../../../../types/softwareproddev";
import ImageMenuWithTextRightComp from "../../../common/Menu/ImageMenuWithTextRight";
import TitleWithPeraComp from './../../../common/TitleWithPera';

const SectionSixComp = () => {

    const propsForSkilledText: TitleWithPeraProps = {
        heading: "Technologies & Frameworks Our Teams Skilled In",
        text: "As an Indian hybrid apps development company, we offer development teams that are adept at all the latest technologies. Our developers build secure & scalable software using your preferred technology stack.",
        headingclasses: "font-bold text-[42px] text-[#19224A] text-center mb-[20px]",
        textclasses: "font-normal text-xl text-[#828282] text-center"
    };
    const propsForMobility: ImageMenuProps = {
        text: "Mobility",
        classes: "h-full w-full lg:h-[178px] m-auto flex flex-col lg:flex-row py-4 justify-around text-2xl font-semibold bg-[#f6f8f9]",
        img: [
            { src: '/img/skilled/android.svg', alt: "android", width: 63.6, height: 70, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Android", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/ios.svg', alt: "ios", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "iOS", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/xamarin.svg', alt: "xamarin", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Xamarin", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/react_native.svg', alt: "react_native", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "React Native", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/flutter.svg', alt: "flutter", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Flutter", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/ionic.svg', alt: "ionic", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Ionic", textclasses: "skill_menu_image_text" }
        ],
        ulclasses: "flex justify-around",
        liclasses: "flex flex-col flex-wrap items-center "
    };

    const propsForFrontEnd: ImageMenuProps = {
        text: "Frontend & Full Stack",
        classes: "h-full w-full lg:h-[178px] m-auto flex flex-col lg:flex-row py-4 justify-around text-2xl font-semibold",
        img: [
            { src: '/img/skilled/angular.svg', alt: "angular", width: 63.6, height: 70, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Angular", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/vuejs.svg', alt: "vuejs", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Vue", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/xamarin2.svg', alt: "xamarin", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Xamarin", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/react_native.svg', alt: "react_native", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "React Native", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/mean.svg', alt: "MEAN", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "MEAN", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/mern.svg', alt: "mern", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Ionic", textclasses: "skill_menu_image_text" }
        ],
        ulclasses: "flex justify-around",
        liclasses: "flex flex-col flex-wrap items-center "
    };

    const propsForBackend: ImageMenuProps = {
        text: "Backend",
        classes: "h-full w-full lg:h-[178px] m-auto flex flex-col lg:flex-row py-4 justify-around text-2xl font-semibold bg-[#f6f8f9]",
        img: [
            { src: '/img/skilled/dotnet.svg', alt: "dotnet", width: 63.6, height: 70, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: ".NET", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/java.svg', alt: "java", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Java", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/php.svg', alt: "php", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "PHP", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/laravel.svg', alt: "laravel", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Laravel", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/python.svg', alt: "python", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Python", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/nodejs.svg', alt: "node js", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Node Js", textclasses: "skill_menu_image_text" }
        ],
        ulclasses: "flex justify-around",
        liclasses: "flex flex-col flex-wrap items-center"
    };

    const propsForContentManagement: ImageMenuProps = {
        text: "Content Management",
        classes: "h-full w-full lg:h-[178px] m-auto flex flex-col lg:flex-row py-4 justify-around text-2xl font-semibold",
        img: [
            { src: '/img/skilled/sharepoint.svg', alt: "sharepoint", width: 63.6, height: 70, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Sharepoint", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/sitecore.svg', alt: "sitecore", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Sitecore", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/drupal.svg', alt: "drupal", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Drupal", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/sitefinity.svg', alt: "sitefinity", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Sitefinity", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/umbraco.svg', alt: "umbraco", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Umbraco", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/kentico.svg', alt: "kentico", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Kentico", textclasses: "skill_menu_image_text" }
        ],
        ulclasses: "flex justify-around",
        liclasses: "flex flex-col flex-wrap items-center "
    };
    const propsForBlockchain: ImageMenuProps = {
        text: "Blockchain & ML",
        classes: "h-full w-full lg:h-[178px] m-auto flex flex-col lg:flex-row py-4 justify-around text-2xl font-semibold bg-[#f6f8f9]",
        img: [
            { src: '/img/skilled/chatBot.svg', alt: "chatBot", width: 63.6, height: 70, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "ChatBot", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/ethereum.svg', alt: "ethereum", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Ethereum", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/hyperledger.svg', alt: "php", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Hyperledger", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/smartContract.svg', alt: "smartContract", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Smart Contract", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/mlai.svg', alt: "mlai", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "ML & AI", textclasses: "skill_menu_image_text" },
            { src: '/img/skilled/tensorflow.svg', alt: "tensorflow", width: 63.6, height: 84, classes: "w-1/2 my-auto md:w-3/6 lg:w-auto", link: "", text: "Tensorflow", textclasses: "skill_menu_image_text" }
        ],
        ulclasses: "flex justify-around",
        liclasses: "flex flex-col flex-wrap items-center "
    };

    return (
        <section className=" w-full h-auto md:py-10   lg:pt-10 lg:pb-[87px] lg:m2xl:h-auto ">
            <div className="w-full">
                <div className="md:mx-28 lg:mx-40 2xl:mx-80">
                    <TitleWithPeraComp {...propsForSkilledText} />
                </div>
                <ul className="flex flex-col h-auto mt-[88px]">
                    <ImageMenuWithTextRightComp {...propsForMobility} />
                    <ImageMenuWithTextRightComp {...propsForFrontEnd} />
                    <ImageMenuWithTextRightComp {...propsForBackend} />
                    <ImageMenuWithTextRightComp {...propsForContentManagement} />
                    <ImageMenuWithTextRightComp {...propsForBlockchain} />
                </ul>
            </div>
        </section>
    );
}

export default SectionSixComp;