import Image from 'next/image'
import Link from "next/link";

import { LogoProps } from "../../../types/softwareproddev";
const Icon = (props: LogoProps) => {
    return (
        <>
            <Link href={props.link}>
                <Image className="h-[10px] w-auto" src={props.src} alt={props.alt} width={props.width} height={props.height} />
            </Link>
        </>
    );
}

export default Icon;