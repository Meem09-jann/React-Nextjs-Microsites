import { TitleWithPeraProps } from "../../types/softwareproddev";
const NumberWithTextAndLeftBorder = (props: TitleWithPeraProps) => {
    return (

        <div>
            <div className="flex mb-[12px] justify-start">
                <div className="p-4 my-2 border-l-[3px] border-sky-500"></div>
                <h1 className={props.headingclasses}>
                    {props.heading}
                </h1>
            </div>
            <p className={props.textclasses}>
                {props.text}
            </p>
        </div>
    );
}

export default NumberWithTextAndLeftBorder;