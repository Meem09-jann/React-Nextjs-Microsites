import Link from "next/link";
import LogoComp from "../Header/Logo";
import { LogoProps } from "../../../types/softwareproddev";
import { AiOutlineClose } from 'react-icons/ai';
const MenuAccordionComp = ({ showMenu }) => {
    let btnclasses: string = "accordion-button collapsed relative flex items-center font-bold text-white  w-full hover:bg-sky-500 hover:text-white focus:bg-sky-500 active:text-white px-2 py-3 transition focus:outline-none"
    const liclasses: string = "font-bold  text-white text-left hover:text-sky-700 w-full  px-2 py-3   "
    const siteurl: string = "#";
    const propsForBotLogo: LogoProps = {
        alt: "logo",
        src: "/img/ticon_bot.png",
        link: siteurl
    };
    return (
        <div id="accordionMenu" className="fixed w-52 h-screen bg-sky-400 top-0 left-0 md:w-52 z-10 hidden xl:hidden accordion" >
            <div className="w-full h-max ">
                <div className="my-auto bg-slate-50 py-2 flex justify-around">
                    <LogoComp {...propsForBotLogo} ></LogoComp>
                    <button onClick={() => { showMenu() }} ><AiOutlineClose></AiOutlineClose></button>
                </div>
            </div>
            <div className="accordion-item bg-sky-400 border border-gray-200">
                <h2 className="accordion-header mb-0">
                    <button className={btnclasses} type="button" data-bs-toggle="collapse" data-bs-target="#platform_menu" aria-expanded="false"
                        aria-controls="platform_menu">
                        Platform
                    </button>
                </h2>
                <div id="platform_menu" className="accordion-collapse collapse"
                    data-bs-parent="#accordionMenu">
                    <div className="accordion-body py-4 px-5 bg-sky-300">
                        <ul className="flex flex-col  w-full items-start" >
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-sky-400 border border-gray-200">
                <h2 className="accordion-header mb-0">
                    <button className={btnclasses} type="button" data-bs-toggle="collapse" data-bs-target="#solutions_menu" aria-expanded="false"
                        aria-controls="solutions_menu">
                        Solutions
                    </button>
                </h2>
                <div id="solutions_menu" className="accordion-collapse collapse"
                    data-bs-parent="#accordionMenu">
                    <div className="accordion-body py-4 px-5 bg-sky-300">
                        <ul className="flex flex-col  w-full items-start" >
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-sky-400 border border-gray-200">
                <h2 className="accordion-header mb-0">
                    <button className={btnclasses} type="button" data-bs-toggle="collapse" data-bs-target="#success_menu" aria-expanded="false"
                        aria-controls="success_menu">
                        Success
                    </button>
                </h2>
                <div id="success_menu" className="accordion-collapse collapse"
                    data-bs-parent="#accordionMenu">
                    <div className="accordion-body py-4 px-5 bg-sky-300">
                        <ul className="flex flex-col  w-full items-start" >
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-sky-400 border border-gray-200">
                <h2 className="accordion-header mb-0">
                    <button className={btnclasses} type="button" data-bs-toggle="collapse" data-bs-target="#customers_menu" aria-expanded="false"
                        aria-controls="customers_menu">
                        Customers
                    </button>
                </h2>
                <div id="customers_menu" className="accordion-collapse collapse"
                    data-bs-parent="#accordionMenu">
                    <div className="accordion-body py-4 px-5 bg-sky-300">
                        <ul className="flex flex-col  w-full items-start" >
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                            <Link href="#" className="w-full"><li className={liclasses}>platform1</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MenuAccordionComp;