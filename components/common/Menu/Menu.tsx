import Link from "next/link";
import { MenuHeaderProps, DropdownMenuProps } from "../../../types/softwareproddev";
import DropdownMenuComp from "../Dropdown/DropdownForMenu";

const MenuComp = ({ link, text }: MenuHeaderProps) => {

    return (
        <li className="text-sky-500 font-bold rounded-xl  hover:bg-sky-500 hover:text-white active:text-white px-.5 py-2 hidden  md:flex  lg:text-lg lg:px-2 lg:py-2">
            <Link className="text-base " href={link}>{text}
            </Link>
            <img src="/img/drop_down_blue.svg" alt="expand" className=" p-0.5 w-full h-fit m-auto" />
        </li>
    );
}

export default MenuComp;