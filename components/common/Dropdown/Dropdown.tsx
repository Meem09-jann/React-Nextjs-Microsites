import Link from 'next/link';
import Image from 'next/image'
import { DropdownHeaderProps } from '../../../types/softwareproddev';
const DropdownComp = (props: DropdownHeaderProps) => {

    const style: object = {
        className: `cursor-pointer  hover:underline font-bold text-xs rounded py-1 px-2 ${props.classes} md:w-34 md:h-8 lg:w-36 lg:h-9 `,
    }
    return (
        <div className="dropdown relative">
            <button
                className=" dropdown-toggle  transition  duration-150 ease-in-out flex items-center whitespace-nowrap "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <Image className="h-auto  rounded-full" src="/img/usa.png" alt="" width={25} height={0} />
                <p className="ml-2 " >{props.text}</p>
                <img className='ml-2' src="/img/drop_down.svg" alt="Dropdown" />
            </button>
            <ul className="country_ul dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                    <Link className="country_li " href="#">
                        Usa
                    </Link>
                    <Link className="country_li" href="#">
                        BD
                    </Link>
                    <Link className="country_li" href="#">
                        Kr
                    </Link>
                </li>

            </ul>
        </div>
    );
}

export default DropdownComp;