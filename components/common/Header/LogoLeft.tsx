import Image from 'next/image'
import Link from "next/link";

import { LogoProps } from "../../../types/softwareproddev";

const LogoLeftComp = (props: LogoProps) => {
    return (
        <div className="navbar-header bg-white">
            <Link className="navbar-brand" href={props.link}>
                <Image className="logo w-auto h-[60px]" src={props.src} alt={props.alt} width={props.width} height={props.height} />
            </Link>
        </div>
    );
}

export default LogoLeftComp;