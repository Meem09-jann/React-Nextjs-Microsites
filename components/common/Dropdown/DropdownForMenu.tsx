import Link from 'next/link';
import Image from 'next/image'
import { DropdownHeaderProps } from '../../../types/softwareproddev';
const DropdownMenuComp = (props: any) => {

    let list;
    var resultArray = Object.keys(props).map(function (text) {
        list = props[text];
        return list;
    });

    return (


        <ul className="country_ul hidden dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
                <Link className="country_li " href="props">
                    List 1
                </Link>
            </li>
            <li>
                <Link className="country_li " href="props">
                    List 2
                </Link>
            </li>
            <li>
                <Link className="country_li " href="props">
                    List 3
                </Link>
            </li>
        </ul>

    );
}

export default DropdownMenuComp;