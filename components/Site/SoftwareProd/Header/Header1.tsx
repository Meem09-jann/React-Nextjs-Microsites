import { DropdownHeaderProps } from "../../../../types/softwareproddev";
import DropdownComp from "../../../common/Dropdown/Dropdown";
import MenuAccordionComp from "../../../common/Menu/MenuAccordion";
import MenuMobileComp from "../../../common/Menu/MenuMobile";
import SearchComp from "../../../common/Search";
const Header1Comp = () => {

    const propsForDropdown: DropdownHeaderProps = {
        text: "US",
        img: "/img/usa.png",
        link: "#",
        classes: "bg-sky-500 text-white h-7 w-32 ",
        ulclasses: "country_ul",
        liclasses: "country_li"
    };
    function showMenu() {
        let accordionMenu = document.getElementById("accordionMenu");
        accordionMenu?.classList.toggle("hidden")
        let hiddenClass = accordionMenu?.classList.contains("hidden")
        let mobileMenuBar = document.getElementById("mobileMenuBar");
        let headerLogo = document.getElementById("headerLogo");

        if (!hiddenClass) {

            mobileMenuBar?.classList.add("hidden")
            headerLogo?.classList.add("hidden")
        } else {
            mobileMenuBar?.classList.remove("hidden")
            headerLogo?.classList.remove("hidden")
        }
    }
    return (

        <div className="flex justify-between">
            <MenuAccordionComp showMenu={showMenu} ></MenuAccordionComp>
            <div className="mx-0 my-auto ">
                <button id="mobileMenuBar" onClick={() => { showMenu() }}><img className="xl:hidden" src="/img/menu_bar_blue.svg" alt="" /></button>
            </div>
            <div className="flex justify-end">
                <div className="flex justify-center">
                    <div className='bg-sky-500 text-white  hover:bg-cyan-600 hover:shadow-lg  active:text-white rounded-lg w-[88px] h-8 flex px-2 mr-4 py-1'>
                        <DropdownComp {...propsForDropdown} />
                    </div>
                </div>
                <SearchComp />
            </div>

        </div>


    );
}

export default Header1Comp;