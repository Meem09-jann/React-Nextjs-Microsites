import Link from "next/link";

import { LogoProps } from "../../../types/softwareproddev";

const LogoComp = (props: LogoProps) => {
    return (

        <Link className="" href={props.link}>
            <img className="h-[41.18px] w-[117px] m-auto" src={props.src} alt={props.alt} />
        </Link>

    );
}

export default LogoComp;