import Link from "next/link";
import { ButtonProps } from "../../../types/softwareproddev";
const ButtonWithImgComp = (props: ButtonProps) => {
    const style: object = {
        className: `cursor-pointer font-bold rounded  m-auto flex   ${props.classes} 2xl:ml-0`,
    }
    return (
        <div>
            <Link href={props.link}>
                <button  {...style} type={props.type}>
                    <p className="m-auto mr-3">{props.text}</p>
                    <img src={props.img} alt="rightarrow" className=" p-0.5 w-3 h-fit my-auto mx-0" />
                </button>
            </Link>
        </div>
    );
}

export default ButtonWithImgComp;