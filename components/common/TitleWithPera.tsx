import { TitleWithPeraProps } from "../../types/softwareproddev";
const TitleWithPeraComp = (props: TitleWithPeraProps) => {
    return (
        <>
            <h1 className={props.headingclasses}>
                {props.heading}
            </h1>
            <p className={props.textclasses}>
                {props.text}
            </p>
        </>


    );
}

export default TitleWithPeraComp;