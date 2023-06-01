

import Link from "next/link";
import { text } from "stream/consumers";
import { MenuHeaderProps, DropdownMenuProps } from "../../../types/softwareproddev";
import DropdownMenuComp from "../Dropdown/DropdownForMenu";
const MenuDropdownComp = (props: MenuHeaderProps) => {

    const data: any = props.droplist;
    const style: object = {
        className: `${props.classes}`,
    }
    return (

        <li {...style}>
            <div className="dropdown relative xl:m-auto w-full">
                <button
                    className="w-full dropdown-toggle text-base transition  duration-150 ease-in-out flex items-center whitespace-nowrap xl:text-base "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {props.text}
                    <img src={props.img} alt="expand" className="w-5 h-fit mr-0 ml-auto p-0.5 xl:w-full xl:m-auto" />
                </button>
                <DropdownMenuComp {...props.droplist}></DropdownMenuComp>
            </div>
        </li>
    );
}

export default MenuDropdownComp;