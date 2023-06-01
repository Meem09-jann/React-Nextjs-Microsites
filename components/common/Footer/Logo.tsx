import Image from 'next/image'
import Link from "next/link";

import { LogoProps } from "../../../types/softwareproddev";

const Logo = (props: LogoProps) => {
    return (
        <div className="">
            <Link href={props.link}>
                <img className="h-[45px] w-auto" src={props.src} alt={props.alt} width={props.width} height={props.height} />
            </Link>
        </div>
    );
}

export default Logo;