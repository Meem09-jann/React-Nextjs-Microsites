import MenuComp from "../../../common/Menu/Menu";
import LogoComp from "../../../common/Header/Logo";
import ButtonComp from "../../../common/Button/Button";
import { LogoProps, ButtonProps } from "../../../../types/softwareproddev";
import { MenuHeaderProps } from './../../../../types/softwareproddev';
import MenuDropdownComp from "../../../common/Menu/MenuDropdown";
const Header2Comp = (props: any) => {
    const siteurl: string = props.siteurl;
    const propsForBotLogo: LogoProps = {
        alt: "logo",
        src: "/img/ticon_bot.png",
        link: siteurl
    };
    const propsForButton: ButtonProps = {
        text: "Request a Demo",
        type: "button",
        link: "#",
        classes: "bg-sky-500 text-white h-10 w-48",
    };
    const propsForPlatformMenu: MenuHeaderProps = {
        text: "Platform",
        link: `#`,
        classes: "text-sky-500 font-bold  rounded-xl  hover:bg-sky-500 hover:text-white active:text-white  px-.5 py-2 hidden  md:flex  lg:text-lg lg:px-2 lg:py-2",
        droplist: ["dastfuytf", "ftsyftdstf", "dfgsdfgdsf"],
        img: "/img/drop_down_blue.svg"
    };
    return (
        <div className="flex text-right  justify-between">
            <div className="my-auto">
                <div id="headerLogo">
                    <LogoComp {...propsForBotLogo} ></LogoComp>
                </div>
            </div>
            <div className="flex">
                <div className="my-auto hidden xl:flex">
                    <ul className="float-right flex flex-row">
                        <MenuDropdownComp {...propsForPlatformMenu}></MenuDropdownComp>
                        <MenuComp link={`#`} text="Solutions"></MenuComp>
                        <MenuComp link={`#`} text="Success"></MenuComp>
                        <MenuComp link={`#`} text="Customers "></MenuComp>
                        <MenuComp link={`#`} text="Resource"></MenuComp>
                        <MenuComp link={`#`} text="Partners"></MenuComp>
                        <MenuComp link={`#`} text="Company"></MenuComp>
                    </ul>
                </div>
                <div> <ButtonComp {...propsForButton} /></div>
            </div>
        </div>
    );
}

export default Header2Comp;