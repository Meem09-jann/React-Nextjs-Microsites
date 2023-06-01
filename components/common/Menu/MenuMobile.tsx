import MenuDropdownComp from "./MenuDropdown";
import MenuComp from "./Menu";
import { MenuHeaderProps } from "../../../types/softwareproddev";
const MenuMobileComp = () => {
    const icon: string = "/img/drop_down.svg";
    const classes: string = "font-bold  text-white rounded-xl  w-full hover:bg-sky-500 hover:text-white focus:bg-sky-500 active:text-white px-2 py-3   md:flex  lg:text-lg  lg:py-4"
    const propsForPlatformMenu: MenuHeaderProps = {
        text: "Platform",
        link: `platform`,
        classes: classes,
        droplist: ["dastfuytf", "ftsyftdstf", "dfgsdfgdsf"],
        img: icon
    };
    const propsForSolutionsMenu: MenuHeaderProps = {
        text: "Solutions",
        link: `solutions`,
        classes: classes,
        droplist: ["dastfuytf", "ftsyftdstf", "dfgsdfgdsf"],
        img: icon
    };
    const propsForSuccessMenu: MenuHeaderProps = {
        text: "Success",
        link: `success`,
        classes: classes,
        droplist: ["dastfuytf", "ftsyftdstf", "dfgsdfgdsf"],
        img: icon
    };
    const propsForCustomersMenu: MenuHeaderProps = {
        text: "Customers",
        link: `customers`,
        classes: classes,
        droplist: ["dastfuytf", "ftsyftdstf", "dfgsdfgdsf"],
        img: icon
    };
    const propsForResourceMenu: MenuHeaderProps = {
        text: "Resource",
        link: `Resource`,
        classes: classes,
        droplist: ["dastfuytf", "ftsyftdstf", "dfgsdfgdsf"],
        img: icon
    };
    const propsForPartnersMenu: MenuHeaderProps = {
        text: "Partners",
        link: `Partners`,
        classes: classes,
        droplist: ["dastfuytf", "ftsyftdstf", "dfgsdfgdsf"],
        img: icon
    };
    const propsForCompanyMenu: MenuHeaderProps = {
        text: "Company",
        link: `Company`,
        classes: classes,
        droplist: ["dastfuytf", "ftsyftdstf", "dfgsdfgdsf"],
        img: icon
    };
    return (
        <div id="mobileMenu" className="absolute w-52 h-screen bg-sky-400 top-0 left-0 md:w-52 z-10 hidden xl:hidden">
            <ul className="float-left flex flex-col p-5 w-full items-start">
                <MenuDropdownComp {...propsForPlatformMenu}></MenuDropdownComp>
                <MenuDropdownComp {...propsForSolutionsMenu}></MenuDropdownComp>
                <MenuDropdownComp {...propsForSuccessMenu}></MenuDropdownComp>
                <MenuDropdownComp {...propsForCustomersMenu}></MenuDropdownComp>
                <MenuDropdownComp {...propsForResourceMenu}></MenuDropdownComp>
                <MenuDropdownComp {...propsForPartnersMenu}></MenuDropdownComp>
                <MenuDropdownComp {...propsForCompanyMenu}></MenuDropdownComp>
            </ul>

        </div>
    );
}

export default MenuMobileComp;