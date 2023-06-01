import Link from "next/link";
import { ButtonProps } from "../../../types/softwareproddev";
const ButtonComp = (props: ButtonProps) => {
    const style: object = {
        className: `cursor-pointer font-bold rounded  hover:bg-sky-500 hover:text-white   ${props.classes}`,
    }
    return (
        <div>
            <Link href={props.link}>
                <button  {...style} type={props.type}>
                    <p className="m-auto">{props.text}</p>
                </button>
            </Link>
        </div>
    );
}

export default ButtonComp;